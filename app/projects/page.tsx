"use client"

import { Button, Tag } from "antd"
import AOS from "aos"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
}

const projects: Project[] = [
    {
        title: "Eagle-IoT Fleet Management",
        description:
            "Eagle-IoT is an all-in-one platform for vehicle tracking, video telematics, fleet, and asset management, designed to streamline operations with real-time monitoring and advanced analytics. Built with React.js and Redux for a dynamic frontend, Node.js with Fastify for a high-performance backend, and powered by Redis and Kafka for seamless data processing and communication.",
        image: "/projects/eagle-iot.png",
        technologies: [
            "reactjs",
            "i18n",
            "material-ui",
            "tailwindcss",
            "nodejs",
            "fastify",
            "postgresql",
            "redis",
            "kafka",
            "socket.io",
        ],
        link: "https://go.eagle-iot.com",
    },
    {
        title: "AR Home Services ",
        description:
            "The Home Services app offers a wide range of doorstep services, including food delivery, groceries, and household tasks. Built with Next.js and Redux for a dynamic frontend and a robust Node.js backend powered by Fastify, the app ensures seamless accessibility across devices with a React Native mobile experience.",
        image: "/projects/arservices_new.jpg",
        technologies: [
            "nextjs",
            "typescript",
            "tailwindcss",
            "javascript",
            "mysql",
            "nodejs",
            "fastify",
            "material-ui",
            "sequelize",
        ],
        link: "https://arhomeservices.com",
    },
    {
        title: "Antique Watches",
        description:
            "Antique Watches is your trusted destination for timeless elegance. We specialize in curating and selling premium vintage and antique timepieces from renowned brands. Whether you're a collector or a first-time buyer, our store offers authenticated watches, detailed craftsmanship, and exceptional customer service—bringing history to your wrist. ⌚️",
        image: "/projects/antiquewatches.png",
        technologies: ["nextjs", "javascript", "mysql", "tailwindcss", "material-ui", "redux"],
        link: "https://www.antiquewatches.shop",
    },
    {
        title: "AR Home Services - Mobile App (Android, IOS)",
        description:
            "The Home Services mobile app provides a seamless way to access food delivery, groceries, and household services. Built with React Native, it ensures a smooth and responsive experience across devices, backed by a Fastify-powered Node.js backend for real-time updates and reliability.",
        image: "/projects/armobile.jpg",
        technologies: [
            "react native",
            "typescript",
            "tailwindcss",
            "mysql",
            "nodejs",
            "fastify",
            "material-ui",
            "redux",
            "socket-io",
        ],
        link: "https://play.google.com/store/apps/details?id=ar.free.srvices&hl=en",
    },
    {
        title: "ApnaBike - Bike Rental App",
        description:
            "ApnaBike offers an easy, affordable, and reliable bike rental experience for commuters and travelers. With seamless booking, secure payments, and a user-friendly interface, you can rent a bike anytime, anywhere—quickly and hassle-free. 🚴‍♂️",
        image: "/projects/apnabike.png",
        technologies: ["reactjs", "javascript", "sass", "mysql", "nodejs", "express", "bootstrap", "stripe", "sequelize"],
        link: "https://apnabike-front.vercel.app/",
    },
    {
        title: "Smartsense Eagle-IoT",
        description:
            "Smart Sense is an advanced warehouse management app designed to simplify and optimize your warehouse operations. With Smart Sense, users can easily manage multiple floors of a building by uploading custom floor plans. Once a floor plan is uploaded, users can place sensors directly onto the layout, aligning real-world positioning with digital management.",
        image: "/projects/smartsense.png",
        technologies: [
            "reactjs",
            "typescript",
            "tailwindcss",
            "postgresql",
            "nodejs",
            "fastify",
            "material-ui",
            "redux-toolkit",
        ],
        link: "https://smart-sense.eagle-iot.com/",
    },
    {
        title: "Eagle-IoT Mobile App (Android, IOS)",
        description:
            "Eagle-IoT is an all-in-one platform for vehicle tracking, video telematics, fleet, and asset management, designed to streamline operations with real-time monitoring and advanced analytics. Built with React.js and Redux for a dynamic frontend, Node.js with Fastify for a high-performance backend, and powered by Redis and Kafka for seamless data processing and communication.",
        image: "/projects/eagleiotmobile.jpg",
        technologies: ["react native", "typescript", "css", "postgresql", "nodejs", "fastify", "redux-toolkit"],
        link: "https://play.google.com/store/apps/details?id=com.eagleiot_mobile&hl=en",
    },
    {
        title: "Smartsense Mobile App (Android, IOS)",
        description:
            "Smart Sense is an advanced warehouse management app designed to simplify and optimize your warehouse operations. With Smart Sense, users can easily manage multiple floors of a building by uploading custom floor plans. Once a floor plan is uploaded, users can place sensors directly onto the layout, aligning real-world positioning with digital management.",
        image: "/projects/smartsenseapp.jpg",
        technologies: ["react native", "typescript", "css", "postgresql", "nodejs", "fastify", "redux-toolkit"],
        link: "https://play.google.com/store/apps/details?id=com.smartsenseapp&hl=en",
    },
]

const FeaturedProjects = () => {
    const pathname = usePathname()
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        })
    }, [])

    const displayedProjects = showAll ? projects : projects.slice(0, 6)

    return (
        <div
            style={{ marginTop: pathname === "/projects" ? "80px" : "0px" }}
            className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-20"
            data-aos="zoom-in-up"
        >
            <div className="flex justify-center mb-2">
                <Tag bordered={false} className="!bg-purple-100 !text-purple-500  !rounded-full !px-4 !py-1 !font-medium">
                    My Work
                </Tag>
            </div>
            <div className="relative flex items-center mb-10">
                <div className="flex-grow h-px bg-gray-700 ml-14"></div>
                <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl ml-8 mr-8">Featured Projects</h1>
                <div className="flex-grow h-px bg-gray-700 mr-14"></div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl"></h1>
                    <p className="mt-4 text-xl text-gray-500">
                        Explore some of my recent work. These projects showcase my skills and experience in building modern web
                        applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-1 border-gray-300"
                        >
                            <div className="relative">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-64 transition-transform duration-300 group-hover:scale-105 border-b border-gray-300"
                                />
                                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Button
                                    type="link"
                                    target="_blank"
                                    href={project.link}
                                    className="text-purple-600 hover:text-purple-700 p-0"
                                >
                                    {!project.title.includes("Mobile App") ? "Visit the Website... →" : "Visit on Google Play... →"}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Show Less Buttons */}
                <div className="text-center mt-12">
                    {!showAll && projects.length > 6 && (
                        <Button
                            type="primary"
                            size="large"
                            onClick={() => setShowAll(true)}
                            className="bg-purple-600 hover:bg-purple-700 border-purple-600 hover:border-purple-700"
                        >
                            Show More Projects
                        </Button>
                    )}

                    {showAll && (
                        <Button
                            type="default"
                            size="large"
                            onClick={() => setShowAll(false)}
                            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                        >
                            Show Less
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects
