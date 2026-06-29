"use client"

import "../globals.css";

import Link from 'next/link';

export default function InteractiveComponent() {
  return (
    <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
            <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"><span className="h-2 w-2 rounded-full bg-emerald-300"></span>Разработка, SEO-структура, интеграции и поддержка</div>
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Услуги разработки сайтов, веб-приложений и SEO-внедрения</h1>
                    {/* <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Раздел услуг лучше использовать как SEO-хаб: он связывает отдельные посадочные страницы и помогает пользователю быстрее выбрать нужный сценарий работы.</p> */}
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">SEO-хаб: связываю отдельные посадочные страницы и помогаю пользователю быстрее выбрать нужный сценарий работы.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Карта услуг</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Раздел услуг как SEO-хаб</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Услуги, которые я могу вам предложить.</p>
                    <p className="mt-5 text-lg leading-8 text-slate-300">* Рядом с услугой означает, что она в ещё в разработке</p>
                    {/* <p className="mt-5 text-lg leading-8 text-slate-300">Такой раздел собирает все коммерческие направления и передает вес на посадочные страницы. Пользователю проще выбрать нужную задачу, а поиску - понять структуру сайта.</p> */}
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/services/razrabotka-saitov/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Разработка сайтов</h3>
                        <p className="mt-4 leading-7 text-slate-300">Сайт под бизнес-задачи, SEO и заявки</p>
                    </Link>
                    <Link href="/services/landing-page/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Лендинг под рекламу</h3>
                        <p className="mt-4 leading-7 text-slate-300">Посадочная страница для Яндекс Директ и таргета</p>
                    </Link>
                    <Link href="/services/react-nextjs/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">*React и Next.js</h3>
                        <p className="mt-4 leading-7 text-slate-300">Интерфейсы, веб-приложения и быстрые страницы</p>
                    </Link>
                    <Link href="/services/bitrix/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">1C-Bitrix и CMS</h3>
                        <p className="mt-4 leading-7 text-slate-300">Корпоративные сайты, каталоги и доработки</p>
                    </Link>
                    <Link href="/services/verstka-saita/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Верстка сайта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Адаптивная верстка по Figma</p>
                    </Link>
                    <Link href="/services/tehnicheskaya-podderzhka-saita/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Техподдержка сайта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Исправления, развитие и регулярные доработки</p>
                    </Link>
                    <Link href="/services/seo-optimizaciya-saita/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">SEO-оптимизация</h3>
                        <p className="mt-4 leading-7 text-slate-300">Технические правки, структура и индексация</p>
                    </Link>
                    <Link href="/services/integracii-crm/" className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Интеграции CRM</h3>
                        <p className="mt-4 leading-7 text-slate-300">Формы, заявки, аналитика и уведомления</p>
                    </Link>
                </div>
            </div>
        </section>

        {/* <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Как выбрать услугу</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Какую страницу показывать пользователю</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Для рекламы лучше вести пользователя на максимально точную посадочную, а не на общую главную. Для SEO каждая страница должна закрывать свой интент и не конкурировать с соседними страницами.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нужен новый сайт</h3>
                        <p className="mt-4 leading-7 text-slate-300">Вести на страницу разработки сайта под ключ.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Есть макет</h3>
                        <p className="mt-4 leading-7 text-slate-300">Вести на страницу верстки сайта по Figma.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нужен современный стек</h3>
                        <p className="mt-4 leading-7 text-slate-300">Вести на страницу React и Next.js.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Есть Bitrix или CMS</h3>
                        <p className="mt-4 leading-7 text-slate-300">Вести на страницу доработки CMS.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Сайт уже работает</h3>
                        <p className="mt-4 leading-7 text-slate-300">Вести на страницу технической поддержки.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нужно больше трафика</h3>
                        <p className="mt-4 leading-7 text-slate-300">Вести на страницу SEO-оптимизации.</p>
                    </article>
                </div>
            </div>
        </section> */}

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Навигация по услугам</p>
                    {/* <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Другие услуги разработки</h2> */}
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
                        <span className="block font-bold text-white">*React и Next.js</span>
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

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">FAQ</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Частые вопросы</h2>
                </div>
                <div className="mt-12 space-y-4">
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Какие услуги вы предоставляете?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Я занимаюсь разработкой сайтов, созданием Landing Page, версткой по макетам, разработкой на React и Next.js, созданием и поддержкой проектов на 1С-Битрикс, SEO-оптимизацией, технической поддержкой сайтов и интеграцией CRM-систем. Также возможна комплексная реализация проекта от идеи до запуска и дальнейшего сопровождения.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Сколько стоят ваши услуги?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от типа проекта, сложности задач и требуемого функционала. Для каждого клиента подготавливается индивидуальный расчет после обсуждения требований. Это позволяет получить прозрачную смету без скрытых платежей и необоснованных расходов.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Можно ли заказать только часть работ?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Вы можете обратиться как за комплексной разработкой сайта, так и за отдельными услугами: версткой, доработкой существующего проекта, SEO-оптимизацией, интеграцией CRM или технической поддержкой. Работа строится исходя из ваших текущих задач и бюджета.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>С какими технологиями и платформами вы работаете?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">В работе используются современные технологии и популярные системы управления контентом: React, Next.js, PHP, Laravel, WordPress, 1С-Битрикс и другие решения. Выбор технологий зависит от целей проекта, требований к производительности и планов по дальнейшему развитию сайта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Предоставляете ли вы поддержку после завершения проекта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. После запуска проекта можно заказать техническое сопровождение, обновление системы, исправление ошибок, резервное копирование, развитие функционала и консультации по работе с сайтом. Это позволяет поддерживать стабильную работу проекта и своевременно внедрять необходимые изменения.</p>
                    </details>
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
                <h2 className="text-2xl font-black">Услуги по разработке сайтов — Bitrix, React, SEO и CRM интеграции</h2>
                <p className="py-3">На этой странице представлены основные услуги по разработке сайтов, которые я предоставляю как веб-разработчик. Я занимаюсь созданием современных цифровых решений для бизнеса, начиная от простых лендингов и заканчивая сложными веб-сервисами, интернет-магазинами и корпоративными системами. Основное направление работы — разработка сайтов под ключ, включающая полный цикл: от идеи и проектирования до запуска и дальнейшего развития проекта.</p>
                <h2 className="text-2xl font-black">Разработка сайтов под ключ</h2>
                <p className="py-3">Разработка сайтов под ключ — это комплексный процесс, который включает анализ бизнеса, проектирование структуры, разработку дизайна, программирование, адаптацию под мобильные устройства, базовую SEO-оптимизацию и запуск проекта. Такой подход позволяет получить полностью готовый сайт, который можно сразу использовать для привлечения клиентов и увеличения продаж.</p>
                <p className="py-3">Я занимаюсь созданием сайтов для компаний, предпринимателей и специалистов, которым важно не просто присутствие в интернете, а получение реальных заявок и клиентов. Каждый проект разрабатывается индивидуально, без шаблонных решений.</p>
                <h2 className="text-2xl font-black">Создание сайтов любой сложности</h2>
                <p className="py-3">Профессиональное создание сайтов включает разработку различных типов проектов:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">корпоративные сайты для бизнеса</li>
                    <li className="list-disc">лендинги для рекламы и продвижения</li>
                    <li className="list-disc">интернет-магазины и каталоги</li>
                    <li className="list-disc">веб-сервисы и личные кабинеты</li>
                    <li className="list-disc">сложные CRM и SaaS-платформы</li>
                </ul>
                <p className="py-3">Каждый сайт разрабатывается с учетом задач бизнеса, целевой аудитории и требований поисковых систем. Особое внимание уделяется скорости загрузки, удобству интерфейса и конверсии.</p>
                <h2 className="text-2xl font-black">Разработка сайтов на Bitrix</h2>
                <p className="py-3">Одним из ключевых направлений является разработка сайтов на Bitrix. Эта CMS подходит для корпоративных порталов, интернет-магазинов и крупных проектов, где важны безопасность, масштабируемость и интеграции с 1С и CRM-системами.</p>
                <p className="py-3">Разработка сайтов на Bitrix включает:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">настройку структуры и компонентов</li>
                    <li className="list-disc">разработку шаблонов</li>
                    <li className="list-disc">интеграцию с CRM и 1С</li>
                    <li className="list-disc">оптимизацию производительности</li>
                    <li className="list-disc">настройку SEO-модуля</li>
                </ul>
                <p className="py-3">Сайты на Bitrix легко масштабируются и подходят для долгосрочного развития бизнеса.</p>
                <h2 className="text-2xl font-black">Разработка сайтов на React</h2>
                <p className="py-3">Также выполняется разработка сайтов на React и современных frontend-решениях. React позволяет создавать быстрые, интерактивные и удобные интерфейсы для пользователей.</p>
                <p className="py-3">Разработка сайтов на React подходит для:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">SPA приложений</li>
                    <li className="list-disc">личных кабинетов</li>
                    <li className="list-disc">CRM систем</li>
                    <li className="list-disc">онлайн-сервисов</li>
                    <li className="list-disc">сложных веб-платформ</li>
                </ul>
                <p className="py-3">React обеспечивает высокую скорость работы и гибкость интерфейса.</p>
                <h2 className="text-2xl font-black">Разработка сайтов в Тольятти</h2>
                <p className="py-3">Я предоставляю услуги разработки сайтов в Тольятти, а также работаю с клиентами по всей России. Локальное SEO и понимание регионального рынка позволяют создавать сайты, которые эффективно продвигаются по геозапросам и привлекают клиентов из нужного региона.</p>
                <h2 className="text-2xl font-black">Интеграции с CRM и автоматизация</h2>
                <p className="py-3">Современный сайт должен не только привлекать посетителей, но и автоматически обрабатывать заявки. Поэтому я выполняю интеграции с CRM, включая:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">AmoCRM</li>
                    <li className="list-disc">Bitrix24</li>
                    <li className="list-disc">Telegram уведомления</li>
                    <li className="list-disc">VK и другие каналы</li>
                </ul>
                <p className="py-3">Все заявки с сайта автоматически попадают в систему учета, что ускоряет обработку клиентов и повышает продажи.</p>
                <h2 className="text-2xl font-black">SEO-оптимизация сайтов</h2>
                <p className="py-3">Важной частью услуг является SEO-оптимизация сайта. Без нее даже хороший сайт не приносит клиентов.</p>
                <p className="py-3">SEO включает:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">техническую оптимизацию сайта</li>
                    <li className="list-disc">настройку метатегов Title и Description</li>
                    <li className="list-disc">сбор семантического ядра</li>
                    <li className="list-disc">оптимизацию скорости загрузки</li>
                    <li className="list-disc">внутреннюю перелинковку</li>
                    <li className="list-disc">подготовку к продвижению в Яндекс и Google</li>
                </ul>
                <p className="py-3">Грамотная SEO оптимизация сайта позволяет вывести сайт в топ поисковой выдачи и получать стабильный поток клиентов без рекламы.</p>
                <h2 className="text-2xl font-black">Техническая поддержка и развитие</h2>
                <p className="py-3">После запуска сайт требует постоянного сопровождения. Я предоставляю техническую поддержку сайта, которая включает:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">обновление функционала</li>
                    <li className="list-disc">устранение ошибок</li>
                    <li className="list-disc">ускорение загрузки</li>
                    <li className="list-disc">развитие после запуска</li>
                    <li className="list-disc">резервное копирование</li>
                </ul>
                <p className="py-3">Регулярное развитие сайта позволяет сохранять его эффективность и улучшать результаты.</p>
                <h2 className="text-2xl font-black">Почему выбирают меня</h2>
                <p className="py-3">Я работаю как самостоятельный разработчик, без посредников и менеджеров. Это означает:</p>
                <ul className="ml-[30px]">
                    <li className="list-disc">прямое общение</li>
                    <li className="list-disc">быстрые решения</li>
                    <li className="list-disc">ответственность за результат</li>
                    <li className="list-disc">глубокое понимание проекта</li>
                </ul>
                <p className="py-3">Каждый сайт создается вручную, с учетом задач бизнеса и целей продвижения.</p>
                <p className="py-3">Если вам нужна разработка сайтов под ключ, создание сайтов, SEO-оптимизация сайта, разработка сайтов на Bitrix или React, или интеграции с CRM — я помогу реализовать проект, который будет приносить результат и развивать ваш бизнес в интернете.</p>
            </div>
        </section>

        {/*
        <section className="mx-auto mt-20 max-w-7xl">
            <div className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                    Стоимость
                </span>

                <h2 className="mt-3 text-5xl font-black text-white">
                    Сколько стоит разработка
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                    Выберите подходящий вариант. Если не уверены —
                    помогу подобрать решение под ваши задачи.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">

                    START
                <div className="group rounded-[32px] border border-white/10 bg-[#171A26] p-8 transition hover:border-cyan-400/50 hover:-translate-y-1">

                    <div className="mb-8 flex items-center justify-between">
                        <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                            Старт
                        </span>

                        <span className="text-zinc-500">
                            от
                        </span>
                    </div>

                    <h3 className="text-5xl font-black text-white">
                        35
                        <span className="text-2xl"> 000 ₽</span>
                    </h3>

                    <p className="mt-5 text-zinc-400">
                        Одностраничный лендинг
                        под рекламу или презентацию услуги.
                    </p>

                    <ul className="mt-8 space-y-3 text-zinc-300">

                        <li>✓ До 10 экранов</li>
                        <li>✓ Адаптив</li>
                        <li>✓ Базовое SEO</li>
                        <li>✓ Форма заявки</li>

                    </ul>

                    <button
                        className="mt-10 w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black transition hover:bg-cyan-300">
                        Заказать услугу
                    </button>

                </div>

                BUSINESS

                <div className="relative rounded-[32px] border border-cyan-400 bg-[#1A2030] p-8">

                    <div className="absolute right-6 top-6 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                        Популярно
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        Бизнес
                    </span>

                    <h3 className="mt-8 text-5xl font-black text-white">
                        75
                        <span className="text-2xl"> 000 ₽</span>
                    </h3>

                    <p className="mt-5 text-zinc-300">
                        Полноценный сайт компании
                        с SEO и заявками.
                    </p>

                    <ul className="mt-8 space-y-3 text-zinc-300">

                        <li>✓ До 20 страниц</li>
                        <li>✓ CMS</li>
                        <li>✓ SEO структура</li>
                        <li>✓ Telegram уведомления</li>
                        <li>✓ Карта сайта</li>

                    </ul>

                    <button className="mt-10 w-full rounded-2xl bg-cyan-400 py-4 font-semibold text-black">
                        Заказать услугу
                    </button>

                </div>

                PRO

                <div className="rounded-[32px] border border-white/10 bg-[#171A26] p-8">

                    <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        Pro
                    </span>

                    <h3 className="mt-8 text-5xl font-black text-white">
                        140
                        <span className="text-2xl"> 000 ₽</span>
                    </h3>

                    <p className="mt-5 text-zinc-400">
                        Интернет-магазин или
                        сложный корпоративный проект.
                    </p>

                    <ul className="mt-8 space-y-3 text-zinc-300">

                        <li>✓ Каталог</li>
                        <li>✓ Фильтры</li>
                        <li>✓ CRM</li>
                        <li>✓ Интеграции</li>
                        <li>✓ Аналитика</li>

                    </ul>

                    <button className="mt-10 w-full rounded-2xl border border-cyan-400 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black">
                        Заказать услугу
                    </button>

                </div>

                CUSTOM

                <div className="rounded-[32px] border border-dashed border-cyan-400/40 bg-[#121520] p-8">

                    <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        Индивидуально
                    </span>

                    <h3 className="mt-8 text-4xl font-black text-white">
                        По запросу
                    </h3>

                    <p className="mt-5 text-zinc-400">
                        Если проект не подходит
                        под стандартные тарифы.
                    </p>

                    <button className="mt-10 w-full rounded-2xl border border-cyan-400 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black">
                        Обсудить проект
                    </button>

                </div>

            </div>
        </section>
        */}
    </main>
  );
}