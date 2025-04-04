import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs"; // Or "@emailjs/nodejs" on the server

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        const response = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID ?? "",
            process.env.EMAILJS_TEMPLATE_ID ?? "",
            {
                name,
                email: email,
                subject: subject,
                message: message,
            },
            {
                publicKey: process.env.EMAILJS_PUBLIC_KEY,
                privateKey: process.env.EMAILJS_PRIVATE_KEY
            }
        )
        return NextResponse.json({ message: response }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}