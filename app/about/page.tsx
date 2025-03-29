'use client';

import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import AOS from "aos";

const About = () => {
    const texts = ["Full Stack Developer", "Problem Solver", "Mobile App Developer", "UI/UX Enthusiast"];
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const delayBetweenWords = 1000; // Delay before deleting

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        });
    }, []);

    useEffect(() => {
        const currentWord = texts[index];
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            // Delete characters
            timer = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        } else {
            // Add characters
            timer = setTimeout(() => {
                setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && currentText === currentWord) {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && currentText === "") {
            // Move to the next word
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, index, texts]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            {/* <div className="absolute top-10 left-10 w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-xl">&lt;/&gt;</span>
            </div>
            <div className="absolute top-20 right-20 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                <span className="text-blue-600">🌐</span>
            </div> */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative">
                    <div className="relative w-full aspect-square max-w-md mx-auto group" data-aos="fade-right">
                        {/* First Box - Back */}
                        <div className="absolute inset-0 bg-purple-100 rounded-3xl transform rotate-12 transition-transform duration-300 group-hover:rotate-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 rounded-3xl"></div>
                        </div>

                        {/* Second Box - Front */}
                        <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-6 transition-transform duration-300 group-hover:rotate-0">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105">
                                <img
                                    // src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    src="https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg"
                                    alt="Profile"
                                    className="w-full h-full object-cover bg-white"
                                />
                            </div>
                        </div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-purple-500 rounded-full px-4 py-2 shadow-lg z-10">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-sm text-white">Available</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-left" data-aos="fade-left">
                    <div className="inline-block bg-gray-100 rounded-full px-3 py-2 text-sm text-gray-800 mb-4 cursor-pointer">
                        {currentText}
                        <span className="animate-blink">|</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">
                        Hello, I am <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">Danish</span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                        I am a passionate and results-driven <span className="text-purple-600 hover:underline"> MERN Stack </span> Developer, harnessing 3 years of professional expertise to elevate digital experiences.
                        My journey unfolds with a mastery of <span className="text-purple-600 hover:underline"> React</span>, intricately weaving engaging interfaces,
                        and extends to <span className="text-yellow-500 hover:underline">  Node.js, Express, and Fastify </span> for crafting robust backend solutions.
                        Navigating through databases, I seamlessly orchestrate with <span className="text-purple-600 hover:underline"> MySQL </span>and <span className="text-blue-500 hover:underline">PostgreSQL </span>,
                        ensuring data integrity and performance. Venturing into the realm of <span className="text-green-600 hover:underline"> Microservices </span>
                        architecture, I optimize scalability and efficiency through the adept use of <span className="text-orange-600 hover:underline"> Kafka </span> and <span className="text-purple-600 hover:underline">Redis</span>. As a Docker enthusiast,
                        I orchestrate deployments with finesse, guaranteeing optimal application <span className='text-pink-600'>performance.</span>

                    </p>

                    <div className="flex gap-4 mb-8">
                        <Button type="primary" className="bg-purple-600 hover:bg-purple-700">
                            More About Me
                        </Button>
                        <Button>Download Resume</Button>
                    </div>

                    <div>
                        <p className="text-gray-500 mb-4">Connect with me:</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-purple-600 text-xl">
                                <GithubOutlined />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 text-xl">
                                <TwitterOutlined />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 text-xl">
                                <LinkedinOutlined />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 text-xl">
                                <MailOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;