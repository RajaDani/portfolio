"use client"
import { Typography, Row, Col, Card } from "antd"
import Image from "next/image"
import { CodeOutlined, DatabaseOutlined, CloudServerOutlined, GithubOutlined } from "@ant-design/icons"
import { useEffect } from "react"
import AOS from "aos";

const { Title, Paragraph } = Typography

export default function Skills() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation only happens once
        });
    }, []);

    const technologies = [
        {
            name: "React",
            icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
            color: "#61DAFB",
        },
        {
            name: "TypeScript",
            icon: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
            color: "#007ACC",
        },
        {
            name: "Express",
            icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
            color: "#000000",
        },
        {
            name: "NodeJS",
            icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
            color: "#339933",
        },
        {
            name: "Postman",
            icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            color: "#FF6C37",
        },
        {
            name: "React Native",
            icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
            color: "#61DAFB",
        },
        {
            name: "HTML",
            icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
            color: "#E34F26",
        },
        {
            name: "CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
            color: "#1572B6",
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
            color: "#7952B3",
        },
        {
            name: "Redux",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
            color: "#764ABC",
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            color: "#F7DF1E",
        },
        {
            name: "Tailwind CSS",
            icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            color: "#06B6D4",
        },

        {
            name: "MySQL",
            icon: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
            color: "#4479A1",
        },
        {
            name: "Mongo DB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
            color: "#47A248",
        },
        {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
            color: "#F05032",
        },
        {
            name: "Firebase",
            icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
            color: "#FFCA28",
        },
        {
            name: "Remix",
            icon: "/icons/remix.png",
            color: "#000000",
        },
        {
            name: "AWS",
            icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg",
            color: "#FF9900",
        },
        {
            name: "Docker",
            icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
            color: "#2496ED",
        },
        {
            name: "Next.js",
            icon: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
            color: "#000000",
        },
        {
            name: "Angular",
            icon: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
            color: "#DD0031",
        },
        {
            name: "Kafka",
            icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
            color: "#231F20",
        },
    ]

    return (
        <div className="bg-gray-50 pt-20" data-aos="flip-up">
            <h2 className="text-sm text-purple-600 font-semibold tracking-wide uppercase text-center">My Skillset</h2>
            <div className="relative flex items-center mb-20 pl-14">
                <div className="flex-grow h-px bg-gray-700 ml-14"></div>
                <Title level={1} className="text-2xl font-bold mt-4 ml-8 mr-8" >Technologies and Tools </Title>
                <div className="flex-grow h-px bg-gray-700 mr-20"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  -mt-10">
                <p className="mb-10 -pt-8 text-xl text-gray-500 text-center" >
                    Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,
                    performant apps and websites for smartphones, tablets, and desktops.
                </p>

                <Row gutter={[16, 16]}>
                    {technologies.map((tech, index) => (
                        <Col xs={12} sm={8} md={6} lg={4} key={index}>
                            <Card
                                className="tech-card border border-gray-200 hover:scale-105 hover:!border-purple-500 transition-all duration-300 shadow-md hover:shadow-lg "
                                style={{ background: "#f9f9f9", borderWidth: "1px" }}
                            >
                                <div className="flex flex-row items-center justify-center ">
                                    <div className="w-12 h-12 mr-3 flex items-center justify-center">
                                        {tech.icon && (
                                            <Image
                                                src={tech.icon || "/placeholder.svg"}
                                                alt={tech.name}
                                                width={48}
                                                height={48}
                                                unoptimized
                                            />
                                        )}
                                    </div>
                                    <div className="text-sm font-medium text-gray-800">{tech.name}</div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

