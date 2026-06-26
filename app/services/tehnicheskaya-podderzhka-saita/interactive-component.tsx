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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Техническая поддержка и развитие сайта</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Сайт после запуска требует регулярных правок: исправить ошибку, добавить блок, внедрить SEO-ТЗ, настроить форму, ускорить страницу, подключить сервис или подготовить посадочную под рекламу.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Когда нужна поддержка сайта</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Когда нужна поддержка сайта</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Поддержка нужна, если сайт уже работает, но постоянно появляются задачи, которые нельзя откладывать или отдавать случайным исполнителям.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Ошибки и баги</h3>
                        <p className="mt-4 leading-7 text-slate-300">Формы не отправляются, блоки ломаются, мобильная версия съезжает, страницы грузятся медленно.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Регулярные доработки</h3>
                        <p className="mt-4 leading-7 text-slate-300">Новые блоки, услуги, акции, кейсы, формы, виджеты, страницы и интеграции.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">SEO-задачи</h3>
                        <p className="mt-4 leading-7 text-slate-300">Внедрение правок по ТЗ: мета-теги, заголовки, schema.org, скорость, индексация и перелинковка.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что входит в поддержку</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что входит в поддержку</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Формат можно настроить под задачи: разовые работы, пакет часов или регулярное сопровождение.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Технические исправления</h3>
                        <p className="mt-4 leading-7 text-slate-300">Ошибки верстки, JavaScript, PHP, CMS, форм, компонентов и отображения.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Развитие сайта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Добавление новых страниц, блоков, разделов, элементов и сценариев.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Контроль стабильности</h3>
                        <p className="mt-4 leading-7 text-slate-300">Проверка форм, мобильной версии, скорости, базовых ошибок и критичных страниц.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Интеграции</h3>
                        <p className="mt-4 leading-7 text-slate-300">CRM, Telegram, почта, аналитика, цели, пиксели и внешние сервисы.</p>
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Что входит в техническую поддержку сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Техническая поддержка включает мониторинг работоспособности сайта, обновление CMS и модулей, резервное копирование, устранение ошибок, защиту от уязвимостей, контроль доступности ресурса и выполнение небольших доработок по запросу клиента.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Сколько стоит техническая поддержка сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от сложности проекта, используемой CMS, объема работ и необходимой скорости реагирования. Возможны как разовые услуги по исправлению ошибок, так и ежемесячное сопровождение сайта по фиксированному тарифу.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Что делать, если сайт перестал работать или возникла ошибка?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">В случае возникновения технических проблем проводится диагностика проекта, поиск причины сбоя и оперативное восстановление работоспособности сайта. Чем раньше проблема будет обнаружена, тем меньше риск потери клиентов и данных.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Нужна ли техническая поддержка, если сайт уже работает без ошибок?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Даже стабильно работающий сайт требует регулярных обновлений, проверки безопасности, резервного копирования и контроля производительности. Это помогает предотвратить взломы, сбои и проблемы после обновления серверного программного обеспечения.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Поддерживаете ли вы сайты, разработанные другими специалистами?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Можно передать на сопровождение уже существующий проект независимо от того, кто его разрабатывал. Перед началом работ проводится аудит сайта, после чего составляется план поддержки, оптимизации и дальнейшего развития проекта.</p>
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
                <p className="py-3">Техническая поддержка сайта — это комплекс работ, направленных на обеспечение стабильной, безопасной и эффективной работы веб-ресурса после его запуска. Многие владельцы бизнеса ошибочно считают, что после публикации сайта работа над проектом завершается. На практике любой современный сайт требует регулярного обслуживания, обновления и контроля технического состояния. Только в этом случае ресурс будет оставаться быстрым, безопасным и удобным для пользователей, а также соответствовать требованиям поисковых систем.</p>
                <p className="py-3">Я предоставляю услуги по техническому сопровождению и развитию сайтов, помогая владельцам бизнеса поддерживать работоспособность проектов и своевременно решать возникающие задачи. В отличие от крупных агентств, вы напрямую взаимодействуете с разработчиком, который знает особенности вашего проекта и лично отвечает за качество выполненных работ. Такой подход позволяет оперативно реагировать на любые изменения и быстро внедрять необходимые доработки.</p>
                <p className="py-3">Профессиональная техническая поддержка включает постоянный мониторинг состояния сайта, контроль работоспособности ключевых функций, обновление программного обеспечения и устранение технических ошибок. Даже незначительные сбои могут негативно повлиять на пользовательский опыт, позиции сайта в поисковых системах и количество обращений от клиентов. Регулярное обслуживание позволяет своевременно выявлять и устранять подобные проблемы до того, как они начнут влиять на эффективность ресурса.</p>
                <p className="py-3">Особое значение имеет безопасность проекта. Современные сайты постоянно подвергаются автоматизированным атакам, попыткам взлома и другим угрозам. В рамках технической поддержки выполняется установка обновлений системы управления сайтом, контроль безопасности, проверка уязвимостей и настройка резервного копирования данных. Это помогает защитить проект от потери информации и минимизировать риски, связанные с работой сайта.</p>
                <p className="py-3">Важным направлением сопровождения является развитие сайта. Бизнес развивается, появляются новые услуги, меняются потребности клиентов и требования рынка. Сайт должен адаптироваться к этим изменениям и оставаться актуальным инструментом для привлечения клиентов. В процессе развития могут добавляться новые разделы, внедряться дополнительные функции, изменяться структура страниц и улучшаться пользовательский интерфейс.</p>
                <p className="py-3">Особое внимание уделяется направлению развитие после запуска. После начала работы проекта появляется возможность анализировать поведение посетителей, оценивать эффективность отдельных страниц и выявлять точки роста. На основе собранных данных можно принимать решения по улучшению структуры сайта, повышению удобства использования и увеличению конверсии. Такой подход позволяет постепенно превращать сайт в более эффективный инструмент для решения бизнес-зач.</p>
                <p className="py-3">Одним из важных факторов успешной работы ресурса является скорость его загрузки. Медленные сайты теряют посетителей, получают более низкие позиции в поисковой выдаче и снижают эффективность рекламных кампаний. Поэтому в рамках сопровождения регулярно выполняется ускорение загрузки страниц. Для этого проводится анализ производительности, оптимизируются изображения, настраивается кеширование, устраняются лишние запросы и улучшается работа серверной части проекта.</p>
                <p className="py-3">Кроме повышения скорости, выполняется техническая оптимизация сайта, которая направлена на улучшение общей производительности и стабильности работы ресурса. В зависимости от задач проекта это может включать рефакторинг кода, оптимизацию базы данных, настройку серверного окружения, исправление ошибок в работе модулей и внедрение новых технических решений. Грамотная оптимизация помогает снизить нагрузку на сервер и обеспечить стабильную работу сайта даже при увеличении посещаемости.</p>
                <p className="py-3">Регулярная оптимизация сайта также положительно влияет на поисковое продвижение. Поисковые системы учитывают множество технических факторов, включая скорость загрузки, корректность работы мобильной версии, безопасность соединения и отсутствие ошибок на страницах. Поддержание ресурса в технически исправном состоянии помогает улучшить индексацию и повысить его видимость в результатах поиска.</p>
                <p className="py-3">В рамках технической поддержки выполняются резервное копирование данных, контроль доступности сайта, настройка домена и хостинга, обновление CMS, исправление возникающих ошибок, подключение дополнительных сервисов и реализация новых функций по мере необходимости. Такой комплексный подход позволяет владельцу бизнеса сосредоточиться на развитии компании, не отвлекаясь на технические вопросы.</p>
                <p className="py-3">Одним из преимуществ работы со мной является долгосрочное сопровождение проекта. Я не просто устраняю отдельные ошибки, а помогаю планомерно развивать ресурс, учитывая цели бизнеса и реальные потребности пользователей. Благодаря этому сайт остается актуальным, конкурентоспособным и продолжает эффективно выполнять свои задачи даже спустя годы после запуска.</p>
                <p className="py-3">Профессиональная техническая поддержка — это инвестиция в стабильность и развитие вашего онлайн-проекта. Регулярное обслуживание, своевременное развитие сайта, качественное развитие после запуска, постоянное ускорение загрузки и грамотная оптимизация сайта помогают поддерживать высокую эффективность ресурса, улучшать пользовательский опыт и обеспечивать устойчивый рост бизнеса в интернете.</p>
            </div>
        </section>
    </main>
  );
}