// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // --- VALIDATION ---
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // --- LOGIC TO SEND EMAIL (e.g., using Resend, Nodemailer) GOES HERE ---
    // For now, we'll just log it to the server console
    console.log('New Contact Form Submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    // --- END OF EMAIL LOGIC ---

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}