import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Разрешаем доступ всем поисковым роботам (Яндекс, Google и т.д.)
      allow: '/',     // Разрешаем индексировать весь сайт
      disallow: ['/api/', '/providers/', '/components/'], // Запрещаем роботам лазить в системные API-роуты
    },
    // Указываем роботам, где находится карта сайта
    sitemap: 'https://lorian.su/sitemap.xml',
  }
}
