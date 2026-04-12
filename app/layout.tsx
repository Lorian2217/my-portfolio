import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Script from 'next/script';
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
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(108409506, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            `,
          }}
        />
      </head>
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
