import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const PASS_USER = process.env.PASS_USER;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (![name, email, message].every(Boolean))
      return new NextResponse("Unauthorized", { status: 401 });
    console.log(name, email, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: PASS_USER,
      },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: email,
      subject: "Contact Portfolio",
      text: message,
      html: `<h1>${name} ${email}</h1><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
