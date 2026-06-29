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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Адаптивная верстка сайта по макету Figma</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Верстка должна не просто повторять макет, а нормально работать на реальных устройствах, быстро загружаться и быть удобной для дальнейшей интеграции в Next.js, CMS или другой проект.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Какая верстка нужна бизнесу</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Какая верстка нужна бизнесу</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Пользователь не видит код, но видит ошибки: съехавшие блоки, мелкий текст, неудобные кнопки, тяжелые изображения и формы, которые не работают. Поэтому верстка напрямую влияет на заявки.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Pixel Perfect</h3>
                        <p className="mt-4 leading-7 text-slate-300">Страница визуально соответствует макету и не теряет аккуратность после адаптации.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Адаптивность</h3>
                        <p className="mt-4 leading-7 text-slate-300">Блоки нормально работают на мобильных, планшетах и больших экранах.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Чистая структура</h3>
                        <p className="mt-4 leading-7 text-slate-300">Код не превращается в хаос, его можно поддерживать и развивать.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что входит в верстку</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что входит в верстку</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Состав работ зависит от количества экранов, сложности анимаций, форм и будущей интеграции.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Tailwind CSS</h3>
                        <p className="mt-4 leading-7 text-slate-300">Утилитарные классы, быстрая сборка интерфейса и удобная поддержка компонентов.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Интерактивные элементы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Модальные окна, меню, аккордеоны, табы, формы и простые сценарии на JavaScript.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Оптимизация изображений</h3>
                        <p className="mt-4 leading-7 text-slate-300">Подготовка картинок, alt, размеры, lazy loading и аккуратная визуальная сетка.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Подготовка к интеграции</h3>
                        <p className="mt-4 leading-7 text-slate-300">Структура, которую можно перенести в Next.js, Bitrix, WordPress или другую CMS.</p>
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Что входит в услугу верстки сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">В услугу входит преобразование дизайн-макетов (Figma, PSD, XD и других форматов) в готовый HTML/CSS/JavaScript-код. Верстка выполняется с учетом адаптивности, кроссбраузерности, скорости загрузки и современных стандартов веб-разработки.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Сколько стоит верстка сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от количества страниц, сложности дизайна, наличия анимаций, интерактивных элементов и дополнительных требований. После изучения макетов я предоставляю точную оценку стоимости и сроков выполнения работ.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Будет ли сайт корректно отображаться на мобильных устройствах?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Вся верстка выполняется по принципу Mobile First или с полноценной адаптацией под смартфоны, планшеты и компьютеры. Это обеспечивает удобство для пользователей и соответствует современным требованиям поисковых систем.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Можно ли интегрировать готовую верстку в CMS или существующий сайт?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Готовая верстка может быть интегрирована в WordPress, 1С-Битрикс, Laravel, React, Next.js и другие системы. Также возможно подключение верстки к уже существующему проекту без необходимости полной переработки сайта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Почему качественная верстка важна для бизнеса?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">От качества верстки зависит скорость загрузки страниц, удобство пользователей, корректное отображение на разных устройствах и дальнейшее развитие проекта. Чистый и оптимизированный код облегчает поддержку сайта, улучшает пользовательский опыт и положительно влияет на SEO-продвижение.</p>
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
                        <span className="mt-1 block text-sm text-slate-400">Адаптивная верстка по Figma</span>
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
                <h2 className="text-2xl font-black">Верстка сайта — основа качественного веб-проекта</h2>
                <p className="py-3">Верстка сайта — один из самых важных этапов разработки любого веб-проекта. Именно от качества верстки зависит скорость загрузки страниц, корректное отображение сайта на различных устройствах, удобство пользователей и дальнейшие возможности для SEO-продвижения. Даже самый современный дизайн не сможет приносить результат, если он реализован с техническими ошибками. Поэтому профессиональная верстка сайта должна выполняться с соблюдением современных стандартов HTML, CSS и JavaScript.</p>
                <p className="py-3">Я занимаюсь версткой сайта по макету для бизнеса, интернет-магазинов, корпоративных сайтов, лендингов и веб-приложений. Работаю напрямую с заказчиком без посредников, поэтому полностью отвечаю за качество реализации проекта. Независимо от сложности дизайна, моя задача — максимально точно перенести макет в браузер и создать быстрый, адаптивный и удобный интерфейс.</p>
                <h2 className="text-2xl font-black">Верстка сайта по макету Figma</h2>
                <p className="py-3">Наиболее востребованной услугой сегодня является верстка сайта из Figma. Большинство современных дизайнеров разрабатывают интерфейсы именно в Figma, поэтому я выполняю точную реализацию всех элементов макета с соблюдением размеров, отступов, типографики, цветов и анимаций. Верстка сайта по макету выполняется максимально близко к дизайну с соблюдением принципов Pixel Perfect, благодаря чему готовый сайт полностью соответствует утвержденному проекту.</p>
                <p className="py-3">Во время работы особое внимание уделяется качеству кода. Используется семантическая HTML верстка, современный CSS и JavaScript без лишних библиотек там, где они не требуются. Такой подход позволяет получить чистый код, который легко поддерживать и развивать в дальнейшем.</p>
                <h2 className="text-2xl font-black">Адаптивная верстка сайта</h2>
                <p className="py-3">Сегодня большая часть пользователей посещает сайты со смартфонов, поэтому адаптивная верстка сайта стала обязательным требованием. Каждый проект корректно отображается на компьютерах, ноутбуках, планшетах и мобильных устройствах независимо от разрешения экрана.</p>
                <p className="py-3">Адаптивность влияет не только на удобство пользователей, но и на позиции сайта в поисковых системах. Google и Яндекс учитывают мобильную версию при ранжировании, поэтому качественная адаптивная верстка сайта помогает улучшить SEO-показатели и увеличить конверсию.</p>
                <h2 className="text-2xl font-black">HTML, CSS и JavaScript</h2>
                <p className="py-3">Профессиональная верстка на HTML CSS JavaScript позволяет создавать современные сайты с высокой производительностью и удобным пользовательским интерфейсом. При разработке используются актуальные возможности HTML5 и CSS3, современные методы построения сеток с помощью Flexbox и CSS Grid, а также JavaScript для реализации интерактивных элементов.</p>
                <p className="py-3">Код остается понятным, структурированным и легко масштабируется при дальнейшем развитии проекта. Такой подход особенно важен для долгосрочных проектов, где регулярно появляются новые разделы и функциональные возможности.</p>
                <h2 className="text-2xl font-black">Pixel Perfect и кроссбраузерная верстка</h2>
                <p className="py-3">Качественная верстка сайта невозможна без проверки соответствия дизайну. Именно поэтому все проекты проходят тестирование по технологии Pixel Perfect, что позволяет добиться практически полного совпадения готовой страницы с макетом.</p>
                <p className="py-3">Не менее важной частью разработки является кроссбраузерная верстка. Сайт корректно работает в Google Chrome, Mozilla Firefox, Microsoft Edge, Safari и других современных браузерах. Благодаря этому каждый посетитель получает одинаково качественный пользовательский опыт независимо от используемого устройства.</p>
                <h2 className="text-2xl font-black">Верстка сайта под ключ</h2>
                <p className="py-3">Если требуется не только сверстать страницы, но и подготовить полностью готовый проект, выполняется верстка сайта под ключ. В услугу входит анализ макета, HTML-верстка, адаптация под мобильные устройства, подключение JavaScript, оптимизация скорости загрузки, базовая SEO-подготовка, тестирование и подготовка проекта к дальнейшей интеграции с CMS или backend.</p>
                <p className="py-3">Такой подход позволяет избежать технических ошибок на следующих этапах разработки и значительно ускоряет запуск проекта.</p>
                <h2 className="text-2xl font-black">Натяжка верстки на Bitrix</h2>
                <p className="py-3">После завершения HTML-разработки при необходимости выполняется натяжка верстки на Bitrix. Все шаблоны интегрируются с системой управления сайтом, подключаются компоненты, настраиваются динамические разделы, формы обратной связи, меню, каталоги и другие функциональные элементы.</p>
                <p className="py-3">Если сайт создается на 1С-Битрикс, верстка сразу выполняется с учетом особенностей платформы, что облегчает последующую интеграцию и обеспечивает стабильную работу проекта.</p>
                <h2 className="text-2xl font-black">Верстка React и Next.js</h2>
                <p className="py-3">Кроме классической HTML-разработки я выполняю верстку React и верстку Next.js. Такой подход используется при создании современных веб-приложений, личных кабинетов, корпоративных сервисов и высоконагруженных проектов.</p>
                <p className="py-3">Компонентная архитектура React позволяет создавать масштабируемые интерфейсы, а Next.js дополнительно обеспечивает серверный рендеринг, высокую скорость загрузки страниц и улучшенные возможности для SEO-продвижения. Благодаря этому сайты и веб-приложения работают быстрее, лучше индексируются поисковыми системами и обеспечивают высокий уровень пользовательского опыта.</p>
                <h2 className="text-2xl font-black">Почему стоит заказать верстку сайта</h2>
                <p className="py-3">Работая напрямую с одним разработчиком, вы получаете полный контроль над проектом, оперативную коммуникацию и высокое качество реализации. Я лично занимаюсь каждым этапом работы — от анализа макета до финального тестирования. Верстка сайта по макету, верстка сайта из Figma, адаптивная верстка сайта, HTML верстка, кроссбраузерная верстка, верстка React, верстка Next.js и натяжка верстки на Bitrix выполняются с соблюдением современных стандартов разработки и требований поисковых систем.</p>
                <p className="py-3">Если вам необходима профессиональная верстка сайта под ключ, которая станет надежной основой для дальнейшей разработки и успешного продвижения проекта, я помогу реализовать решение, полностью соответствующее вашему дизайну, техническим требованиям и задачам бизнеса.</p>
            </div>
        </section>
    </main>
  );
}