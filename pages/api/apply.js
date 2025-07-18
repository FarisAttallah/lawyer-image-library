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

    const { jobTitle, jobLocation, jobId } = fields;
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
        from: 'Job Board <careers@hussein-almohmmed.careers>',
        to: 'ayoub6669@gmail.com',
        subject: `New Job Application: ${jobTitle}`,
        text: `Job: ${jobTitle} (${jobLocation})\nName: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}`,
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