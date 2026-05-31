import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {

        const body = await req.json();

        const {
            name,
            contact,
            task,
        } = body;

        // Валидация

        if (!name || !contact || !task) {
            return NextResponse.json(
                {
                    error: "Заполните все поля",
                },
                {
                    status: 400,
                }
            );
        }

        // SMTP transporter

        const transporter =
            nodemailer.createTransport({
                host: process.env.SMTP_HOST,

                port: Number(
                    process.env.SMTP_PORT
                ),

                secure: true,

                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

        // Отправка письма
        await transporter.verify();

        console.log("SMTP connection OK");

        await transporter.sendMail({
            from: process.env.SMTP_USER,

            to: process.env.MAIL_TO,

            subject: "Новая заявка с сайта",

            html: `
                <div style="font-family: Arial">

                    <h2>Новая заявка</h2>

                    <hr />

                    <p>
                        <b>Имя:</b> ${name}
                    </p>

                    <p>
                        <b>Контакт:</b> ${contact}
                    </p>

                    <p>
                        <b>Описание:</b>
                    </p>

                    <div>
                        ${task}
                    </div>

                </div>
            `,
        });

        return NextResponse.json({
            success: true,
        });

    } catch (error) {
        console.error("CONTACT API ERROR:");
        console.error(error);

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Ошибка сервера",
            },
            {
                status: 500,
            }
        );
    }
}