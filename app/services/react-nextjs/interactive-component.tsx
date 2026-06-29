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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Разработка сайтов и веб-приложений на React и Next.js</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">React и Next.js подходят для быстрых интерфейсов, личных кабинетов, лендингов, каталогов и проектов, которые нужно развивать без хаоса в коде. Важно сразу заложить правильную структуру, SEO и удобство поддержки.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Когда подходит React и Next.js</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Когда подходит React и Next.js</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Этот стек полезен, когда сайту нужна скорость, компонентность, гибкая логика, интерактивные элементы и нормальная подготовка к продвижению.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Личные кабинеты и интерфейсы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Формы, фильтры, состояния, таблицы, интерактивные блоки и работа с API.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">SEO-страницы на Next.js</h3>
                        <p className="mt-4 leading-7 text-slate-300">SSR/SSG помогает отдавать поисковикам понятный HTML, а не пустой экран с клиентской отрисовкой.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Быстрое развитие проекта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Компонентный подход упрощает добавление новых страниц, блоков и функций.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что можно разработать</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что можно разработать</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">На React и Next.js можно собрать как простую посадочную страницу, так и сложный интерфейс с интеграциями.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Корпоративный сайт</h3>
                        <p className="mt-4 leading-7 text-slate-300">Главная, услуги, кейсы, блог, контакты, формы и SEO-страницы.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Веб-приложение</h3>
                        <p className="mt-4 leading-7 text-slate-300">Личный кабинет, роли, формы, списки, API, интерфейсные сценарии.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Каталог или витрина</h3>
                        <p className="mt-4 leading-7 text-slate-300">Карточки товаров или услуг, фильтры, категории, поиск и посадочные страницы.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Админ-интерфейс</h3>
                        <p className="mt-4 leading-7 text-slate-300">Панели управления, таблицы, действия, статусы, уведомления и интеграции.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Этапы</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Как проходит работа</h2>
                    {/* <p className="mt-5 text-lg leading-8 text-slate-300">Процесс лучше показывать прямо на странице. Это повышает доверие и помогает клиенту понять, что разработка - не просто набор красивых блоков.</p> */}
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Почему стоит выбрать React и Next.js для разработки сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">React и Next.js позволяют создавать быстрые, современные и масштабируемые веб-приложения. Благодаря серверному рендерингу (SSR) и статической генерации страниц (SSG) сайты на Next.js обеспечивают высокую скорость загрузки, отличную производительность и хорошие показатели SEO.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Для каких проектов подходит React / Next.js?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Этот стек отлично подходит для корпоративных сайтов, SaaS-платформ, личных кабинетов, маркетплейсов, интернет-магазинов, CRM-систем и других проектов со сложной бизнес-логикой. Если проект планируется развивать и масштабировать, React и Next.js являются одним из наиболее перспективных решений.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Сколько стоит разработка сайта на React или Next.js?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от сложности интерфейса, количества страниц, интеграций с внешними сервисами, наличия личного кабинета и других требований. Проекты на React и Next.js обычно требуют больше времени на разработку по сравнению с шаблонными решениями, однако обеспечивают более высокую производительность и гибкость в дальнейшем развитии.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Будет ли сайт на React и Next.js хорошо индексироваться поисковыми системами?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Next.js изначально ориентирован на SEO-оптимизацию благодаря серверному рендерингу и генерации статических страниц. Это позволяет поисковым системам корректно индексировать контент и улучшает видимость сайта в результатах поиска по сравнению с классическими SPA-приложениями.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Можно ли доработать существующий React или Next.js проект?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Я занимаюсь не только разработкой новых проектов, но и поддержкой существующих решений. Возможны аудит кода, оптимизация производительности, исправление ошибок, рефакторинг, внедрение нового функционала, интеграция API и миграция на актуальные версии React и Next.js.</p>
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
                <h2 className="text-2xl font-black">Разработка сайтов на React и Next.js — современные решения для бизнеса</h2>
                <p className="py-3">Разработка сайтов на React и Next.js — это выбор компаний, которым важны высокая производительность, современный пользовательский интерфейс и возможность дальнейшего масштабирования проекта. Сегодня недостаточно просто создать красивый сайт. Современный веб-ресурс должен быстро загружаться, корректно работать на любых устройствах, быть удобным для пользователей и соответствовать требованиям поисковых систем. Именно поэтому React и Next.js стали одними из самых востребованных технологий для создания сайтов и веб-приложений. Next.js расширяет возможности React за счет серверного рендеринга, статической генерации страниц и встроенной оптимизации, что положительно влияет на производительность и SEO.</p>
                <p className="py-3">Я занимаюсь разработкой сайтов на React и разработкой сайтов на Next.js, создавая проекты, ориентированные на реальные задачи бизнеса. Работаю напрямую с заказчиком без посредников и лично отвечаю за каждый этап разработки — от проектирования архитектуры до публикации готового проекта.</p>
                <h2 className="text-2xl font-black">Разработка сайтов на React</h2>
                <p className="py-3">React — одна из самых популярных библиотек для создания современных пользовательских интерфейсов. Благодаря компонентному подходу можно разрабатывать масштабируемые проекты, которые легко поддерживать и развивать в будущем.</p>
                <p className="py-3">Разработка сайтов на React подходит для корпоративных порталов, личных кабинетов, CRM-систем, административных панелей, сервисов бронирования, маркетплейсов, SaaS-платформ и других сложных веб-проектов. Компонентная архитектура ускоряет разработку, упрощает сопровождение и позволяет внедрять новый функционал без переработки всего проекта.</p>
                <p className="py-3">Как React разработчик, я создаю интерфейсы, которые одинаково хорошо работают на компьютерах, планшетах и мобильных устройствах. Большое внимание уделяется качеству кода, производительности и удобству дальнейшей поддержки проекта.</p>
                <h2 className="text-2xl font-black">Разработка сайтов на Next.js</h2>
                <p className="py-3">Если проекту необходимы высокая скорость загрузки, хорошая индексация поисковыми системами и максимальная производительность, оптимальным выбором становится разработка сайтов на Next.js.</p>
                <p className="py-3">Next.js построен на React и предоставляет дополнительные возможности: SSR (Server Side Rendering), SSG (Static Site Generation), оптимизацию изображений, встроенную маршрутизацию и гибкую работу с API. Благодаря этому сайты быстрее загружаются, лучше индексируются поисковыми системами и обеспечивают высокий уровень пользовательского опыта.</p>
                <p className="py-3">Как Next.js разработчик, я использую современные возможности фреймворка для создания корпоративных сайтов, интернет-сервисов, лендингов, каталогов продукции и высоконагруженных веб-приложений.</p>
                <h2 className="text-2xl font-black">Разработка сайтов под ключ</h2>
                <p className="py-3">Я предлагаю разработку сайтов под ключ, которая включает полный цикл создания проекта. Работа начинается с анализа бизнеса, определения целей проекта и проектирования структуры будущего сайта. После этого создается интерфейс, разрабатывается функциональная часть, выполняется тестирование и публикация проекта.</p>
                <p className="py-3">В комплекс работ входят:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">анализ требований и проектирование архитектуры;</li>
                    <li className="list-disc">разработка пользовательского интерфейса;</li>
                    <li className="list-disc">frontend разработка на React и Next.js;</li>
                    <li className="list-disc">интеграция с API и внешними сервисами;</li>
                    <li className="list-disc">подключение CRM и систем аналитики;</li>
                    <li className="list-disc">адаптация под мобильные устройства;</li>
                    <li className="list-disc">техническая SEO-подготовка;</li>
                    <li className="list-disc">оптимизация производительности;</li>
                    <li className="list-disc">сопровождение и дальнейшее развитие проекта.</li>
                </ul>
                <p className="py-3">Такой подход позволяет получить полностью готовое решение, которое можно сразу использовать для развития бизнеса.</p>
                <h2 className="text-2xl font-black">Разработка веб-приложений</h2>
                <p className="py-3">Помимо классических сайтов, я занимаюсь разработкой веб-приложений различной сложности. Это могут быть внутренние корпоративные сервисы, личные кабинеты клиентов, CRM-системы, панели управления, B2B-платформы, онлайн-калькуляторы, системы бронирования, маркетплейсы и другие цифровые продукты.</p>
                <p className="py-3">Современные веб-приложения должны работать быстро даже при высокой нагрузке. Именно поэтому при разработке уделяется внимание архитектуре проекта, качеству кода, безопасности и возможности масштабирования.</p>
                <h2 className="text-2xl font-black">Разработка SPA</h2>
                <p className="py-3">Одним из популярных направлений является разработка SPA (Single Page Application). Такие приложения работают без полной перезагрузки страниц, благодаря чему пользователь получает максимально быстрый и плавный интерфейс.</p>
                <p className="py-3">SPA отлично подходят для сложных сервисов, личных кабинетов, CRM, административных панелей и других проектов, где важна высокая скорость взаимодействия пользователя с системой.</p>
                <h2 className="text-2xl font-black">SEO для React и Next.js</h2>
                <p className="py-3">Многие считают, что сайты на JavaScript плохо подходят для поискового продвижения. На практике это касается только неправильно реализованных проектов.</p>
                <p className="py-3">При разработке сайтов на React особое внимание уделяется технической оптимизации, структуре HTML, метатегам и производительности. Если проект ориентирован на активное SEO-продвижение, наиболее эффективным решением становится Next.js, который поддерживает серверный рендеринг и статическую генерацию страниц, благодаря чему поисковые системы получают готовый HTML-контент для индексации.</p>
                <p className="py-3">Я заранее учитываю требования поисковых систем, настраиваю метатеги, карту сайта, микроразметку, Open Graph, оптимизацию изображений и Core Web Vitals. Такой подход позволяет создать сайт, который будет не только удобным для пользователей, но и подготовленным к успешному SEO-продвижению.</p>
                <h2 className="text-2xl font-black">Почему стоит работать со мной</h2>
                <p className="py-3">Работая напрямую с одним разработчиком, вы получаете прозрачную коммуникацию, персональный подход и полный контроль над проектом. Я самостоятельно выполняю проектирование, frontend разработку, интеграции, оптимизацию и поддержку сайта, поэтому хорошо понимаю архитектуру каждого проекта и могу быстро внедрять новые функции.</p>
                <p className="py-3">Если вам необходима разработка сайтов на React, разработка сайтов на Next.js, создание современного веб-приложения или разработка сайтов под ключ, я помогу реализовать проект, который будет соответствовать задачам бизнеса, обеспечит высокую производительность, удобство для пользователей и станет надежной основой для дальнейшего развития компании в интернете.</p>
            </div>
        </section>
    </main>
  );
}