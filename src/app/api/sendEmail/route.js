// app/api/send-email/route.js
import { sendEmail } from "@/Helper/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email,phone,topic='',message } = body;

    if (!name || !phone ) {
      return new Response(JSON.stringify({ error: 'Name, Phone, and Message are required.' }), {
        status: 400,
      });
    }

    const fullName = `${name}`.trim();
    
    await sendEmail({
      type: 'query',
      name: fullName,
      phone,
      email,
      topic,
      message,
    });

    return new Response(JSON.stringify({ success: true, message: 'Query sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email send error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
    });
  }
}
