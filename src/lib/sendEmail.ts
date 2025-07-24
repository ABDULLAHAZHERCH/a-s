import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  message: string;
}

const sendEmail = async ({ to, from, subject, message }: EmailOptions) => {
  try {
    // Parse port as a number
    const port = Number(process.env.SMTP_PORT);

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html: message,
    });

    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

/**
 * Sends both the owner notification and user confirmation emails for a contact form submission.
 * @param params - The contact form data
 * @returns An object with info about both emails sent
 */
export const sendContactEmails = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const owner1Email = process.env.ABDULLAH_EMAIL!;
  const owner2Email = process.env.SHAHMIR_EMAIL!;
  // 1. Email to owner 1 (all form data, plain)
  const ownerSubject = "Contact Form Submission- Abdullah & Shahmir";
  const ownerMessage = message;

  // 2. Email to user (confirmation, professional)
  const userSubject = "Thank you for contacting Abdullah & Shahmir";
  const userMessage = `Dear ${name},<br><br>Thank you for reaching out. We have received your message and will get back to you as soon as possible.<br><br><strong>Your Message:</strong><br>${message}<br><br>Best regards,<br>Abdullah & Shahmir`;

  const [owner1Info,owner2Info, userInfo] = await Promise.all([
    sendEmail({
      to: owner1Email,
      from: email,
      subject: ownerSubject,
      message: ownerMessage,
    }),
    sendEmail({
      to: owner2Email,
      from: email,
      subject: ownerSubject,
      message: ownerMessage,
    }),
    sendEmail({
      to: email,
      from: owner1Email,
      subject: userSubject,
      message: userMessage,
    }),
  ]);
  return { owner1Info,owner2Info, userInfo };
};

export default sendEmail;
