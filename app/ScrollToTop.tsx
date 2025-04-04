"use client";

import { useEffect, useState } from "react";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300); // Show button when scrolled 300px down
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <div className="fixed bottom-6 right-6 z-[1000]">
                <Button
                    type="primary"
                    shape="circle"
                    icon={<UpOutlined style={{ fontSize: 20 }} />}
                    onClick={scrollToTop}
                    className=" hover:opacity-80 transition-opacity !bg-white !border !border-gray-300"
                    style={{
                        color: "black",
                        width: 50,
                        height: 50,
                        border: "none",
                    }}
                />
            </div>
        )
    );
}
