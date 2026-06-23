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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300"></span>Разработка, SEO-структура, интеграции и поддержка
            </div>
            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Разработка сайтов на <span className="text-gradient">React, Next.js и Bitrix</span> под заявки и SEO</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Собираю сайты, лендинги и веб-приложения с нормальной структурой под поиск и рекламу: услуги, кейсы, формы, аналитика, микроразметка, адаптив и понятный путь к заявке.</p>
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
            <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Услуги</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Список услуг которые я могу предложить</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">* Рядом с услугой означает, что она в ещё в разработке</p>
          </div>
          {/* Это можно оптимизировать, выводя через перебор массива */}
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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Проекты</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Опыт в разных нишах</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Список проектов которые я разрабатывал, или участвовал в их разработке/продвижении.</p>
            {/* <p className="mt-5 text-lg leading-8 text-slate-300">Портфолио лучше использовать как доказательство: показывать не только название проекта, но и нишу, стек, задачу и роль в разработке.</p> */}
          </div>
          {/* Тоже можно массивом из бд вытащить */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Termoland</h3>
                <p className="mt-2 text-sm text-cyan-100">Федеральная сеть городских курортов</p>
                <p className="mt-4 leading-7 text-slate-300">Корпоративный проект с большим количеством страниц, услуг и региональных сценариев.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Joomla / React</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">MRC-club</h3>
                <p className="mt-2 text-sm text-cyan-100">Экосистема для PR, спикеров и СМИ</p>
                <p className="mt-4 leading-7 text-slate-300">Проект с интерфейсной логикой, личными сценариями и развитием после старой CMS.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Allure Lodge</h3>
                <p className="mt-2 text-sm text-cyan-100">Сайт для семейного отдыха в горах</p>
                <p className="mt-4 leading-7 text-slate-300">Пример сайта для услуги, где важны визуал, доверие, заявки и понятная структура.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Joomla</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Гранд-Мех</h3>
                <p className="mt-2 text-sm text-cyan-100">Металлообработка и мехобработка</p>
                <p className="mt-4 leading-7 text-slate-300">B2B-ниша, где нужны услуги, оборудование, техническая экспертиза и формы обращения.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Joomla</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Бельтона</h3>
                <p className="mt-2 text-sm text-cyan-100">Производитель брендированной упаковки</p>
                <p className="mt-4 leading-7 text-slate-300">Проект для производства и оптовых клиентов с акцентом на каталог и доверие.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">WordPress</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Феномен</h3>
                <p className="mt-2 text-sm text-cyan-100">Шахматная школа</p>
                <p className="mt-4 leading-7 text-slate-300">Образовательная ниша, где важны программы, преподаватели, расписание и заявки.</p>
              </div>
            </article>
          </div>
          <div className="flex justify-center pt-5">
            <Link href="/projects/" className="rounded-[8px] p-4 bg-transparent border border-white duration-500 hover:scale-105">Посмотреть все</Link>
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
          {/* Вывести через цикл */}
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
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Какие задачи вы помогаете решать бизнесу?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-300">Я разрабатываю сайты и веб-приложения, которые помогают привлекать клиентов, автоматизировать бизнес-процессы и увеличивать продажи. В зависимости от задач проекта это может быть создание нового сайта, модернизация существующего решения, SEO-продвижение, интеграция CRM или техническая поддержка.</p>
            </details>
            <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Сколько стоит создание сайта?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-300">Стоимость зависит от типа проекта, объема работ и необходимого функционала. Простые сайты и лендинги требуют меньших вложений, а корпоративные порталы, интернет-магазины и индивидуальные веб-приложения рассчитываются отдельно. После обсуждения проекта вы получите подробную смету с прозрачным расчетом стоимости.</p>
            </details>
            <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Почему стоит заказать разработку у вас, а не в веб-студии?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-300">Работая напрямую с разработчиком, вы получаете быструю коммуникацию, отсутствие посредников и полный контроль над проектом. Все ключевые решения обсуждаются напрямую, что позволяет быстрее внедрять изменения и эффективнее использовать бюджет.</p>
            </details>
            <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли обратиться, если сайт уже существует?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-300">Да. Помимо разработки новых проектов, я занимаюсь доработкой существующих сайтов, исправлением ошибок, оптимизацией производительности, SEO-настройкой, интеграцией сторонних сервисов и технической поддержкой проектов любой сложности.</p>
            </details>
            <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Как начать сотрудничество?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-300">Достаточно оставить заявку через форму обратной связи или связаться любым удобным способом. После обсуждения задач я предложу оптимальный вариант реализации, озвучу сроки и стоимость работ, а затем приступлю к выполнению проекта после согласования всех деталей.</p>
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
    </main>
  );
}