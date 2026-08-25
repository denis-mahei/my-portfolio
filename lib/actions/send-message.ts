'use server';

import { Resend } from 'resend';
import { ContactFormValues } from '@/lib/schemas/form';

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL!;

export async function sendMessage(values: ContactFormValues) {
  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: contactEmail,
      subject: 'We received your message!',
      text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
    });
    if (error) {
      return { success: false, error: 'Failed to send message' };
    }
    return { success: true };
  } catch (e) {
    return { success: false, error: 'Failed to send message' };
  }
}
