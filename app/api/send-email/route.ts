import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs"; // Or "@emailjs/nodejs" on the server

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        emailjs.send(
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
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                return NextResponse.json({ message: response.status + response.text }, { status: 200 });
            },
            (err) => {
                console.log('FAILED...', err);
                return NextResponse.json({ message: err }, { status: 500 });
            },
        )

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}