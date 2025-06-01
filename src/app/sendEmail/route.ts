import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Seu Nome" <${process.env.EMAIL_USER}>`,
            to: "jvitorfacanha@gmail.com",
            subject: subject,
            replyTo: email,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar o e-mail:", error);
        return NextResponse.json({ success: false, error: "Erro ao enviar o e-mail" }, { status: 500 });
    }
}
