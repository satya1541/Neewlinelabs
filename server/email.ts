import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Zoho credentials (hardcoded)
const ZOHO_EMAIL = 'info@newlinelabs.tech';
const ZOHO_PASSWORD = 'nLedEuwVWB23';
const RECIPIENT_EMAIL = 'contact-us@newlinelabs.tech';

// Create Zoho SMTP transporter (India region)
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true, // Use SSL for port 465
    auth: {
      user: ZOHO_EMAIL,
      pass: ZOHO_PASSWORD,
    },
  });
};

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = createTransporter();

  const logoDataUri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAAAAUACAYAAAAY5P/3AAAQAElEQVR4AeydB2AVx7X+z171fq96710CCSQQvXcbjI0btrGxnbilOfm/l/ae85K8lJdqp7sbN1wBG9wAm94RCCR6EyCBQKCChOiS/t83ICKDGs1gOOIe7e7szJmZ38yumO/O7NpEf5SAElACSkAJKAEloASUgBJQAkpACSgB1k8JKIEbmIAKgDdw42vVlYASUAJKQAkoASWgBG40AlpfJaAElIASUAJK4EYkoALgjdjqWmcloASUgBK4sQlo7ZWAElACSkAJKAEloASUgBK4oQioAHhDNbdWVgn8m4DuKQEloASUgBJQAkpACSgBJaAElIASUALXPwHWUAVAUlBTAkpACSgBJaAElIASUAJKQAkoASVw/RLQmikBJXCDE1AB8AbvAFp9JaAElIASUAJKQAkogRuFgNZTCSgBJaAElIASuFEJqAB4o7a81lsJKAEloARuTAJaayWgBJSAElACSkAJKAEloARuOAIqAN5wTa4VVgIiykAJKAEloASUgBJQAkpACSgBJaAElIASuP4JNNVQBcAmErpVAkpACSgBJaAElIASUAJKQAkoASVw/RHQGikBJaAERAVA7QRKQAkoASWgBJSAElACSuC6J6AVVAJKQAkoASWgBG5kAioA3sitr3VXAkpACSiBG4uA1lYJKAEloASUgBJQAkpACSiBG5KACoA3ZLNrpW9kAlp3JaAElIASUAJKQAkoASWgBJSAElACSuD6J9C8hioANqeh+0pACSgBJaAElIASUAJKQAkoASWgBK4fAloTJaAElIAhoAKgwaC/lIASUAJKQAkoASWgBJTA9UpA66UElIASUAJKQAnc6ARUALzRe4DWXwkoASWgBG4MAlpLJaAElIASUAJKQAkoASWgBG5YAioA3rBNrxW/EQlonZWAElACSkAJKAEloASUgBJQAkpACSiB65/AuTVUAfBcInqsBJSAElACSkAJKAEloASUgBJQAkrg609Aa6AElIASOEtABcCzKHRHCSgBJaAElIASUAJKQAlcbwS0PkpACSgBJaAElIASEFEBUHuBElACSkAJKIHrnYDWTwkoASWgBJSAElACSkAJKIEbmoAKgDd082vlbyQCWlcloASUgBJQAkpACSgBJaAElIASUAJK4Pon0FINVQBsiYqGKQEloASUgBJQAkpACSgBJaAElIAS+PoS0JIrASWgBL5EQAXAL+HQAyWgBJSAElACSkAJKAElcL0Q0HooASWgBJSAElACSuA0ARUAT3PQ30pACSgBJaAErk8CWisloASUgBJQAkpACSgBJaAEbngCKgDe8F1AAdwIBLSOSkAJKAEloASUgBJQAkpACSgBJaAElMD1T6C1GqoA2BoZDVcCSkAJKAEloASUgBJQAkpACSgBJfD1I6AlVgJKQAmcR0AFwPOQaIASUAJKQAkoASWgBJSAEvi6E9DyKwEloASUgBJQAkrg3wRUAPw3C91TAkpACSgBJXB9EdDaKAEloASUgBJQAkpACSgBJaAEQEAFQEDQjxK4nglo3ZSAElACSkAJKAEloASUgBJQAkpACSiB659AWzVUAbAtOnpOCSgBJaAElIASUAJKQAkoASWgBJTA14eAllQJKAEl0CIBFQBbxKKBSkAJKAEloASUgBJQAkrg60pAy60ElIASUAJKQAkogS8TUAHwyzz0SAkoASWgBJTA9UFAa6EElIASUAJKQAkoASWgBJSAEjhDQAXAMyB0owSuRwJaJyWgBJSAElACSkAJKAEloASUgBJQAkrg+ifQXg1VAGyPkJ5XAkpACSgBJaAElIASUAJKQAkoASVw7RPQEioBJaAEWiWgAmCraPSEElACSkAJKAEloASUgBL4uhHQ8ioBJaAElIASUAJK4HwCKgCez0RDlIASUAJKQAl8vQlo6ZWAElACSkAJKAEloASUgBJQAioAah9QAjcAAa2jElACSkAJKAEloASUgBJQAkpACSgBJXD9E2ithioAtsbm+q+X1lAJKAEloASUgBJQAkpACSgBJaAElIASuP4J6BeA138ba42VgBJQAkpACSgBJaAElIASUAJKQAkogeuewP8Hzu0b18aD0tEAAAAASUVORK5CYII=';
  
  const mailOptions = {
    from: ZOHO_EMAIL,
    to: RECIPIENT_EMAIL,
    replyTo: data.email,
    subject: `New Contact: ${data.subject}`,
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
                  <td style="background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%); padding: 40px 30px; text-align: center;">
                    <img src="${logoDataUri}" alt="ION LABS" style="height: 70px; margin-bottom: 20px; pointer-events: none;" />
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      📩 New Contact Request
                    </h1>
                    <p style="margin: 8px 0 0 0; color: #e9d5ff; font-size: 14px;">
                      NewLineLabs Contact Form
                    </p>
                  </td>
                </tr>
                
                <!-- Contact Details -->
                <tr>
                  <td style="padding: 35px 30px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 25px;">
                          <div style="background-color: #fafafa; border-left: 4px solid #7c3aed; padding: 20px; border-radius: 6px;">
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td style="color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding-bottom: 12px;">
                                  Contact Information
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #94a3b8; font-size: 14px; display: inline-block; width: 80px;">Name:</span>
                                  <span style="color: #1e293b; font-size: 15px; font-weight: 500;">${data.name}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #94a3b8; font-size: 14px; display: inline-block; width: 80px;">Email:</span>
                                  <a href="mailto:${data.email}" style="color: #7c3aed; font-size: 15px; text-decoration: none; font-weight: 500;">${data.email}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0;">
                                  <span style="color: #94a3b8; font-size: 14px; display: inline-block; width: 80px;">Subject:</span>
                                  <span style="color: #1e293b; font-size: 15px; font-weight: 500;">${data.subject}</span>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Message Content -->
                <tr>
                  <td style="padding: 0 30px 35px 30px;">
                    <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; border: 1px solid #e2e8f0;">
                      <h3 style="margin: 0 0 15px 0; color: #475569; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Message
                      </h3>
                      <div style="color: #334155; font-size: 15px; line-height: 1.7;">
                        ${data.message.replace(/\n/g, '<br>')}
                      </div>
                    </div>
                  </td>
                </tr>
                
                <!-- Quick Reply Button -->
                <tr>
                  <td style="padding: 0 30px 35px 30px; text-align: center;">
                    <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" 
                       style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);">
                      Reply to ${data.name}
                    </a>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #94a3b8; font-size: 13px; line-height: 1.6;">
                      This email was automatically generated from the NewLineLabs contact form.<br>
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
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📩 NEW CONTACT REQUEST - NewLineLabs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION
───────────────────────────────────────

Name:    ${data.name}
Email:   ${data.email}
Subject: ${data.subject}

MESSAGE
───────────────────────────────────────

${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this email to respond to ${data.name}

This email was sent from the NewLineLabs contact form.
© ${new Date().getFullYear()} NewLineLabs. All rights reserved.
    `,
  };

  await transporter.sendMail(mailOptions);
}
