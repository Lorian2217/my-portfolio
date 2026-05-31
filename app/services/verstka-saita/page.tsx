import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Верстка сайта по макету Figma на Tailwind CSS',
  description: 'Адаптивная верстка сайта по макету Figma: Tailwind CSS, Pixel Perfect, мобильная версия, чистая структура, подготовка к Next.js или CMS.',

  openGraph: {
    title: 'Верстка сайта по макету Figma на Tailwind CSS',
    description: 'Адаптивная верстка сайта по макету Figma: Tailwind CSS, Pixel Perfect, мобильная версия, чистая структура, подготовка к Next.js или CMS.',
    url: 'https://lorian.su/services/verstka-saita/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/verstka-saita/',
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

export default function Verstka() {
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