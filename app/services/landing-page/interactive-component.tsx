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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Разработка лендинга под рекламу и заявки</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Лендинг должен быстро объяснять предложение, вести пользователя к заявке и давать рекламной кампании нормальную посадочную страницу. Поэтому важны не только дизайн, но и структура, оффер, доверие, формы и аналитика.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Зачем нужен отдельный лендинг</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Зачем нужен отдельный лендинг</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Не всегда стоит вести рекламу на главную страницу. Если пользователь пришел по конкретному запросу, ему нужна страница с точным ответом, понятной выгодой и быстрым способом оставить заявку.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Точный оффер</h3>
                        <p className="mt-4 leading-7 text-slate-300">Первый экран сразу отвечает, что предлагается, для кого и почему стоит обратиться.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Конверсионные блоки</h3>
                        <p className="mt-4 leading-7 text-slate-300">Преимущества, кейсы, тарифы, этапы, FAQ, гарантии и несколько CTA по странице.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Аналитика рекламы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Можно отслеживать отправку формы, клики по телефону, Telegram, открытие модального окна и другие события.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что входит в лендинг</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что входит в лендинг</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Страница собирается как короткая воронка: внимание, понимание, доверие, снятие возражений и заявка.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Первый экран</h3>
                        <p className="mt-4 leading-7 text-slate-300">Оффер, подзаголовок, основные выгоды и кнопка заявки без лишней абстракции.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Блоки доверия</h3>
                        <p className="mt-4 leading-7 text-slate-300">Проекты, опыт, стек, отзывы, кейсы или понятные доказательства компетенции.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Форма или квиз</h3>
                        <p className="mt-4 leading-7 text-slate-300">Пользователь может оставить заявку сразу или пройти короткий сценарий уточнения задачи.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Подготовка к рекламе</h3>
                        <p className="mt-4 leading-7 text-slate-300">Цели, события, корректные кнопки, UTM-логика и ясная посадочная структура.</p>
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Чем лендинг отличается от обычного сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Лендинг — это одностраничный сайт, созданный для достижения одной конкретной цели: продажи товара, сбора заявок, записи на услугу или презентации продукта. В отличие от многостраничного сайта, лендинг концентрирует внимание посетителя на целевом действии и помогает повысить конверсию.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Сколько стоит разработка лендинга?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от сложности дизайна, объема контента, необходимости написания текстов, настройки аналитики и дополнительных интеграций. После обсуждения проекта я подготавливаю индивидуальное коммерческое предложение с прозрачным расчетом стоимости и сроков.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>За какой срок можно создать лендинг?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">В большинстве случаев разработка лендинга занимает от нескольких дней до нескольких недель. Точные сроки зависят от готовности материалов, сложности дизайна и требуемого функционала. Перед началом работ согласовывается подробный план реализации проекта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Будет ли лендинг приносить заявки сразу после запуска?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Эффективность лендинга зависит не только от разработки, но и от качества рекламного трафика, конкурентности ниши и привлекательности предложения. При создании страницы используются современные принципы UX/UI-дизайна и маркетинга, чтобы максимально увеличить вероятность получения заявок и продаж.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><h3>Можно ли в будущем расширить лендинг до полноценного сайта?</h3><span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. При необходимости лендинг может стать основой для дальнейшего развития проекта. В будущем можно добавить новые страницы, блог, каталог услуг, интернет-магазин или личный кабинет без полного создания сайта с нуля.</p>
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
                <p className="py-3">Разработка лендинга — один из самых эффективных способов быстро привлечь клиентов, протестировать спрос на продукт или услугу и получить максимальную отдачу от рекламного бюджета. В отличие от многостраничных сайтов, лендинг создается для решения конкретной задачи: сбора заявок, продажи товара, записи на услугу или привлечения потенциальных клиентов. Именно поэтому качественно разработанная посадочная страница способна значительно повысить конверсию и увеличить количество обращений уже с первых дней после запуска.</p>
                <p className="py-3">Я занимаюсь разработкой лендинга под рекламу для бизнеса, предпринимателей и специалистов, которым важно получать реальные результаты от интернет-маркетинга. Каждый проект создается индивидуально, без использования шаблонных решений и универсальных схем. Перед началом работы я анализирую нишу, целевую аудиторию, конкурентов и рекламные каналы, чтобы будущий лендинг максимально соответствовал задачам бизнеса и ожиданиям потенциальных клиентов.</p>
                <p className="py-3">Многие заказчики задаются вопросом: что входит в лендинг и почему стоимость качественной разработки отличается от создания типовой страницы на конструкторе. На практике эффективный лендинг состоит из множества элементов, каждый из которых влияет на итоговую конверсию. Работа начинается с анализа продукта или услуги, изучения преимуществ компании и определения потребностей целевой аудитории. На основе этой информации формируется структура страницы, которая последовательно ведет посетителя к целевому действию.</p>
                <p className="py-3">После подготовки структуры создается уникальный дизайн, отражающий особенности бизнеса и повышающий доверие пользователей. Далее выполняется адаптивная верстка, благодаря которой лендинг корректно отображается на компьютерах, планшетах и мобильных устройствах. Также настраиваются формы обратной связи, кнопки захвата заявок, системы аналитики, цели для рекламных кампаний и другие инструменты, необходимые для эффективной работы проекта.</p>
                <p className="py-3">Если говорить подробнее о том, что входит в лендинг, то обычно в разработку включаются анализ конкурентов, проектирование структуры, написание рекомендаций по контенту, создание дизайна, верстка, программирование функционала, подключение аналитики, настройка форм обратной связи, базовая SEO-оптимизация и техническая подготовка страницы к запуску рекламных кампаний. При необходимости дополнительно выполняется интеграция с CRM-системами, мессенджерами и сервисами автоматизации продаж.</p>
                <p className="py-3">Особое внимание я уделяю скорости загрузки страниц и техническому качеству проекта. Даже самый красивый лендинг может терять клиентов, если он медленно открывается или неудобен для пользователей мобильных устройств. Поэтому каждая страница проходит оптимизацию производительности и тестирование перед запуском. Это позволяет улучшить пользовательский опыт и повысить эффективность рекламы.</p>
                <p className="py-3">Среди главных преимуществ лендинга стоит отметить высокую конверсию, возможность точечно работать с определенной аудиторией и быстро запускать рекламные кампании. Лендинг концентрирует внимание посетителя на одном предложении и не отвлекает его лишней информацией. Благодаря этому значительно возрастает вероятность того, что пользователь оставит заявку или выполнит другое целевое действие.</p>
                <p className="py-3">Еще одно важное преимущество — возможность оперативно анализировать результаты рекламы. Лендинг легко интегрируется с системами веб-аналитики, что позволяет отслеживать источники трафика, поведение пользователей и эффективность каждого рекламного канала. На основе этих данных можно своевременно вносить изменения и повышать конверсию страницы.</p>
                <p className="py-3">Современная разработка лендинга под рекламу предполагает не только создание привлекательного дизайна, но и глубокую проработку маркетинговой составляющей. Важно правильно сформулировать предложение, выделить преимущества продукта, закрыть возможные возражения клиентов и выстроить логичную последовательность блоков. Именно сочетание маркетинга, дизайна и технической реализации позволяет создать действительно эффективный лендинг.</p>
                <p className="py-3">Работая над проектом самостоятельно, я контролирую каждый этап разработки и лично отвечаю за качество результата. Вы напрямую взаимодействуете с разработчиком без посредников, менеджеров и длительных согласований. Это позволяет быстрее принимать решения, учитывать пожелания заказчика и гибко адаптировать проект под конкретные задачи бизнеса.</p>
                <p className="py-3">Грамотно выполненная разработка лендинга помогает не просто создать красивую страницу в интернете, а получить полноценный инструмент для привлечения клиентов и увеличения продаж. Независимо от того, запускаете ли вы новый продукт, продвигаете услугу или масштабируете существующий бизнес, качественный лендинг способен стать важной частью вашей маркетинговой стратегии. Благодаря высокой конверсии, удобству аналитики и возможности постоянного улучшения страницы, преимущества лендинга делают его одним из самых востребованных инструментов интернет-маркетинга для современного бизнеса.</p>
            </div>
        </section>
    </main>
  );
}