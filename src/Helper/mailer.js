import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

/**
 * Send an email using Nodemailer.
 * 
 * @param {Object} options
 * @param {"query" | "verify" | "reset"} options.type - Email type
 * @param {string} options.email - Recipient's email
 * @param {string} [options.name] - Full name (used in query emails)
 * @param {string} [options.phone] - Phone number (used in query emails)
 * @param {string} [options.message] - Message content (used in query emails)
 * @param {string} [options.hashedToken] - Token for verify/reset
 */
export async function sendEmail({
  type,
  email='',
  name = '',
  phone = '',
  message = '',
  topic='',
  hashedToken = '',
}) {
  let subject = '';
  let html = '';

  if (type === 'query') {
  subject = 'New Query from Website';
  html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${subject}</title>
      </head>
      <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2>New Query Submitted</h2>
        <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px;"><strong>Name:</strong></td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Phone:</strong></td>
            <td style="padding: 8px;">${phone}</td>
          </tr>
          ${email ? `
          <tr>
            <td style="padding: 8px;"><strong>Email:</strong></td>
            <td style="padding: 8px;">${email}</td>
          </tr>` : ''}
          ${topic ? `
          <tr>
            <td style="padding: 8px;"><strong>Topic:</strong></td>
            <td style="padding: 8px;">${topic}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 8px; vertical-align: top;"><strong>Message:</strong></td>
            <td style="padding: 8px;">${message}</td>
          </tr>
        </table>
      </body>
    </html>
  `;
} else if (type === 'verify' || type === 'reset') {
  const action = type === 'verify' ? 'verify your email' : 'reset your password';
  subject = type === 'verify' ? 'Verify Your Email' : 'Reset Your Password';
  const link = `${process.env.DOMAIN}/${type === 'verify' ? 'verifyemail' : 'resetpassword'}?token=${hashedToken}`;
  
  html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${subject}</title>
      </head>
      <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <p>Please click the button below to ${action}:</p>
        <p>
          <a href="${link}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 4px;">
            ${action.charAt(0).toUpperCase() + action.slice(1)}
          </a>
        </p>
        <p>If the button above doesn’t work, copy and paste the following link into your browser:</p>
        <p><a href="${link}">${link}</a></p>
      </body>
    </html>
  `;
} else {
  throw new Error('Invalid email type');
}


  const mailOptions = {
    from: `"Medicheck" <${process.env.MAIL_USER}>`,
    to: `info@medicheckhospitals.in`,
    
    // to:`dev.yogeshkumar01@gmail.com`,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}
