"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  HomeOutlined,
  ProjectOutlined,
  CustomerServiceOutlined,
  FileOutlined,
  ReadOutlined,
  PhoneOutlined,
  MenuOutlined,
  CloseOutlined
} from "@ant-design/icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home", icon: <HomeOutlined /> },
    { href: "/skills", label: "Skills", icon: <ProjectOutlined /> },
    { href: "/services", label: "Services", icon: <CustomerServiceOutlined /> },
    { href: "/projects", label: "Projects", icon: <FileOutlined /> },
    // { href: "/blog", label: "Blog", icon: <ReadOutlined /> },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm  border-b-1 shadow-lg border-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Danish Imran
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-1 text-md font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                </Link>
              ))}

            </div>

            <Button
              type="primary"
              icon={<PhoneOutlined />}
              style={{ background: "linear-gradient(90deg, rgba(189,99,231,1) 32%, rgba(73,49,227,1) 100%)" }}
              className="hover:bg-purple-700"
            >
              Request a call
            </Button>
            {/* Mobile menu button */}
            {/* <Button
              type="text"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            /> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}

            </div>
            <Button
              type="primary"
              icon={<PhoneOutlined />}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Request a call
            </Button>
          </div>
        )}
      </nav>

    </>
  );
}