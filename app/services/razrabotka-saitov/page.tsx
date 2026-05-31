import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Разработка сайтов под ключ - React, Next.js, Bitrix и CMS',
  description: 'Разработка сайтов под ключ для бизнеса: структура, адаптивная верстка, SEO-база, формы, аналитика, интеграции и подготовка к рекламе.',

  openGraph: {
    title: 'Разработка сайтов под ключ - React, Next.js, Bitrix и CMS',
    description: 'Разработка сайтов под ключ для бизнеса: структура, адаптивная верстка, SEO-база, формы, аналитика, интеграции и подготовка к рекламе.',
    url: 'https://lorian.su/services/razrabotka-saitov/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/razrabotka-saitov/',
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

export default function Services() {
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