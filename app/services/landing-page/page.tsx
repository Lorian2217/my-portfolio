import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Разработка лендинга под рекламу - посадочная страница для заявок',
  description: 'Лендинг под контекстную рекламу и таргет: оффер, конверсионные блоки, формы, квиз, аналитика, адаптивная верстка и SEO-база.',

  openGraph: {
    title: 'Разработка лендинга под рекламу - посадочная страница для заявок',
    description: 'Лендинг под контекстную рекламу и таргет: оффер, конверсионные блоки, формы, квиз, аналитика, адаптивная верстка и SEO-база.',
    url: 'https://lorian.su/services/landing-page/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/landing-page/',
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