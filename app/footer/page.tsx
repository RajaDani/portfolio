"use client"

import type React from "react"
import AOS from "aos";

import { useEffect, useRef, useState } from "react"
import { Input, Button, Result, Modal } from "antd"
import { SendOutlined, GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined, HeartFilled } from "@ant-design/icons"
import Link from "next/link"
import emailjs from '@emailjs/browser';

const { TextArea } = Input

export default function Footer() {
    const form: any = useRef<HTMLInputElement>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailLoader, setEmailLoader] = useState(false);
    const [emailResponse, setEmailResponse] = useState("");

    const showModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        });
    }, []);

    const sendEmail = async (e: any) => {
        e.preventDefault();
        setEmailLoader(true)
        try {
            const formData = new FormData(form.current);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch("/api/send-email", { // Make a POST request to your API route
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log("SUCCESS!");
                setEmailResponse("success");
            } else {
                console.error("FAILED...", response.statusText);
                setEmailResponse("failed");
            }
        } catch (error) {
            console.error("FAILED...", error);
            setEmailResponse("failed");
        } finally {
            setIsModalOpen(true);
            setEmailLoader(false);
        }
    };

    return (
        <div className="bg-gray-200  mt-16" data-aos="fade-up">
            <div className="flex items-center justify-center py-20">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8" data-aos="fade-up">
                    {/* Contact Form */}
                    <div className="bg-white p-8  shadow-xl" >
                        <h1 className="text-3xl font-medium text-center text-gray-800 mb-6">Get in touch</h1>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase mb-1">
                                    Name:
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full rounded-md"
                                    style={{ background: "#e8e8e8", padding: 10 }}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 uppercase mb-1">
                                    Subject:
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full rounded-md bg-gray-700"
                                    style={{ background: "#e8e8e8", padding: 10 }}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase mb-1">
                                    Email:
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md bg-gray-100"
                                    style={{ background: "#e8e8e8", padding: 10 }}
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase mb-1">
                                    Message:
                                </label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    style={{ background: "#e8e8e8", padding: 10 }}
                                    className="w-full rounded-md bg-gray-100"
                                />
                            </div>

                            <Button
                                // type="primary"
                                loading={emailLoader}
                                className="w-full h-10 flex items-center justify-center border-black"
                                htmlType="submit"
                                style={{ padding: 20, border: "1px solid black", fontWeight: "bold" }}
                            >
                                Send <SendOutlined className="ml-2" />
                            </Button>
                        </form>
                    </div>

                    {/* Information Section */}
                    <div className="flex  items-center justify-between ml-14" data-aos="fade-up">
                        <div>
                            <h2 className="text-3xl font-medium text-gray-800 mb-1 text-center">What's next?</h2>
                            <p className="text-xl text-gray-600 mt-2 mb-4 text-center">Let's connect</p>

                            <p className="text-gray-600 mb-6 mt-10 text-center">
                                If you have any opportunity, suggestion or feedback we would love to hear from you! Please feel free to
                                reach out to us using the contact form or our email address.
                            </p>

                            <div className="flex space-x-4 mb-8 justify-center">
                                <Link target='_blank' href="https://github.com/RajaDani/" className="text-gray-600 hover:text-gray-900">
                                    <GithubOutlined className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <TwitterOutlined className="text-xl" />
                                </Link>
                                <Link target='_blank' href="https://www.linkedin.com/in/danish-imran/" className="text-gray-600 hover:text-gray-900">
                                    <LinkedinOutlined className="text-xl" />
                                </Link>
                                <Link target='_blank' href="mailto:danishimran889@gmail.com" className="text-gray-600 hover:text-gray-900">
                                    <MailOutlined className="text-xl" />
                                </Link>
                            </div>

                            <div className="text-center">
                                <h1 className="text-2xl font-medium text-gray-800">Email</h1>
                                <h2 className="mt-1 text-gray-600 text-lg opacity-80">danishimran889@gmail.com</h2>
                            </div>
                            <div className="mt-5 text-center">
                                <h1 className="text-2xl font-medium text-gray-800">Address</h1>
                                <h2 className="mt-1 text-gray-600 text-lg opacity-80">Gulberg, Lahore Pakistan</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-14 text-center text-gray-600 text-xl bg-gray-50 w-full h-[60px] flex items-center justify-center">
                <p>Made with <HeartFilled style={{ fontSize: 20, color: "red" }} /> by Danish Imran.</p>
                {/* <p className="mt-1">Last Updated: March 28, 2025 at 05:40:27 AM</p> */}
            </div>

            <Modal open={isModalOpen} footer={
                <Button type="primary" onClick={() => setIsModalOpen(false)}>
                    Close
                </Button>
            }>
                {emailResponse === "success" ?
                    <Result
                        status="success"
                        title="Email sent successfully!"
                        subTitle="Thank you for contacting me, i will get back to you as soon as possible."
                    />
                    :
                    <Result
                        status="500"
                        title="Error!"
                        subTitle="Looks like something went wrong, please try again."
                    />
                }
            </Modal>

        </div>
    )
}

