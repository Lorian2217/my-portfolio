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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Разработка и доработка сайтов на 1C-Bitrix и CMS</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Помогаю дорабатывать корпоративные сайты, каталоги, интернет-магазины и сервисные страницы на CMS. Можно исправить ошибки, добавить блоки, обновить шаблоны, подключить формы, CRM и SEO-правки.</p>
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
                            <p className="mt-2 text-sm text-slate-400">Tailwind, адаптив и аккуратные компоненты.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Когда нужна доработка CMS</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Когда нужна доработка CMS</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Готовый сайт часто требует не полного редизайна, а точечных технических работ: поправить шаблон, добавить раздел, ускорить страницы, исправить формы или внедрить SEO-задачи.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Сайт работает, но устарел</h3>
                        <p className="mt-4 leading-7 text-slate-300">Можно обновить блоки, мобильную версию, формы и коммерческую структуру без полного перезапуска.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нужны новые разделы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Услуги, кейсы, FAQ, блог, посадочные страницы и новые элементы навигации.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Есть SEO-ТЗ</h3>
                        <p className="mt-4 leading-7 text-slate-300">Можно внедрить мета-теги, заголовки, микроразметку, хлебные крошки, перелинковку и технические правки.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что можно сделать на Bitrix и CMS</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что можно сделать на Bitrix и CMS</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Работы могут быть как разовыми, так и регулярными в формате технической поддержки.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Доработка шаблонов</h3>
                        <p className="mt-4 leading-7 text-slate-300">Исправление верстки, адаптива, карточек, списков, форм и элементов интерфейса.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Компоненты и разделы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Добавление новых блоков, страниц, фильтров, карточек, форм и логики вывода.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">SEO-внедрение</h3>
                        <p className="mt-4 leading-7 text-slate-300">Правки по title, description, H1, ЧПУ, schema.org, sitemap, robots и индексируемости.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Интеграции</h3>
                        <p className="mt-4 leading-7 text-slate-300">Подключение CRM, почты, уведомлений, счетчиков, целей и внешних сервисов.</p>
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Почему стоит выбрать 1С-Битрикс для разработки сайта?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">1С-Битрикс — одна из самых популярных CMS для бизнеса в России. Платформа подходит для корпоративных сайтов, интернет-магазинов и B2B-порталов, поддерживает интеграцию с 1С, CRM-системами и маркетплейсами, а также предоставляет широкие возможности для масштабирования проекта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Сколько стоит разработка сайта на 1С-Битрикс?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от сложности проекта, выбранной редакции Битрикс, дизайна, количества интеграций и необходимого функционала. После анализа требований я подготавливаю подробную смету, в которой отдельно указываются стоимость разработки и лицензии, если она требуется.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Нужно ли покупать лицензию 1С-Битрикс?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да, для работы сайта необходима лицензия. Стоимость зависит от выбранной редакции и задач проекта. Если у вас уже есть действующая лицензия, её можно использовать при разработке или доработке сайта. Я помогу подобрать оптимальный вариант и выполнить установку системы.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли интегрировать сайт с 1С и другими сервисами?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Возможна настройка обмена данными с 1С, CRM-системами, службами доставки, платёжными сервисами, маркетплейсами и другими внешними платформами. Это позволяет автоматизировать бизнес-процессы и сократить количество ручной работы.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Занимаетесь ли вы поддержкой и доработкой существующих сайтов на Битрикс?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Выполняю аудит проекта, исправление ошибок, обновление системы, оптимизацию производительности, настройку безопасности, разработку новых модулей и доработку существующего функционала. Также возможна долгосрочная техническая поддержка сайта.</p>
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
                <p className="py-3">Разработка и доработка сайтов на 1C-Bitrix — востребованная услуга для компаний, которым необходим надежный, безопасный и масштабируемый веб-ресурс. Платформа 1C-Bitrix CMS уже много лет остается одним из самых популярных решений для создания корпоративных сайтов, интернет-магазинов, каталогов продукции и сложных веб-проектов. Благодаря широкому набору встроенных инструментов и высокой производительности система позволяет реализовывать проекты практически любого уровня сложности и обеспечивает стабильную работу даже при значительных нагрузках.</p>
                <p className="py-3">Я занимаюсь разработкой и доработкой сайтов на 1C-Bitrix, помогая бизнесу создавать современные цифровые решения, которые соответствуют требованиям пользователей и поисковых систем. Независимо от того, требуется ли запуск нового проекта с нуля или модернизация существующего ресурса, работа строится с учетом целей бизнеса, особенностей отрасли и перспектив дальнейшего развития сайта.</p>
                <p className="py-3">Современные сайты на 1C-Bitrix отличаются высокой надежностью, гибкостью настроек и широкими возможностями интеграции. Платформа позволяет подключать CRM-системы, платежные сервисы, системы аналитики, службы доставки и различные внешние сервисы, что делает ее оптимальным решением для компаний, заинтересованных в автоматизации бизнес-процессов. Благодаря регулярным обновлениям и встроенным инструментам безопасности 1C-Bitrix CMS обеспечивает защиту данных и стабильную работу ресурса.</p>
                <p className="py-3">Разработка проекта начинается с детального анализа задач бизнеса и определения требований к функционалу будущего сайта. На этом этапе формируется структура ресурса, продумываются пользовательские сценарии и выбираются оптимальные технические решения. Такой подход позволяет создавать сайты, которые не только выглядят современно, но и эффективно решают коммерческие задачи.</p>
                <p className="py-3">Я разрабатываю корпоративные сайты, которые помогают компаниям формировать профессиональный имидж в интернете, привлекать новых клиентов и предоставлять пользователям актуальную информацию о продуктах и услугах. Корпоративный сайт может включать в себя каталог продукции, новости компании, личные кабинеты пользователей, формы обратной связи и другие функциональные элементы, необходимые для эффективной работы бизнеса.</p>
                <p className="py-3">Также выполняется создание и развитие каталогов товаров и услуг. Такие проекты особенно востребованы среди производителей, поставщиков и организаций с большим ассортиментом продукции. Грамотно реализованный каталог позволяет удобно структурировать информацию, облегчает поиск нужных товаров и помогает пользователям быстрее принимать решение о покупке или сотрудничестве.</p>
                <p className="py-3">Отдельным направлением является разработка и сопровождение интернет-магазинов на платформе 1C-Bitrix. Возможности системы позволяют создавать полноценные торговые площадки с каталогами товаров, корзиной, системой оформления заказов, интеграцией с платежными системами и службами доставки. При необходимости реализуется обмен данными с программами учета, включая продукты 1С, что существенно упрощает управление ассортиментом и обработку заказов.</p>
                <p className="py-3">Помимо создания новых проектов, я выполняю профессиональную доработку сайтов на 1C-Bitrix. Часто владельцы ресурсов сталкиваются с необходимостью расширения функционала, повышения производительности или обновления устаревших компонентов системы. В таких случаях выполняется анализ текущего состояния проекта и разрабатываются решения, позволяющие улучшить работу сайта без необходимости полного переработки ресурса.</p>
                <p className="py-3">Доработка может включать создание новых модулей, изменение структуры сайта, внедрение дополнительного функционала, настройку интеграций с внешними сервисами, исправление технических ошибок и оптимизацию существующего кода. Такой подход позволяет постепенно развивать проект и адаптировать его под изменяющиеся задачи бизнеса.</p>
                <p className="py-3">Особое внимание уделяется производительности ресурса. Скорость загрузки страниц напрямую влияет на пользовательский опыт, конверсию и позиции сайта в поисковой выдаче. Поэтому в процессе работы выполняется оптимизация запросов к базе данных, настройка кеширования, сокращение объема передаваемых данных и другие мероприятия, направленные на ускорение работы сайта.</p>
                <p className="py-3">Важной частью работы является техническая оптимизация для поисковых систем. Сайты на 1C-Bitrix обладают широкими возможностями для SEO-продвижения, однако для достижения максимального результата необходима правильная настройка структуры страниц, метатегов, редиректов, карты сайта и других технических параметров. Грамотная подготовка ресурса помогает улучшить индексацию и повысить его видимость в поисковой выдаче.</p>
                <p className="py-3">Одним из преимуществ сотрудничества со мной является персональный подход к каждому проекту. Вы напрямую взаимодействуете с разработчиком, который занимается всеми этапами работы — от анализа требований до запуска и дальнейшей поддержки ресурса. Такой формат позволяет оперативно решать возникающие вопросы, избегать недопонимания и обеспечивать высокий уровень контроля качества.</p>
                <p className="py-3">Заказывая разработку и доработку сайтов на 1C-Bitrix, вы получаете надежное решение, адаптированное под задачи вашего бизнеса. Независимо от того, нужен ли вам новый корпоративный сайт, функциональный каталог продукции или современный интернет-магазин, возможности 1C-Bitrix CMS позволяют реализовать проект любого масштаба. Грамотно разработанный ресурс становится эффективным инструментом привлечения клиентов, автоматизации процессов и развития компании в интернете, а регулярное развитие и техническое сопровождение помогают сохранять его актуальность и конкурентоспособность на протяжении многих лет.</p>
            </div>
        </section>
    </main>
  );
}