"use client"

import type React from "react"
import AOS from "aos";

import { useEffect, useState } from "react"
import { Input, Button } from "antd"
import { SendOutlined, GithubOutlined, TwitterOutlined, FacebookOutlined, MailOutlined, HeartFilled } from "@ant-design/icons"
import Link from "next/link"

const { TextArea } = Input

export default function Footer() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        });
    }, []);

    const [form, setForm] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(form)
    }

    return (
        <div className="bg-gray-200  mt-16">
            <div className="flex items-center justify-center py-20">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white p-8  shadow-xl" data-aos="fade-right">
                        <h1 className="text-3xl font-medium text-center text-gray-800 mb-6">Get in touch</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase mb-1">
                                    Name:
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
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
                                    value={form.subject}
                                    onChange={handleChange}
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
                                    value={form.email}
                                    onChange={handleChange}
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
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows={4}
                                    style={{ background: "#e8e8e8", padding: 10 }}
                                    className="w-full rounded-md bg-gray-100"
                                />
                            </div>

                            <Button
                                // type="primary"
                                htmlType="submit"
                                className="w-full h-10 flex items-center justify-center border-black"
                                style={{ padding: 20, border: "1px solid black", fontWeight: "bold" }}
                            >
                                Send <SendOutlined className="ml-2" />
                            </Button>
                        </form>
                    </div>

                    {/* Information Section */}
                    <div className="flex  items-center justify-between ml-14" data-aos="fade-left">
                        <div>
                            <h2 className="text-3xl font-medium text-gray-800 mb-1 text-center">What's next?</h2>
                            <p className="text-xl text-gray-600 mt-2 mb-4 text-center">Let's connect</p>

                            <p className="text-gray-600 mb-6 mt-10 text-center">
                                If you have any opportunity, suggestion or feedback we would love to hear from you! Please feel free to
                                reach out to us using the contact form or our email address.
                            </p>

                            <div className="flex space-x-4 mb-8 justify-center">
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <GithubOutlined className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <TwitterOutlined className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
                                    <FacebookOutlined className="text-xl" />
                                </Link>
                                <Link href="#" className="text-gray-600 hover:text-gray-900">
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
        </div>
    )
}

