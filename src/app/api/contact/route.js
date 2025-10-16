
import nodemailer from "nodemailer";

export async function POST(req) {
        try {
                const { name, email, subject, message } = await req.json();

                // Nodemailer transporter
                const transporter = nodemailer.createTransport({
                        host: process.env.SMTP_HOST,
                        port: 465,
                        secure: true,
                        auth: {
                                user: process.env.SMTP_USER,
                                pass: process.env.SMTP_PASS,
                        },
                });

                // Clean & structured HTML email
                const mailOptions = {
                        from: `"${name}" <${email}>`,
                        to: process.env.RECEIVER_EMAIL,
                        subject: subject || `New Contact Message from ${name}`,
                        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="padding-left: 10px; border-left: 3px solid #0070f3;">${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p style="font-size: 0.9em; color: #555;">This message was sent from your website contact form.</p>
        </div>
      `,
                };

                await transporter.sendMail(mailOptions);

                return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
        } catch (error) {
                console.error(error);
                return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
        }
}
