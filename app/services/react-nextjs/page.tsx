import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component';

export const metadata: Metadata = {
  title: 'Разработка сайтов на React и Next.js | Frontend разработка',
  description: 'Разработка современных сайтов и веб-приложений на React и Next.js. Высокая скорость работы, SEO, SSR и индивидуальная разработка.',

  openGraph: {
    title: 'Разработка сайтов на React и Next.js | Frontend разработка',
    description: 'Разработка современных сайтов и веб-приложений на React и Next.js. Высокая скорость работы, SEO, SSR и индивидуальная разработка.',
    url: 'https://lorian.su/services/react-nextjs/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/react-nextjs/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lorian - разработка сайтов",
  url: "https://lorian.su",
  email: "lorian2221@yandex.ru",
  areaServed: "Россия",
  founder: {
    "@type": "Person",
    name: "Данила Мохнаткин",
    jobTitle: "Full-stack developer"
  },
  serviceType: [
    "Разработка сайтов",
    "Разработка на React и Next.js",
    "Верстка сайтов",
    "Разработка на 1C-Bitrix",
    "Техническая поддержка сайтов",
    "SEO-оптимизация сайтов",
    "Интеграции CRM"
  ]
};

export default function advCoding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <InteractiveComponent />
    </>
  )
}