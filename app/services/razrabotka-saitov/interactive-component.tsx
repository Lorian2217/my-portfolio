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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Разработка сайтов под ключ для бизнеса, SEO и рекламы</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Создаю сайты, которые помогают объяснить услугу, собрать заявки и подготовить проект к поисковому продвижению. В работе учитываются структура, скорость, адаптивность, формы, аналитика и дальнейшее развитие.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Когда нужна разработка сайта</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Когда нужна разработка сайта</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Новый сайт нужен не только для красивой картинки. Он нужен, когда бизнесу важно нормально объяснить услугу, собрать заявки, запустить рекламу, показать кейсы и получить понятную основу для SEO-продвижения.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нужна понятная витрина бизнеса</h3>
                        <p className="mt-4 leading-7 text-slate-300">Сайт показывает услуги, преимущества, цены, проекты, процесс работы, ответы на вопросы и контакты.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Планируется запуск рекламы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Страница строится вокруг оффера, доверия, CTA, форм и отслеживания заявок.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Нужно SEO-продвижение</h3>
                        <p className="mt-4 leading-7 text-slate-300">Сразу закладываются посадочные блоки, заголовки, мета-теги, перелинковка и техническая база.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что входит в разработку</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что входит в разработку</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Состав работ зависит от задачи, но базово сайт должен быть удобен для клиента, понятен поисковым системам и не создавать проблем при дальнейшем развитии.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Прототип и структура</h3>
                        <p className="mt-4 leading-7 text-slate-300">Сначала собирается логика страницы: какие блоки нужны, что показывать выше, где размещать формы и как закрывать возражения.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Адаптивная верстка</h3>
                        <p className="mt-4 leading-7 text-slate-300">Страницы корректно работают на телефонах, планшетах и десктопах.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">SEO-подготовка</h3>
                        <p className="mt-4 leading-7 text-slate-300">Добавляются title, description, H1-H3, Open Graph, schema.org, sitemap, robots и базовая внутренняя перелинковка.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Формы и интеграции</h3>
                        <p className="mt-4 leading-7 text-slate-300">Заявки можно отправлять на почту, в Telegram, CRM или другую систему.</p>
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Сколько времени занимает разработка сайта?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Сроки зависят от объема работ и сложности функционала. Небольшой сайт может быть готов за 1–3 недели, корпоративный проект — за 1–2 месяца, а крупные веб-сервисы разрабатываются по индивидуальному графику. Перед началом работ согласовывается подробный план реализации.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Сколько стоит разработка сайта?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость разработки зависит от типа сайта, количества страниц, необходимого функционала, интеграций и требований к дизайну. После обсуждения проекта я подготавливаю детальную оценку с фиксированным перечнем работ, чтобы вы заранее понимали бюджет и сроки реализации.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">От чего зависит итоговая цена сайта?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">На стоимость влияют сложность дизайна, наличие личного кабинета, форм обратной связи, интеграций с CRM, платежными системами, каталогами товаров и другими сервисами. Чем больше нестандартного функционала требуется, тем выше объем работ и итоговая стоимость проекта.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли разработать сайт в рамках ограниченного бюджета?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Если бюджет ограничен, можно начать с минимально необходимого функционала и постепенно расширять возможности сайта по мере роста бизнеса. Такой подход позволяет быстрее запустить проект и распределить расходы во времени.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Почему не стоит выбирать разработку только по самой низкой цене?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Слишком низкая стоимость часто означает использование шаблонных решений без учета задач бизнеса, отсутствие технической поддержки и проблемы с дальнейшим развитием проекта. Качественный сайт — это инвестиция, которая должна привлекать клиентов, а не создавать дополнительные расходы на переделку.</p>
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
                <p className="py-3">Разработка сайтов под ключ — это возможность получить современный инструмент для привлечения клиентов, роста продаж и развития бизнеса в интернете. Я занимаюсь разработкой сайтов для компаний, предпринимателей и экспертов, создавая проекты, которые помогают решать реальные бизнес-задачи и получать стабильные заявки с сайта.</p>
                <p className="py-3">Каждый проект начинается с анализа вашей ниши, целевой аудитории и конкурентов. Такой подход позволяет создать структуру сайта, которая будет понятна пользователям и эффективна с точки зрения продаж. В процессе работы я уделяю внимание не только внешнему виду ресурса, но и его функциональности, удобству использования и поисковой оптимизации.</p>
                <p className="py-3">Профессиональное создание сайтов включает разработку структуры, дизайн, адаптивную верстку, настройку необходимых форм обратной связи, интеграцию сторонних сервисов и базовую SEO-подготовку. Сайт корректно отображается на компьютерах, планшетах и мобильных устройствах, обеспечивая комфортное взаимодействие для каждого посетителя.</p>
                <p className="py-3">Особое внимание уделяется скорости загрузки страниц, безопасности и технической стабильности проекта. Современный сайт должен быстро работать, легко масштабироваться и соответствовать требованиям поисковых систем. Именно поэтому разработка сайтов под ключ предполагает комплексный подход к каждому этапу создания ресурса.</p>
                <p className="py-3">Я разрабатываю корпоративные сайты, лендинги, каталоги продукции, интернет-магазины и другие веб-проекты различной сложности. Главная цель — создать эффективный инструмент, который будет помогать бизнесу привлекать новых клиентов и увеличивать количество заявок с сайта.</p>
                <p className="py-3">После запуска работа над проектом не заканчивается. Для достижения максимального результата важно регулярное развитие сайта, включающее обновление контента, улучшение функционала, оптимизацию скорости работы и внедрение новых возможностей. Постоянное совершенствование ресурса помогает сохранять конкурентоспособность и улучшать позиции в поисковой выдаче.</p>
                <p className="py-3">Заказывая создание сайтов, вы получаете индивидуальный подход, прямое взаимодействие с разработчиком и полный контроль над всеми этапами работы. Я лично отвечаю за качество реализации проекта и стремлюсь создавать решения, которые приносят бизнесу реальную пользу. Грамотная разработка сайтов позволяет сформировать сильное присутствие компании в интернете, повысить доверие клиентов и обеспечить долгосрочное развитие сайта как эффективного канала привлечения новых заказчиков.</p>
            </div>
        </section>
    </main>
  );
}