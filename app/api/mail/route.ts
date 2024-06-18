import React from 'react';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ijaznauman68@gmail.com'],
      subject: 'Hello world',
      text: `
        Full Name, ${formData.fullName} 
        Email: ${formData.email}
        Phone: ${formData.phone}
        Integration: ${formData.integrations}
        Company: ${formData.company}
        Message: ${formData.message}

      `,
      react: React.createElement(EmailTemplate, { formData }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (err) {
    if (err instanceof Error) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    } else {
      return new Response(JSON.stringify({ error: 'An unknown error occurred' }), { status: 500 });
    }
  }
}
