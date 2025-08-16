import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, commercialRegister, serviceType, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !serviceType || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Required fields are missing' 
      });
    }

    console.log('Sending contact form email via Resend...');
    
    const result = await resend.emails.send({
      from: 'Hussein Almohmmed Law Firm <contact@faresattallah.website>',
      to: 'ayoub6669@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0c4b3b 0%, #226249 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .section { margin-bottom: 20px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 8px; }
            .label { font-weight: bold; color: #0c4b3b; }
            .value { margin-left: 10px; }
            .divider { border-top: 2px solid #c49a6c; margin: 30px 0; }
            .english { direction: ltr; text-align: left; }
            .arabic { direction: rtl; text-align: right; }
            .message-box { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #c49a6c; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div style="position: relative;">
                <img src="https://i.imgur.com/SiCHPog.png" alt="Hussein Almohmmed Law Firm" style="width: 60px; height: 60px; border-radius: 8px; position: absolute; top: 0; left: 0;" />
                <div style="text-align: center; padding-top: 10px;">
                  <h1 style="margin: 0;">طلب استشارة جديد</h1>
                  <h2 style="margin: 10px 0 0 0; font-size: 1.2em;">New Consultation Request</h2>
                </div>
              </div>
            </div>
            
            <div class="section arabic">
              <h3 style="color: #0c4b3b; margin-top: 0;">معلومات العميل</h3>
              <p><span class="label">الاسم الكامل:</span> <span class="value">${name}</span></p>
              <p><span class="label">البريد الإلكتروني:</span> <span class="value">${email}</span></p>
              <p><span class="label">رقم الهاتف:</span> <span class="value">${phone || 'غير محدد'}</span></p>
              ${commercialRegister ? `<p><span class="label">السجل التجاري:</span> <span class="value">${commercialRegister}</span></p>` : ''}
            </div>
            
            <div class="section arabic">
              <h3 style="color: #0c4b3b; margin-top: 0;">تفاصيل الخدمة</h3>
              <p><span class="label">نوع الخدمة المطلوبة:</span> <span class="value">${serviceType}</span></p>
              <p><span class="label">موضوع الاستشارة:</span> <span class="value">${subject}</span></p>
            </div>
            
            <div class="section arabic">
              <h3 style="color: #0c4b3b; margin-top: 0;">تفاصيل الاستشارة</h3>
              <div class="message-box">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="section english">
              <h3 style="color: #0c4b3b; margin-top: 0;">Client Information</h3>
              <p><span class="label">Full Name:</span> <span class="value">${name}</span></p>
              <p><span class="label">Email:</span> <span class="value">${email}</span></p>
              <p><span class="label">Phone Number:</span> <span class="value">${phone || 'Not provided'}</span></p>
              ${commercialRegister ? `<p><span class="label">Commercial Register:</span> <span class="value">${commercialRegister}</span></p>` : ''}
            </div>
            
            <div class="section english">
              <h3 style="color: #0c4b3b; margin-top: 0;">Service Details</h3>
              <p><span class="label">Required Service Type:</span> <span class="value">${serviceType}</span></p>
              <p><span class="label">Consultation Subject:</span> <span class="value">${subject}</span></p>
            </div>
            
            <div class="section english">
              <h3 style="color: #0c4b3b; margin-top: 0;">Consultation Details</h3>
              <div class="message-box">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
              <p style="margin: 0; color: #666; font-size: 0.9em;">
                تم إرسال هذا الطلب من موقع مكتب حسين بن أحمد آل محمد للمحاماة
                <br>
                This consultation request was submitted from Hussein Ahmed Almohmmed Law Firm website
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('Contact form email sent successfully:', result);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form email error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
} 