import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Техническая поддержка сайта - доработки, ошибки, скорость и SEO',
  description: 'Техническая поддержка сайта: исправление ошибок, развитие функционала, доработка верстки, формы, скорость, безопасность, SEO-правки и интеграции.',

  openGraph: {
    title: 'Техническая поддержка сайта - доработки, ошибки, скорость и SEO',
    description: 'Техническая поддержка сайта: исправление ошибок, развитие функционала, доработка верстки, формы, скорость, безопасность, SEO-правки и интеграции.',
    url: 'https://lorian.su/services/tehnicheskaya-podderzhka-saita/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/tehnicheskaya-podderzhka-saita/',
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