import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, contact, task } = body;

        if (!name || !contact || !task) {
            return NextResponse.json(
                { error: "Заполните все поля" },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: process.env.MAIL_TO!,
            subject: "Новая заявка с сайта",
            html: `
                <div style="font-family: Arial">
                    <h2>Новая заявка</h2>
                    <hr />
                    <p><b>Имя:</b> ${name}</p>
                    <p><b>Контакт:</b> ${contact}</p>
                    <p><b>Описание:</b></p>
                    <div>${task}</div>
                </div>
            `,
        });

        if (error) {
            console.error("RESEND ERROR:", error);
            return NextResponse.json(
                {
                    error: "Email failed",
                    details: error,
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("CONTACT API ERROR:", error);

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Ошибка сервера",
            },
            { status: 500 }
        );
    }
}