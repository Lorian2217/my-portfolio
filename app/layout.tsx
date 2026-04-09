import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import home from '../public/img/icons/footer-menu/home-icon.png';
import project from '../public/img/icons/footer-menu/project-icon.png';
import about from '../public/img/icons/footer-menu/about-icon.png';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
}); 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Данила Мохнаткин",
  description: "Портфолио Веб-разработчика Мохнаткина Данилы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <section className="footer-menu">
          <a href="/" rel="noreferrer" className="text-decoration-none link">
            <Image src={home} alt="Главная" />
            <span className="text-white">Главная</span>
          </a>
          <a href="projects" rel="noreferrer" className="text-decoration-none link">
            <Image src={project} alt="Проекты" />
            <span className="text-white">Проекты</span>
          </a>
          <a href="/about" rel="noreferrer" className="text-decoration-none link">
            <Image src={about} alt="Обо мне" />
            <span className="text-white">Обо мне</span>
          </a>
        </section>
      </body>
    </html>
  );
}
