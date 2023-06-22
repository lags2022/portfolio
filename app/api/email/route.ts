import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const PASS_USER = process.env.PASS_USER;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (![name, email, message].every(Boolean))
      return new NextResponse("Unauthorized", { status: 401 });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: PASS_USER,
      },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: "lguzman.58erb@outlook.com",
      subject: `Message from: ${email}, name: ${name}`,
      text: message,
      // html: `
      // <!DOCTYPE html>
      // <html lang="en">
      // <head>
      //   <meta charset="UTF-8">
      //   <meta http-equiv="X-UA-Compatible" content="IE=edge">
      //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
      //   <title>Correo de Agradecimiento</title>
      // </head>
      // <body>
      //   <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
      //     <h2>¡Gracias por contactarse!</h2>
      //     <p>Estimado/a ${name},</p>
      //     <p>Gracias por ponerse en contacto conmigo. Este correo es para confirmar que he recibido su mensaje y le agradezco su interés.</p>
      //     <p>Le aseguro que leeré su mensaje con atención y le responderé lo más pronto posible.</p>
      //     <p>Si tiene alguna pregunta adicional o necesita asistencia adicional, no dude en contactarme nuevamente.</p>
      //     <p>Agradezco su paciencia y comprensión.</p>
      //     <p>Saludos cordiales,</p>
      //     <p>Tu nombre</p>
      //     </br>
      //     </br>
      //     <p>Mensaje del destinatario: ${message}</p>
      //   </div>
      // </body>
      // </html>
      // `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
