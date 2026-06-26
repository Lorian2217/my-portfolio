import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Image from "next/image";
import Script from 'next/script';

import ModalProvider from "./providers/modal-provider";
import Header from './components/header';
import Footer from './components/footer';
import LeadModal from './components/modal';
import Metrika from './components/metrika';

// Подключаем стили
// import "./globals.css";

// Иконки
// import home from '../public/img/icons/footer-menu/home-icon.png';
// import project from '../public/img/icons/footer-menu/project-icon.png';
// import about from '../public/img/icons/footer-menu/about-icon.png';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Разработка сайтов на React, Next.js и Bitrix - Lorian',
  description: 'Разработка сайтов, лендингов и веб-приложений на React, Next.js, Bitrix и CMS. SEO-структура, формы, аналитика, интеграции и поддержка.',

  openGraph: {
    title: 'Разработка сайтов на React, Next.js и Bitrix - Lorian',
    description: 'Разработка сайтов, лендингов и веб-приложений на React, Next.js, Bitrix и CMS. SEO-структура, формы, аналитика, интеграции и поддержка.',
    url: 'https://lorian.su/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth`}
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
        <meta name="google-site-verification" content="amAprgHEm7IChbfXtZoBV_nLo16wz84gomSujKPSLOs" />
        <meta name="zen-verification" content="M47LlZMLsvZdxAe25D7ytrS7OCi2o4mLHBQxm2XDwG49Cu3Tngaa7tgGaBTDvBqO" />
      </head>
      <body className={`${inter.className} font-sans text-slate-100 antialiased`}>
        <Header />

        <Metrika />

        {children}

        {/* <section className="footer-menu">
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
        </section> */}

          <ModalProvider />
        <Footer />
      </body>
    </html>
  );
}
