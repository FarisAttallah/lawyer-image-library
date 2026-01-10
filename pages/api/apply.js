import { Resend } from 'resend';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default async function handler(req, res) {
  console.log('Starting to parse form...');
  if (req.method !== 'POST') return res.status(405).end();

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Formidable error:', err);
      return res.status(500).json({ success: false, error: err.message });
    }

    console.log('FIELDS:', fields);
    console.log('FILES:', files);

    const { jobTitle, jobLocation, jobTitleAr, jobLocationAr, jobId } = fields;
    const resume = files.resume;

    let attachments = [];
    if (resume && Array.isArray(resume) && resume[0]) {
      attachments.push({
        filename: resume[0].originalFilename,
        content: fs.readFileSync(resume[0].filepath),
      });
    }

    try {
      console.log('Sending email via Resend...');
      const result = await resend.emails.send({
        from: 'Hussein Almohmmed Law Firm <careers@faresattallah.website>',
        to: 'info@almohmmed.com',
        subject: `New Job Application: ${jobTitle}`,
        html: `
          <!DOCTYPE html>
          <html dir="rtl" lang="ar">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Job Application</title>
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #414042; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #284268 0%, #284268 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
              .section { margin-bottom: 20px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; }
              .label { font-weight: bold; color: #284268; }
              .value { margin-left: 10px; }
              .divider { border-top: 2px solid #FFFFFF; margin: 30px 0; }
              .english { direction: ltr; text-align: left; }
              .arabic { direction: rtl; text-align: right; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div style="position: relative;">
                  <img src="https://i.imgur.com/SiCHPog.png" alt="Hussein Almohmmed Law Firm" style="width: 60px; height: 60px; border-radius: 8px; position: absolute; top: 0; left: 0;" />
                  <div style="text-align: center; padding-top: 10px;">
                    <h1 style="margin: 0;">طلب توظيف جديد</h1>
                    <h2 style="margin: 10px 0 0 0; font-size: 1.2em;">New Job Application</h2>
                  </div>
                </div>
              </div>
              
              <div class="section arabic">
                <h3 style="color: #284268; margin-top: 0;">تفاصيل الوظيفة</h3>
                <p><span class="label">الوظيفة:</span> <span class="value">${jobTitleAr || jobTitle}</span></p>
                <p><span class="label">الموقع:</span> <span class="value">${jobLocationAr || jobLocation}</span></p>
              </div>
              
              <div class="section arabic">
                <h3 style="color: #284268; margin-top: 0;">معلومات المتقدم</h3>
                <p><span class="label">الاسم:</span> <span class="value">${fields.name}</span></p>
                <p><span class="label">البريد الإلكتروني:</span> <span class="value">${fields.email}</span></p>
                <p><span class="label">رقم الهاتف:</span> <span class="value">${fields.phone}</span></p>
              </div>
              
              <div class="divider"></div>
              
              <div class="section english">
                <h3 style="color: #284268; margin-top: 0;">Job Details</h3>
                <p><span class="label">Position:</span> <span class="value">${jobTitle}</span></p>
                <p><span class="label">Location:</span> <span class="value">${jobLocation}</span></p>
              </div>
              
              <div class="section english">
                <h3 style="color: #284268; margin-top: 0;">Applicant Information</h3>
                <p><span class="label">Name:</span> <span class="value">${fields.name}</span></p>
                <p><span class="label">Email:</span> <span class="value">${fields.email}</span></p>
                <p><span class="label">Phone:</span> <span class="value">${fields.phone}</span></p>
              </div>
              
              ${resume && Array.isArray(resume) && resume[0] ? `
              <div class="section">
                <h3 style="color: #284268; margin-top: 0;">📎 Resume Attached</h3>
                <p style="margin: 0;">File: ${resume[0].originalFilename}</p>
              </div>
              ` : ''}
              
              <div style="text-align: center; margin-top: 30px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <p style="margin: 0; color: #666; font-size: 0.9em;">
                  تم إرسال هذا الطلب من موقع مكتب حسين بن أحمد آل محمد للمحاماة
                  <br>
                  This application was submitted from Hussein Ahmed Almohmmed Law Firm website
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
        attachments,
      });
      console.log('Resend result:', result);

      // Increment applicants in Supabase
      let updateError = null;
      if (jobId) {
        // Use id if provided
        // Fetch current applicants count
        const { data, error: fetchError } = await supabase
          .from('jobs')
          .select('applicants')
          .eq('id', jobId)
          .single();
        if (!fetchError && data) {
          const currentApplicants = data.applicants || 0;
          const { error } = await supabase
            .from('jobs')
            .update({ applicants: currentApplicants + 1 })
            .eq('id', jobId);
          updateError = error;
        } else {
          updateError = fetchError;
        }
      } else {
        // fallback to old method if jobId not provided
        const { data, error: fetchError } = await supabase
          .from('jobs')
          .select('id,applicants')
          .or(`title_en.eq.${jobTitle},location_en.eq.${jobLocation}`)
          .maybeSingle();
        if (!fetchError && data) {
          const currentApplicants = data.applicants || 0;
          const { error } = await supabase
            .from('jobs')
            .update({ applicants: currentApplicants + 1 })
            .eq('id', data.id);
          updateError = error;
        } else {
          updateError = fetchError;
        }
      }
      if (updateError) {
        console.error('Supabase update error:', updateError);
        // Don't fail the request if email was sent, just log
      }

      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Resend error:', err);
      res.status(500).json({ success: false, error: err.message });
    }
  });
} 
