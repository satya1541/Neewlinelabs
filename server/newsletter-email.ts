import nodemailer from 'nodemailer';
import path from 'path';

interface NewsletterSubscriber {
  email: string;
}

const ZOHO_EMAIL = 'info@newlinelabs.tech';
const ZOHO_PASSWORD = 'nLedEuwVWB23';
const ADMIN_EMAIL = 'contact-us@newlinelabs.tech';

const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: ZOHO_EMAIL,
      pass: ZOHO_PASSWORD,
    },
  });
};

export async function sendWelcomeEmail(subscriberEmail: string): Promise<void> {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: ZOHO_EMAIL,
    to: subscriberEmail,
    subject: 'Welcome to NewLineLabs Newsletter! 🎉',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%); padding: 50px 30px; text-align: center;">
                    <img src="cid:newlinelabs-logo" alt="NewLineLabs" style="height: 80px; margin-bottom: 20px; pointer-events: none;" />
                    <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                      🎉 Welcome to NewLineLabs!
                    </h1>
                    <p style="margin: 12px 0 0 0; color: #f3e8ff; font-size: 16px;">
                      You're now part of our innovation community
                    </p>
                  </td>
                </tr>
                
                <!-- Welcome Message -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 24px; font-weight: 600;">
                      Thanks for subscribing! 
                    </h2>
                    <p style="margin: 0 0 16px 0; color: #475569; font-size: 16px; line-height: 1.7;">
                      We're thrilled to have you join our community of innovators, developers, and technology enthusiasts.
                    </p>
                    <p style="margin: 0 0 16px 0; color: #475569; font-size: 16px; line-height: 1.7;">
                      Here's what you can expect from our newsletter:
                    </p>
                  </td>
                </tr>
                
                <!-- Benefits -->
                <tr>
                  <td style="padding: 0 30px 40px 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 16px 20px; background-color: #faf5ff; border-left: 4px solid #7c3aed; border-radius: 6px; margin-bottom: 12px;">
                          <h3 style="margin: 0 0 8px 0; color: #7c3aed; font-size: 16px; font-weight: 600;">
                            🚀 Latest Tech Insights
                          </h3>
                          <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                            Stay ahead with cutting-edge technology trends and industry news
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="height: 12px;"></td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px; background-color: #faf5ff; border-left: 4px solid #7c3aed; border-radius: 6px;">
                          <h3 style="margin: 0 0 8px 0; color: #7c3aed; font-size: 16px; font-weight: 600;">
                            💡 Expert Tips & Tutorials
                          </h3>
                          <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                            Practical guides to help you build better solutions
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="height: 12px;"></td>
                      </tr>
                      <tr>
                        <td style="padding: 16px 20px; background-color: #faf5ff; border-left: 4px solid #7c3aed; border-radius: 6px;">
                          <h3 style="margin: 0 0 8px 0; color: #7c3aed; font-size: 16px; font-weight: 600;">
                            🎯 Exclusive Updates
                          </h3>
                          <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                            Be the first to know about our new services and special offers
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- CTA -->
                <tr>
                  <td style="padding: 0 30px 40px 30px; text-align: center;">
                    <p style="margin: 0 0 20px 0; color: #64748b; font-size: 15px;">
                      In the meantime, explore our services and see how we can help transform your business.
                    </p>
                    <a href="https://newlinelabs.tech" 
                       style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 12px 0; color: #94a3b8; font-size: 14px; line-height: 1.6;">
                      You're receiving this email because you subscribed to the NewLineLabs newsletter.
                    </p>
                    <p style="margin: 0; color: #cbd5e1; font-size: 13px;">
                      © ${new Date().getFullYear()} NewLineLabs. All rights reserved.
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    text: `
🎉 WELCOME TO NEWLINELABS!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Thanks for subscribing!

We're thrilled to have you join our community of innovators, developers, and technology enthusiasts.

Here's what you can expect from our newsletter:

🚀 Latest Tech Insights
Stay ahead with cutting-edge technology trends and industry news

💡 Expert Tips & Tutorials
Practical guides to help you build better solutions

🎯 Exclusive Updates
Be the first to know about our new services and special offers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Visit our website: https://newlinelabs.tech

You're receiving this email because you subscribed to the NewLineLabs newsletter.
© ${new Date().getFullYear()} NewLineLabs. All rights reserved.
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: path.join(process.cwd(), 'attached_assets', 'NewLineLabs_1760005122173.png'),
        cid: 'newlinelabs-logo'
      }
    ]
  };

  await transporter.sendMail(mailOptions);
}

export async function sendAdminNotification(subscriberEmail: string): Promise<void> {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: ZOHO_EMAIL,
    to: ADMIN_EMAIL,
    subject: '🎯 New Newsletter Subscriber',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #10b981 0%, #34d399 100%); padding: 40px 30px; text-align: center;">
                    <img src="cid:newlinelabs-logo" alt="NewLineLabs" style="height: 70px; margin-bottom: 20px; pointer-events: none;" />
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      🎯 New Newsletter Subscriber
                    </h1>
                    <p style="margin: 8px 0 0 0; color: #d1fae5; font-size: 14px;">
                      Someone just joined your mailing list!
                    </p>
                  </td>
                </tr>
                
                <!-- Subscriber Info -->
                <tr>
                  <td style="padding: 35px 30px;">
                    <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; border-radius: 6px;">
                      <table width="100%" cellpadding="8" cellspacing="0">
                        <tr>
                          <td style="color: #065f46; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding-bottom: 12px;">
                            Subscriber Details
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Email:</span>
                            <a href="mailto:${subscriberEmail}" style="color: #10b981; font-size: 16px; text-decoration: none; font-weight: 600;">${subscriberEmail}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Date:</span>
                            <span style="color: #1f2937; font-size: 15px; font-weight: 500;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <span style="color: #6b7280; font-size: 14px; display: inline-block; width: 100px;">Time:</span>
                            <span style="color: #1f2937; font-size: 15px; font-weight: 500;">${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                
                <!-- Quick Action -->
                <tr>
                  <td style="padding: 0 30px 35px 30px;">
                    <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border: 1px solid #fbbf24;">
                      <p style="margin: 0 0 12px 0; color: #92400e; font-size: 14px; font-weight: 600;">
                        💡 Next Steps
                      </p>
                      <p style="margin: 0; color: #78350f; font-size: 14px; line-height: 1.6;">
                        Don't forget to add this subscriber to your email marketing platform to include them in your next newsletter campaign!
                      </p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #94a3b8; font-size: 13px; line-height: 1.6;">
                      This is an automated notification from the NewLineLabs newsletter subscription form.<br>
                      <span style="color: #cbd5e1;">© ${new Date().getFullYear()} NewLineLabs. All rights reserved.</span>
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    text: `
🎯 NEW NEWSLETTER SUBSCRIBER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Someone just joined your mailing list!

SUBSCRIBER DETAILS
───────────────────────────────────────

Email: ${subscriberEmail}
Date:  ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Time:  ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 Next Steps: Add this subscriber to your email marketing platform to include them in your next newsletter campaign!

This is an automated notification from the NewLineLabs newsletter subscription form.
© ${new Date().getFullYear()} NewLineLabs. All rights reserved.
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: path.join(process.cwd(), 'attached_assets', 'NewLineLabs_1760005122173.png'),
        cid: 'newlinelabs-logo'
      }
    ]
  };

  await transporter.sendMail(mailOptions);
}
