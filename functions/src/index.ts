import { onDocumentCreated } from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";

// Configure Nodemailer Transporter
// TODO: User must set these environment variables or hardcode credentials temporarily
const transporter = nodemailer.createTransport({
    service: "gmail", // Or specific host/port for info@flexeventsug.com if not Gmail-hosted
    auth: {
        user: "info@flexeventsug.com", // Sender Email
        pass: process.env.EMAIL_PASSWORD, // App Password
    },
});

export const sendInquiryEmail = onDocumentCreated("inquiries/{docId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        return;
    }

    const data = snapshot.data();
    const inquiryId = event.params.docId;

    logger.info(`New inquiry created: ${inquiryId}`, { data });

    const mailOptions = {
        from: '"Flex Events Website" <info@flexeventsug.com>',
        to: "weblery.com@gmail.com, flexbrandug@gmail.com",
        subject: `New Inquiry: ${data.name || "Website Visitor"}`,
        html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Services:</strong> ${Array.isArray(data.selectedServices) ? data.selectedServices.join(", ") : data.selectedServices || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.eventDescription || data.message || "No message provided."}</p>
      <br/>
      <p><small>ID: ${inquiryId}</small></p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        logger.info("Email sent successfully");
    } catch (error) {
        logger.error("Error sending email:", error);
    }
});
