import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Интеграции сайта с CRM, Telegram, почтой и аналитикой',
  description: 'Интеграция сайта с CRM, Telegram, почтой, Яндекс Метрикой и внешними сервисами. Формы заявок, уведомления, цели, события и API.',

  openGraph: {
    title: 'Интеграции сайта с CRM, Telegram, почтой и аналитикой',
    description: 'Интеграция сайта с CRM, Telegram, почтой, Яндекс Метрикой и внешними сервисами. Формы заявок, уведомления, цели, события и API.',
    url: 'https://lorian.su/services/integracii-crm/',
    siteName: 'Lorian',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://lorian.su/services/integracii-crm/',
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

export default function Integrate() {
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