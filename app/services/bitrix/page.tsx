import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Разработка сайтов на 1С-Битрикс | Создание и доработка Bitrix',
  description: 'Разработка и доработка сайтов на 1С-Битрикс. Корпоративные сайты, интернет-магазины, каталоги, интеграция CRM и техническая поддержка.',

  openGraph: {
    title: 'Разработка сайтов на 1С-Битрикс | Создание и доработка Bitrix',
    description: 'Разработка и доработка сайтов на 1С-Битрикс. Корпоративные сайты, интернет-магазины, каталоги, интеграция CRM и техническая поддержка.',
    url: 'https://lorian.su/services/bitrix/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/bitrix/',
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

export default function serviceBitrix() {
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