'use client';

import { CodeOutlined, DatabaseOutlined, AppstoreOutlined, GlobalOutlined, MobileOutlined } from '@ant-design/icons';
import AOS from "aos";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { Tag } from 'antd';

const Services = () => {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        });
    }, []);

    const services = [
        {
            icon: <CodeOutlined className="text-2xl text-purple-500" />,
            title: "Frontend Development",
            description: "Building responsive and interactive user interfaces with modern frameworks and libraries",
            skills: [
                { name: "React", icon: "⚛️" },
                { name: "TypeScript", icon: "TS" },
                { name: "Tailwind", icon: "🌊" },
                { name: "Next.js", icon: "▲" },
                { name: "Remix", icon: "🌀" },
                { name: "Material UI", icon: "Ⓜ️" }
            ]
        },
        {
            icon: <DatabaseOutlined className="text-2xl text-blue-500" />,
            title: "Backend Development",
            description: "Creating robust server-side applications, APIs, and database integrations",
            skills: [
                { name: "Node.js", icon: "🟢" },
                { name: "Express", icon: "⚡" },
                { name: "MongoDB", icon: "🍃" },
                { name: "MySQL", icon: "🐬" },
                { name: "PostgreSQL", icon: "🐘" },
            ]
        },
        {
            icon: <AppstoreOutlined className="text-2xl text-pink-500" />,
            title: "UI/UX Design",
            description: "Creating intuitive and visually appealing user interfaces and experiences",
            skills: [
                { name: "Figma", icon: "🎨" },
                { name: "Tailwind", icon: "🌊" },
                { name: "Framer", icon: "⚡" },
                { name: "Photoshop", icon: "🖌️" }
            ]
        },
        {
            icon: <GlobalOutlined className="text-2xl text-green-500" />,
            title: "Web Performance",
            description: "Optimizing websites for speed, accessibility, and search engine visibility",
            skills: [
                { name: "Webpack", icon: "📦" },
                { name: "Lighthouse", icon: "🏠" },
                { name: "Git", icon: "🔄" },
                { name: "PWA", icon: "📱" }
            ]
        },
        {
            icon: <MobileOutlined className="text-2xl text-blue-500" />,
            title: "Mobile App",
            description: "I create beautiful and functional apps for iOS and Android using React Native. With my expertise in this framework, I can bring your app idea to life and deliver top-notch results",
            skills: [
                { name: "React Native", icon: "📱" },
                { name: "Expo", icon: "🚀" },
                { name: "Android", icon: "🤖" },
                { name: "iOS", icon: "🍎" }
            ]
        }
    ];

    return (
        <div style={{ marginTop: pathname === '/services' ? '80px' : '0px' }} className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" data-aos="zoom-in">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-2">
                    <Tag bordered={false} className="!bg-purple-100 !text-purple-500  !rounded-full !px-4 !py-1 !font-medium">
                        My Expertise
                    </Tag>
                </div>
                <div className="relative flex items-center mb-10">
                    <div className="flex-grow h-px bg-gray-700 ml-14"></div>
                    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl ml-8 mr-8">Skills & Services</h1>
                    <div className="flex-grow h-px bg-gray-700 mr-14"></div>
                </div>

                {/* <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Skills & Services</h1> */}
                <p className="mt-4 text-xl text-gray-500">
                    I offer a range of services to help businesses build and optimize their digital presence.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:transform hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 rounded-lg bg-opacity-10 flex items-center justify-center mb-6"
                                style={{
                                    backgroundColor: `${service.icon.props.className.includes('purple') ? '#F3E8FF' :
                                        service.icon.props.className.includes('blue') ? '#E0F2FE' :
                                            service.icon.props.className.includes('pink') ? '#FCE7F3' :
                                                service.icon.props.className.includes('green') ? '#DCFCE7' : '#F3F4F6'}`
                                }}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {service.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center space-x-1 bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700"
                                    >
                                        <span>{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;