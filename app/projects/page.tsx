'use client';

import { Button } from 'antd';
import AOS from "aos";
import { useEffect } from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

const projects: Project[] = [
    {
        title: 'AR Home Services ',
        description: "The Home Services app offers a wide range of doorstep services, including food delivery, groceries, and household tasks. Built with Next.js and Redux for a dynamic frontend and a robust Node.js backend powered by Fastify, the app ensures seamless accessibility across devices with a React Native mobile experience.",
        image: '/projects/arservices.jpg',
        technologies: ['nextjs', 'typescript', 'tailwindcss', 'javascript', 'mysql', 'nodejs', 'fastify', 'material-ui', 'sequelize'],
        link: "https://arhomeservices.com"
    },
    {
        title: 'Eagle IoT',
        description: 'Eagle-IoT is an all-in-one platform for vehicle tracking, video telematics, fleet, and asset management, designed to streamlineoperations with real-time monitoring and advanced analytics. Built with React.js and Redux for a dynamic frontend, Node.js withFastify for a high-performance backend, and powered by Redis and Kafka for seamless data processing and communication.',
        image: '/projects/eagle-iot.png',
        technologies: ['reactjs', 'i18n', 'material-ui', 'tailwindcss', 'nodejs', 'fastify', 'postgresql', 'redis', 'kafka', 'socket.io'],
        link: 'https://go.eagle-iot.com'
    },
    {
        title: 'ApnaBike - Bike Rental App',
        description: 'ApnaBike offers an easy, affordable, and reliable bike rental experience for commuters and travelers. With seamless booking, secure payments, and a user-friendly interface, you can rent a bike anytime, anywhere—quickly and hassle-free. 🚴‍♂️',
        image: '/projects/apnabike.png',
        technologies: ['reactjs', 'javascript', 'sass', 'mysql', 'nodejs', 'express', 'bootstrap', 'stripe', 'sequelize'],
        link: 'https://apnabike-front.vercel.app/'
    },
    {
        title: 'AR Home Services - Mobile App',
        description: 'The Home Services mobile app provides a seamless way to access food delivery, groceries, and household services. Built with React Native, it ensures a smooth and responsive experience across devices, backed by a Fastify-powered Node.js backend for real-time updates and reliability.',
        image: '/projects/armobile.jpg',
        technologies: ['react native', 'typescript', 'tailwindcss', 'mysql', 'nodejs', 'fastify', 'material-ui', 'redux'],
        link: 'https://admin-apnabike.vercel.app/'
    }
];

const FeaturedProjects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        });
    }, []);


    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-20" data-aos="zoom-in-up">
            <h2 className="text-sm text-purple-600 font-semibold tracking-wide uppercase text-center">My Work</h2>
            <div className="relative flex items-center mb-10">
                <div className="flex-grow h-px bg-gray-700 ml-14"></div>
                <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl ml-8 mr-8">Featured Projects</h1>
                <div className="flex-grow h-px bg-gray-700 mr-14"></div>
            </div>
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl"></h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Explore some of my recent work. These projects showcase my skills and experience in building modern web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-1 border-gray-300">
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 transition-transform duration-300 group-hover:scale-105 border-b border-gray-300"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <Button type="link" href={project.link} className="text-purple-600 hover:text-purple-700 p-0">
                                    Visit the Website... →
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;