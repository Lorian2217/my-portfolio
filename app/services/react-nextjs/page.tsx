import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component';

export const metadata: Metadata = {
  title: 'Разработка на React и Next.js - сайты и веб-приложения',
  description: 'Разработка сайтов, интерфейсов и веб-приложений на React и Next.js: SSR/SSG, компоненты, формы, SEO-структура, интеграции и поддержка.',

  openGraph: {
    title: 'Разработка на React и Next.js - сайты и веб-приложения',
    description: 'Разработка сайтов, интерфейсов и веб-приложений на React и Next.js: SSR/SSG, компоненты, формы, SEO-структура, интеграции и поддержка.',
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