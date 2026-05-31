import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Главная страница
      url: 'https://lorian.su',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 1, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 1, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/razrabotka-saitov/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/landing-page/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/react-nextjs/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/bitrix/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/verstka-saita/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/tehnicheskaya-podderzhka-saita/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/seo-optimizaciya-saita/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/services/integracii-crm/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 2, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/projects/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 1, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/about/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 1, // Главная страница самая важная
    },
    {
      url: 'https://lorian.su/contacts/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Подсказываем, что сайт обновляется примерно раз в неделю
      priority: 1, // Главная страница самая важная
    },
  ]
}
