"use client"

import "../../globals.css";

import Link from 'next/link';


export default function InteractiveComponent() {
  return (
    <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"><span className="h-2 w-2 rounded-full bg-emerald-300"></span>Разработка, SEO-структура, интеграции и поддержка</div>
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">SEO-оптимизация сайта и технические правки</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">SEO начинается не только с текстов. Сайту нужна нормальная техническая база: понятная структура, корректные заголовки, мета-теги, индексация, скорость, микроразметка и страницы под реальные поисковые запросы.</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button onClick={() => window.dispatchEvent(new Event("openLeadModal"))} className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-200">Получить оценку</button>
                        <Link href="/projects/" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold transition hover:border-cyan-300/50 hover:text-cyan-200">Смотреть проекты</Link>
                    </div>
                </div>
                <div className="glass rounded-[2rem] p-6 shadow-2xl shadow-cyan-950/30">
                    <p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-200">Что будет на выходе</p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-white/[.06] p-5">
                            <span className="text-3xl font-black">01</span>
                            <p className="mt-2 font-bold">Понятная структура</p>
                            <p className="mt-2 text-sm text-slate-400">Блоки под пользователя, рекламу и поиск.</p>
                        </div>
                        <div className="rounded-3xl bg-white/[.06] p-5">
                            <span className="text-3xl font-black">02</span>
                            <p className="mt-2 font-bold">Быстрая верстка</p>
                            <p className="mt-2 text-sm text-slate-400">Адаптив и аккуратные компоненты.</p>
                        </div>
                        <div className="rounded-3xl bg-white/[.06] p-5">
                            <span className="text-3xl font-black">03</span>
                            <p className="mt-2 font-bold">SEO-база</p>
                            <p className="mt-2 text-sm text-slate-400">Мета-теги, заголовки, schema.org, sitemap.</p>
                        </div>
                        <div className="rounded-3xl bg-white/[.06] p-5">
                            <span className="text-3xl font-black">04</span>
                            <p className="mt-2 font-bold">Заявки</p>
                            <p className="mt-2 text-sm text-slate-400">Формы, цели, Telegram, CRM и аналитика.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что мешает продвижению</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что мешает продвижению</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Даже хороший дизайн может плохо работать в поиске, если на сайте мало посадочных страниц, дублируются мета-теги, нет структуры услуг, слабые тексты и технические ошибки мешают индексации.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Мало страниц под услуги</h3>
                        <p className="mt-4 leading-7 text-slate-300">Одна главная не может полноценно закрыть все запросы: разработка сайтов, Next.js, Bitrix, верстка, поддержка и интеграции.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Слабая структура заголовков</h3>
                        <p className="mt-4 leading-7 text-slate-300">H1, H2 и H3 должны помогать понять тему страницы, а не просто оформлять визуальные блоки.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нет коммерческих факторов</h3>
                        <p className="mt-4 leading-7 text-slate-300">Для SEO важны не только ключи, но и цены, этапы, FAQ, кейсы, контакты, доверие и понятные CTA.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что входит в SEO-оптимизацию</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что входит в SEO-оптимизацию</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Работы можно делать по SEO-ТЗ или начать с базового аудита и внедрить самые важные правки.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Мета-теги</h3>
                        <p className="mt-4 leading-7 text-slate-300">Title, description, canonical, Open Graph и уникальные мета для каждой посадочной страницы.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Техническая база</h3>
                        <p className="mt-4 leading-7 text-slate-300">Sitemap.xml, robots.txt, скорость загрузки, ошибки, дубли, редиректы и индексация.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Микроразметка</h3>
                        <p className="mt-4 leading-7 text-slate-300">Schema.org для услуг, FAQ, организации, хлебных крошек и карточек проектов.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Контентная структура</h3>
                        <p className="mt-4 leading-7 text-slate-300">Посадочные блоки, тексты по услугам, FAQ, перелинковка и расширение семантики.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Этапы</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Как проходит работа</h2>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">01. Разбор задачи</h3>
                        <p className="mt-4 leading-7 text-slate-300">Смотрим нишу, сайт, макет, конкурентов, цели и текущие ограничения.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">02. Структура</h3>
                        <p className="mt-4 leading-7 text-slate-300">Собираем логику блоков, посадочные запросы, CTA, формы и сценарии пользователя.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">03. Разработка</h3>
                        <p className="mt-4 leading-7 text-slate-300">Верстаем и подключаем функционал: адаптив, компоненты, формы, интеграции.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">04. SEO и запуск</h3>
                        <p className="mt-4 leading-7 text-slate-300">Проверяем мета-теги, заголовки, скорость, микроразметку, аналитику и индексацию.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">FAQ</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Частые вопросы</h2>
                </div>
                <div className="mt-12 space-y-4">
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Что входит в SEO-оптимизацию сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">SEO-оптимизация включает технический аудит сайта, исправление ошибок, сбор и кластеризацию ключевых запросов, оптимизацию структуры страниц, настройку метатегов, улучшение скорости загрузки, работу с контентом и повышение удобства сайта для пользователей и поисковых систем.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Когда можно ожидать первые результаты от SEO?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">SEO — это долгосрочный инструмент продвижения. Первые положительные изменения обычно становятся заметны через 1–3 месяца, а значительный рост позиций и органического трафика может потребовать от 3 до 12 месяцев в зависимости от конкуренции в нише и текущего состояния сайта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Сколько стоит SEO-продвижение сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от размера сайта, уровня конкуренции, региона продвижения и объема необходимых работ. После проведения аудита я подготавливаю индивидуальный план работ и рассчитываю бюджет с учетом целей бизнеса и текущего состояния проекта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Можно ли гарантировать выход сайта в ТОП поисковой выдачи?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Ни один специалист не может гарантировать конкретные позиции в поисковых системах, поскольку алгоритмы Яндекса и Google постоянно меняются. Однако грамотная SEO-стратегия позволяет существенно улучшить видимость сайта, увеличить органический трафик и повысить количество заявок от потенциальных клиентов.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Подходит ли SEO для нового сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Более того, SEO рекомендуется внедрять еще на этапе разработки сайта. Правильная структура, техническая оптимизация и качественный контент позволяют быстрее индексироваться поисковыми системами и избежать многих ошибок, которые впоследствии требуют дополнительных затрат на исправление.</p>
                    </details>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Навигация по услугам</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Другие услуги разработки</h2>
                </div>
                {/* Вывести церез цикл */}
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Link href="/services/razrabotka-saitov/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">Разработка сайтов</span>
                        <span className="mt-1 block text-sm text-slate-400">Сайт под бизнес-задачи, SEO и заявки</span>
                    </Link>
                    <Link href="/services/landing-page/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">Лендинг под рекламу</span>
                        <span className="mt-1 block text-sm text-slate-400">Посадочная страница для Яндекс Директ и таргета</span>
                    </Link>
                    <Link href="/services/react-nextjs/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">React и Next.js</span>
                        <span className="mt-1 block text-sm text-slate-400">Интерфейсы, веб-приложения и быстрые страницы</span>
                    </Link>
                    <Link href="/services/bitrix/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">1C-Bitrix и CMS</span>
                        <span className="mt-1 block text-sm text-slate-400">Корпоративные сайты, каталоги и доработки</span>
                    </Link>
                        <Link href="/services/verstka-saita/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">Верстка сайта</span>
                        <span className="mt-1 block text-sm text-slate-400">Адаптивная верстка по Figma на Tailwind</span>
                    </Link>
                    <Link href="/services/tehnicheskaya-podderzhka-saita/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">Техподдержка сайта</span>
                        <span className="mt-1 block text-sm text-slate-400">Исправления, развитие и регулярные доработки</span>
                    </Link>
                    <Link href="/services/seo-optimizaciya-saita/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">SEO-оптимизация</span>
                        <span className="mt-1 block text-sm text-slate-400">Технические правки, структура и индексация</span>
                    </Link>
                    <Link href="/services/integracii-crm/" className="rounded-2xl border border-white/10 bg-white/[.05] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.08]">
                        <span className="block font-bold text-white">Интеграции CRM</span>
                        <span className="mt-1 block text-sm text-slate-400">Формы, заявки, аналитика и уведомления</span>
                    </Link>
                </div>
            </div>
        </section>

        <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 p-8 text-slate-950 sm:p-12 lg:p-16">
                <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[.24em] opacity-70">Связаться</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Расскажите о задаче - предложу структуру и план работ</h2>
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-800">Можно прислать ссылку на сайт, макет, ТЗ или просто краткое описание. Сначала разберем, что нужно сделать в первую очередь: структуру, разработку, SEO, рекламу, скорость или интеграции.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button onClick={() => window.dispatchEvent(new Event("openLeadModal"))} className="rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800">Оставить заявку</button>
                        <a href="https://t.me/Lorian2217" className="rounded-full border border-slate-950/20 px-7 py-4 text-center font-bold transition hover:bg-white/30">Написать в Telegram</a>
                        <a href="mailto:lorian2221@yandex.ru" className="rounded-full border border-slate-950/20 px-7 py-4 text-center font-bold transition hover:bg-white/30">lorian2221@yandex.ru</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl glass px-5 py-4 rounded-[2.5rem]">
                <h2 className="text-2xl font-black">SEO-оптимизация сайта — основа успешного продвижения бизнеса в интернете</h2>
                <p className="py-3">SEO-оптимизация сайта — это комплекс мероприятий, направленных на повышение позиций сайта в поисковых системах Яндекс и Google, увеличение органического трафика и привлечение новых клиентов. Современное SEO-продвижение сайта начинается не с покупки ссылок, а с качественной технической подготовки ресурса, правильной структуры страниц, оптимизации контента и устранения ошибок, которые мешают поисковым системам корректно индексировать сайт.</p>
                <p className="py-3">Я занимаюсь SEO-оптимизацией сайта для компаний, предпринимателей и специалистов, которым важно получать стабильный поток клиентов из поисковых систем. Моя задача — не просто улучшить отдельные показатели сайта, а создать прочную основу для долгосрочного поискового продвижения, благодаря которой ресурс сможет занимать высокие позиции по коммерческим запросам.</p>
                <h2 className="text-2xl font-black">Что такое SEO-оптимизация сайта</h2>
                <p className="py-3">Многие считают, что SEO-продвижение сайта сводится только к написанию текстов с большим количеством ключевых слов. На практике это лишь небольшая часть работы. Эффективная поисковая оптимизация сайта включает технический аудит, анализ конкурентов, сбор семантического ядра, оптимизацию структуры сайта, настройку метатегов, улучшение скорости загрузки страниц, внутреннюю перелинковку, работу с контентом и подготовку сайта к дальнейшему продвижению.</p>
                <p className="py-3">Современные алгоритмы Яндекса и Google оценивают сотни факторов ранжирования. Поэтому качественная оптимизация сайта должна учитывать как технические требования поисковых систем, так и удобство пользователей. Чем быстрее работает сайт, чем проще найти нужную информацию и чем лучше проработан контент, тем выше вероятность занять лидирующие позиции в поисковой выдаче.</p>
                <h2 className="text-2xl font-black">SEO-аудит сайта</h2>
                <p className="py-3">Любая работа начинается с комплексного SEO-аудита сайта. На этом этапе анализируется техническое состояние ресурса, корректность индексации страниц, структура URL, наличие дублей, скорость загрузки, мобильная версия, внутренняя перелинковка, ошибки в коде и соответствие современным требованиям поисковых систем.</p>
                <p className="py-3">После проведения SEO-аудита сайта становится понятно, какие ошибки мешают продвижению и какие изменения необходимо внедрить в первую очередь. Такой подход позволяет избежать бессистемной оптимизации и сосредоточиться на тех задачах, которые действительно влияют на результат.</p>
                <h2 className="text-2xl font-black">Сбор семантического ядра</h2>
                <p className="py-3">Одним из самых важных этапов является формирование семантического ядра. Это список запросов, по которым потенциальные клиенты ищут ваши товары или услуги. На основе семантики создается структура сайта, определяются посадочные страницы и подготавливается контент.</p>
                <p className="py-3">Грамотно собранное семантическое ядро помогает избежать конкуренции между страницами, улучшить релевантность сайта и значительно увеличить количество целевого трафика из поисковых систем.</p>
                <h2 className="text-2xl font-black">Внутренняя оптимизация сайта</h2>
                <p className="py-3">Внутренняя оптимизация сайта включает настройку заголовков H1–H6, оптимизацию Title и Description, создание корректной структуры страниц, настройку микроразметки, файлов robots.txt и sitemap.xml, оптимизацию изображений, внутреннюю перелинковку и устранение технических ошибок.</p>
                <p className="py-3">Отдельное внимание уделяется качеству контента. Каждый текст создается с учетом поискового спроса и намерений пользователей. Это позволяет улучшить поведенческие факторы и повысить эффективность дальнейшего продвижения.</p>
                <h2 className="text-2xl font-black">Техническая оптимизация сайта</h2>
                <p className="py-3">Даже качественный контент не принесет результата, если сайт медленно работает или содержит технические ошибки. Поэтому обязательной частью работы является техническая оптимизация сайта.</p>
                <p className="py-3">В рамках технической оптимизации выполняется ускорение загрузки страниц, оптимизация CSS и JavaScript, настройка кеширования, сжатие изображений, исправление ошибок индексации, устранение битых ссылок, оптимизация базы данных и улучшение Core Web Vitals. Все это положительно влияет как на позиции сайта, так и на пользовательский опыт.</p>
                <h2 className="text-2xl font-black">Продвижение сайта в Яндекс и Google</h2>
                <p className="py-3">Качественное SEO-продвижение сайта невозможно без учета особенностей разных поисковых систем. Яндекс и Google используют различные алгоритмы ранжирования, поэтому при оптимизации учитываются требования обеих систем.</p>
                <p className="py-3">Продвижение сайта в Яндекс требует особого внимания к коммерческим факторам, региональности и качеству контента. Для продвижения сайта в Google большое значение имеют скорость работы сайта, мобильная адаптация, техническое качество кода и экспертность материалов.</p>
                <p className="py-3">Комплексная поисковая оптимизация сайта позволяет успешно продвигаться сразу в обеих поисковых системах и получать стабильный поток целевых посетителей.</p>
                <h2 className="text-2xl font-black">SEO для Bitrix, React и Next.js</h2>
                <p className="py-3">Я занимаюсь оптимизацией проектов, разработанных на различных технологиях. Если сайт работает на 1С-Битрикс, выполняется настройка ЧПУ, компонентов, кеширования, карт сайта, фильтров и других элементов, влияющих на индексацию.</p>
                <p className="py-3">Также выполняется SEO для React и SEO для Next.js. Современные JavaScript-приложения требуют правильной настройки серверного рендеринга, генерации метатегов, карты сайта и структуры страниц. Благодаря этому поисковые системы корректно индексируют контент, а сайт получает преимущества в органической выдаче.</p>
                <h2 className="text-2xl font-black">Почему стоит заказать SEO-оптимизацию</h2>
                <p className="py-3">Работая напрямую со мной, вы взаимодействуете с разработчиком, который самостоятельно выполняет техническую часть проекта. Это особенно важно при SEO-оптимизации сайта, поскольку многие рекомендации невозможно реализовать без понимания архитектуры сайта и программирования.</p>
                <p className="py-3">Я не использую шаблонные решения и не ограничиваюсь поверхностными изменениями. Каждая SEO-оптимизация сайта начинается с анализа бизнеса, конкурентов и целевой аудитории. После этого формируется стратегия SEO-продвижения сайта, позволяющая постепенно увеличивать видимость ресурса, улучшать позиции по ключевым запросам и привлекать больше клиентов.</p>
                <p className="py-3">Если вашему сайту необходима профессиональная SEO-оптимизация сайта, SEO-аудит сайта, техническая оптимизация сайта или комплексное SEO-продвижение сайта, я помогу подготовить ресурс к успешному продвижению в Яндексе и Google. Грамотная поисковая оптимизация сайта — это долгосрочная инвестиция в развитие бизнеса, увеличение органического трафика и стабильный рост количества заявок без постоянного увеличения рекламного бюджета.</p>
            </div>
        </section>
    </main>
  );
}