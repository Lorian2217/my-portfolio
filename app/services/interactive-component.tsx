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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Карта услуг</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Раздел услуг как SEO-хаб</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Услуги, которые я могу вам предложить. * Рядом с услугой означает, что она в ещё в разработке</p>
                    {/* <p className="mt-5 text-lg leading-8 text-slate-300">Такой раздел собирает все коммерческие направления и передает вес на посадочные страницы. Пользователю проще выбрать нужную задачу, а поиску - понять структуру сайта.</p> */}
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Разработка сайтов</h3>
                        <p className="mt-4 leading-7 text-slate-300">Сайт под бизнес-задачи, SEO и заявки</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Лендинг под рекламу</h3>
                        <p className="mt-4 leading-7 text-slate-300">Посадочная страница для Яндекс Директ и таргета</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">*React и Next.js</h3>
                        <p className="mt-4 leading-7 text-slate-300">Интерфейсы, веб-приложения и быстрые страницы</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">1C-Bitrix и CMS</h3>
                        <p className="mt-4 leading-7 text-slate-300">Корпоративные сайты, каталоги и доработки</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Верстка сайта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Адаптивная верстка по Figma</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Техподдержка сайта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Исправления, развитие и регулярные доработки</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">SEO-оптимизация</h3>
                        <p className="mt-4 leading-7 text-slate-300">Технические правки, структура и индексация</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Интеграции CRM</h3>
                        <p className="mt-4 leading-7 text-slate-300">Формы, заявки, аналитика и уведомления</p>
                    </article>
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

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">FAQ</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Частые вопросы</h2>
                </div>
                <div className="mt-12 space-y-4">
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Что нужно для старта работы?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Ссылка на сайт или макет, краткое описание задачи, список нужных страниц, желаемые сроки и понимание, какой результат важнее: заявки, SEO, запуск рекламы, скорость или поддержка.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли доработать текущий сайт?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Можно исправить ошибки, улучшить мобильную версию, добавить новые блоки, подключить формы, внедрить SEO-правки, ускорить загрузку и настроить аналитику.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли подключить Яндекс Метрику и цели?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Для форм, кнопок, кликов по контактам, открытия модальных окон и отправки заявок можно настроить события, которые пригодятся для рекламы и аналитики.</p>
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
    </main>
  );
}