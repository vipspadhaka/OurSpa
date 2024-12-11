// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, phone, message } = req.body;

    // Set up your SMTP transporter using a service like Gmail or a third-party email service (e.g., SendGrid, Mailgun)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password", // Use environment variables for security
      },
    });

    const mailOptions = {
      from: email,
      to: "your-receiving-email@example.com",
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error sending email" });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
