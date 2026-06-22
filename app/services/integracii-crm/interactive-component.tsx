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
                    <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Интеграции сайта с CRM, Telegram, почтой и аналитикой</h1>
                    <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Заявка с сайта не должна теряться. Формы, кнопки и события можно связать с CRM, почтой, Telegram, Яндекс Метрикой и другими сервисами, чтобы бизнес видел обращения и понимал эффективность рекламы.</p>
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
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Зачем нужны интеграции</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Зачем нужны интеграции</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Без интеграций сайт часто работает как красивая визитка: пользователь оставил заявку, но она ушла непонятно куда, не попала в CRM или не отследилась в аналитике.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Заявки в одном месте</h3>
                        <p className="mt-4 leading-7 text-slate-300">Данные из форм можно отправлять в CRM, почту, Telegram или несколько каналов одновременно.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Контроль рекламы</h3>
                        <p className="mt-4 leading-7 text-slate-300">Отправки форм, клики по телефону и мессенджерам можно передавать в аналитику как цели.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Автоматизация рутины</h3>
                        <p className="mt-4 leading-7 text-slate-300">Менеджеру не нужно вручную переносить обращения и искать источник заявки.</p>
                    </article>
                </div>
            </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Что можно подключить</p>
                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что можно подключить</h2>
                    <p className="mt-5 text-lg leading-8 text-slate-300">Набор интеграций зависит от сайта и бизнес-процесса.</p>
                </div>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">CRM и заявки</h3>
                        <p className="mt-4 leading-7 text-slate-300">Передача имени, телефона, email, комментария, страницы и UTM-меток.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Telegram-уведомления</h3>
                        <p className="mt-4 leading-7 text-slate-300">Мгновенные сообщения о новых заявках в чат или личные сообщения.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Почта</h3>
                        <p className="mt-4 leading-7 text-slate-300">Отправка письма владельцу сайта и автоматического ответа пользователю.</p>
                    </article>
                    <article className="glass rounded-[2rem] p-7">
                        <h3 className="text-2xl font-black">Аналитика</h3>
                        <p className="mt-4 leading-7 text-slate-300">События для Яндекс Метрики, целей рекламы и анализа конверсий.</p>
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
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Какие CRM-системы можно интегрировать с сайтом?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Возможна интеграция с популярными CRM-системами, такими как Битрикс24, amoCRM, Мегаплан и другими решениями. Также можно настроить обмен данными с корпоративными CRM через API, если используется собственная система управления клиентами.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Что дает интеграция CRM с сайтом?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">После интеграции все заявки с сайта автоматически передаются в CRM, что исключает ручной ввод данных и снижает риск потери клиентов. Менеджеры получают обращения мгновенно, а руководство может отслеживать эффективность рекламных каналов и работу отдела продаж.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Сколько стоит интеграция CRM?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от используемой CRM-системы, количества форм на сайте, сложности бизнес-процессов и необходимости дополнительных доработок. Простая интеграция может быть выполнена быстро, а для нестандартных сценариев подготавливается индивидуальное решение.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Нужно ли менять существующий сайт для подключения CRM?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">В большинстве случаев нет. Интеграцию можно выполнить на уже работающем сайте независимо от используемой CMS или технологии разработки. При необходимости дополнительно настраиваются формы обратной связи, онлайн-чаты и другие точки сбора заявок.</p>
                    </details>
                    <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли автоматизировать не только заявки, но и другие процессы?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
                        <p className="mt-4 leading-7 text-slate-300">Да. Помимо передачи заявок, можно настроить автоматическое создание сделок, отправку уведомлений менеджерам, интеграцию с телефонией, почтой, мессенджерами, сервисами аналитики и другими бизнес-инструментами. Это позволяет значительно сократить рутинные операции и повысить эффективность работы компании.</p>
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
                <p className="py-3">Интеграции с CRM являются важным этапом автоматизации бизнес-процессов и позволяют значительно повысить эффективность работы компании. Современный сайт способен не только привлекать клиентов, но и автоматически передавать данные о новых обращениях в систему управления продажами. Благодаря этому все заявки с сайта сразу попадают в CRM, не теряются и оперативно обрабатываются ответственными сотрудниками. Такой подход помогает ускорить работу отдела продаж, повысить качество обслуживания клиентов и обеспечить полный контроль над каждым обращением.</p>
                <p className="py-3">Многие предприниматели задаются вопросом: зачем нужны интеграции и какую пользу они могут принести бизнесу. На практике интеграция сайта с CRM-системой позволяет объединить несколько каналов привлечения клиентов в единую систему управления. Все данные о заявках, звонках, сообщениях из мессенджеров и социальных сетей собираются в одном месте, что значительно упрощает работу с клиентами и делает процессы более прозрачными. Руководитель получает возможность контролировать эффективность рекламы, отслеживать работу менеджеров и анализировать результаты продаж на основе актуальных данных.</p>
                <p className="py-3">Я занимаюсь настройкой и разработкой интеграций с CRM для сайтов различной сложности. Работа начинается с анализа текущих бизнес-процессов и определения задач, которые должна решать интеграция. Для одних компаний достаточно автоматической передачи заявок в CRM, другим необходима двусторонняя синхронизация данных, интеграция с внутренними сервисами, телефонией или складскими системами. Индивидуальный подход позволяет реализовать решение, которое будет максимально полезным именно для вашего бизнеса.</p>
                <p className="py-3">Одним из наиболее востребованных решений является интеграция сайта с AmoCRM. Эта система пользуется большой популярностью благодаря удобному интерфейсу, широким возможностям автоматизации и гибкости настройки. Интеграция сайта с AmoCRM позволяет автоматически создавать сделки, передавать контактные данные клиентов, назначать ответственных менеджеров и запускать автоматические сценарии обработки обращений. В результате сокращается время реакции на заявки и повышается вероятность успешного завершения сделки.</p>
                <p className="py-3">Современные клиенты используют различные каналы связи, поэтому важной частью автоматизации становится подключение мессенджеров и социальных сетей. Я настраиваю интеграции сайта и CRM с такими популярными платформами, как Telegram, MAX и VK. Благодаря этому обращения из разных источников поступают в единую систему учета, где их можно удобно обрабатывать и контролировать. Менеджерам не приходится переключаться между несколькими сервисами, а вся история взаимодействия с клиентом сохраняется в CRM.</p>
                <p className="py-3">Интеграция с Telegram позволяет автоматически передавать сообщения пользователей в CRM, отправлять уведомления о новых заявках и организовывать быстрый обмен информацией между сотрудниками компании. Это особенно удобно для бизнеса, который активно использует мессенджеры для общения с клиентами и оперативного решения вопросов.</p>
                <p className="py-3">Подключение MAX помогает объединить современные каналы коммуникации в единую инфраструктуру и обеспечить централизованное управление обращениями. Такая интеграция позволяет автоматизировать обработку запросов и сократить время ответа клиентам.</p>
                <p className="py-3">Интеграция с VK востребована среди компаний, которые получают значительную часть обращений через социальные сети. Заявки из форм обратной связи, сообщений сообщества и рекламных инструментов автоматически передаются в CRM, где становятся частью общей воронки продаж. Это помогает исключить потерю потенциальных клиентов и повысить эффективность работы маркетинга.</p>
                <p className="py-3">Помимо стандартной передачи данных, современные интеграции с CRM могут включать автоматическое создание задач для менеджеров, отправку уведомлений, запуск цепочек сообщений, синхронизацию статусов заказов и множество других функций. Грамотно настроенная автоматизация позволяет сократить количество рутинных операций и снизить вероятность ошибок, связанных с ручным вводом данных.</p>
                <p className="py-3">Особое внимание я уделяю надежности интеграций. Перед запуском выполняется тестирование всех сценариев передачи данных, проверяется корректность обработки заявок и стабильность работы системы. Это позволяет гарантировать, что все заявки с сайта будут своевременно поступать в CRM и обрабатываться без сбоев.</p>
                <p className="py-3">Одним из преимуществ работы со мной является персональный подход и прямое взаимодействие с разработчиком. Вы обсуждаете проект непосредственно со специалистом, который занимается его реализацией, без посредников и менеджеров. Это позволяет быстрее принимать решения, учитывать особенности бизнеса и создавать интеграции, максимально соответствующие вашим задачам.</p>
                <p className="py-3">Если вы хотите автоматизировать обработку обращений, повысить эффективность продаж и объединить все каналы коммуникации в единую систему, профессиональные интеграции с CRM станут оптимальным решением. Независимо от того, используете ли вы AmoCRM, работаете через Telegram, MAX или VK, правильно настроенная интеграция поможет исключить потерю обращений, ускорить работу сотрудников и обеспечить полный контроль над взаимодействием с клиентами. Именно поэтому сегодня все больше компаний понимают, зачем нужны интеграции, и внедряют автоматизированные решения для развития бизнеса и повышения качества обслуживания клиентов.</p>
            </div>
        </section>
    </main>
  );
}