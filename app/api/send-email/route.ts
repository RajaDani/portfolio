import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs"; // Or "@emailjs/nodejs" on the server

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Initialize emailjs only once (if using "@emailjs/browser")
        // if (!emailjs.init.isInitialized()) {
        //   emailjs.init(process.env.EMAILJS_PUBLIC_KEY ?? "");
        // }

        // Use "@emailjs/nodejs" on the server side
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
        );

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}