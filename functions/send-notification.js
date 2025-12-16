const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { success, timestamp, userAgent, ip } = JSON.parse(event.body);

    // Create Gmail transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
      subject: `CCSD Site Access ${success ? 'GRANTED' : 'DENIED'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: ${success ? '#10b981' : '#ef4444'};">
            🔐 CCSD Site Access ${success ? 'GRANTED' : 'DENIED'}
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Access Details:</h3>
            <ul style="line-height: 1.6;">
              <li><strong>Status:</strong> ${success ? '✅ SUCCESSFUL' : '❌ FAILED'}</li>
              <li><strong>Timestamp:</strong> ${timestamp}</li>
              <li><strong>User Agent:</strong> ${userAgent}</li>
              <li><strong>IP Address:</strong> ${ip}</li>
            </ul>
          </div>
          
          ${!success ? `
            <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; color: #991b1b;">
              <strong>⚠️ Failed Access Attempt</strong><br>
              Someone attempted to access the CCSD site with an incorrect password.
            </div>
          ` : `
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 8px; color: #166534;">
              <strong>✅ Successful Access</strong><br>
              Authorized access to the CCSD site has been granted.
            </div>
          `}
          
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
            This notification was sent automatically from the CCSD Public Comment Tracking System.
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notification sent successfully' })
    };

  } catch (error) {
    console.error('Error sending notification:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send notification' })
    };
  }
}; 