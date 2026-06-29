import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'SEO-оптимизация сайта | Продвижение сайта в поисковых системах',
  description: 'SEO-оптимизация сайтов для Яндекс и Google. Техническое SEO, оптимизация структуры, скорости загрузки и подготовка сайта к продвижению.',

  openGraph: {
    title: 'SEO-оптимизация сайта | Продвижение сайта в поисковых системах',
    description: 'SEO-оптимизация сайтов для Яндекс и Google. Техническое SEO, оптимизация структуры, скорости загрузки и подготовка сайта к продвижению.',
    url: 'https://lorian.su/services/seo-optimizaciya-saita/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/seo-optimizaciya-saita/',
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