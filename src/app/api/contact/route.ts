import { NextRequest, NextResponse } from "next/server";
import sendEmail, { sendContactEmails } from "@/lib/sendEmail";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    // console.log(name, email, message);
    // const info = null;
    const info = await sendContactEmails({ name, email, message });

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
