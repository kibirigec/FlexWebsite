const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const { name, email, phone, selectedServices, eventDescription, message } = data;

  // Environment variables must be set in Netlify dashboard or .env locally
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info@flexeventsug.com',
      pass: process.env.EMAIL_PASSWORD 
    }
  });

  const mailOptions = {
    from: '"Flex Events Website" <info@flexeventsug.com>',
    to: "weblery.com@gmail.com, flexbrandug@gmail.com",
    subject: `New Inquiry from ${name || "Website Visitor"}`,
    html: `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Services:</strong> ${Array.isArray(selectedServices) ? selectedServices.join(", ") : selectedServices || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${eventDescription || message || "No message provided."}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email", details: error.toString() })
    };
  }
};
