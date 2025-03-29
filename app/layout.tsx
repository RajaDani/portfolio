import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "aos/dist/aos.css";
import { Roboto } from 'next/font/google'
import Navbar from "./home/Navbar";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Danish Imran | Portfolio",
  description: "Portfolio website for Danish Imran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
