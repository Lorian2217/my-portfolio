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
            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Проекты и кейсы разработки сайтов</h1>
            {/* Для лучшего SEO каждый крупный проект можно позже вынести в отдельную страницу кейса. */}
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Портфолио отражает мой опыт в разных нишах: городские курорты, PR-сервисы, отдых, производство, образование, e-commerce и B2B.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => window.dispatchEvent(new Event("openLeadModal"))} className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-200">Получить оценку</button>
              <a href="#projects" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold transition hover:border-cyan-300/50 hover:text-cyan-200">Смотреть проекты</a>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6 shadow-2xl shadow-cyan-950/30">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-200">Что будет на выходе</p>
            {/* Циклом вывести */}
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

      <section className="px-4 py-20 sm:px-6 lg:px-8" id="projects">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Портфолио</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Проекты по нишам и технологиям</h2>
            {/* <p className="mt-5 text-lg leading-8 text-slate-300">Для SEO и доверия проекты лучше постепенно расширять в полноценные кейсы: задача, стартовая точка, стек, выполненные работы, результат и ссылка на сайт.</p> */}
          </div>
          {/* Вывести циклом */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Termoland</h3>
                <p className="mt-2 text-sm text-cyan-100">Федеральная сеть городских курортов</p>
                <p className="mt-4 leading-7 text-slate-300">Федеральная сеть Городских курортов с фитнесом, предоставляющих уникальную возможность совмещать урбанистический стиль жизни с роскошью курортного отдыха.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Joomla / React</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">MRC-club</h3>
                <p className="mt-2 text-sm text-cyan-100">Экосистема для PR, спикеров и СМИ</p>
                <p className="mt-4 leading-7 text-slate-300">MRC-club — это инновационная экосистема, созданная с учетом потребностей PR-специалистов, опытных спикеров и представителей СМИ.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Allure Lodge</h3>
                <p className="mt-2 text-sm text-cyan-100">Сайт для семейного отдыха в горах</p>
                <p className="mt-4 leading-7 text-slate-300">Allure Lodge – место, где первозданная природа гор встречается с современным кавказским гостеприимством, создавая уникальное пространство для незабываемого семейного отдыха.</p>
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
                <p className="mt-4 leading-7 text-slate-300">«Beltona» — производитель современной и стильной брендированной упаковки для различных отраслей.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Evolution</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Тосол Синтез</h3>
                <p className="mt-2 text-sm text-cyan-100">Завод пластиковой тары</p>
                <p className="mt-4 leading-7 text-slate-300">Завод пластиковой тары в Москве — изготовление и продажа тары оптом: канистры, емкости, пищевая тара, тара для бытовой химии и косметики.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">WordPress</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Motoxmoto</h3>
                <p className="mt-2 text-sm text-cyan-100">Интернет-магазин</p>
                <p className="mt-4 leading-7 text-slate-300">Магазин мотоэкипировки в Москве. Мотоэкипировка, произведенную по заказу и от сторонних производителей.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Техника-М</h3>
                <p className="mt-2 text-sm text-cyan-100">Интернет-магазин</p>
                <p className="mt-4 leading-7 text-slate-300">Tehnika-M — это компания, которая предлагает широкий ассортимент техники для дома и кухни.</p>
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
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">А-Текстиль</h3>
                <p className="mt-2 text-sm text-cyan-100">Интернет-магазин</p>
                <p className="mt-4 leading-7 text-slate-300">«А-Текстиль» — широкий ассортимент тканей, материалов для шитья и швейной фурнитуры.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">Bitrix</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Омникомм</h3>
                <p className="mt-2 text-sm text-cyan-100">Системы спутникового мониторинга транспорта</p>
                <p className="mt-4 leading-7 text-slate-300">Omnicomm — крупный российский разработчик и производитель систем спутникового мониторинга транспорта на базе технологий ГЛОНАСС/GPS.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06]">
              <div className="h-40 bg-gradient-to-br from-cyan-300/25 via-blue-400/15 to-emerald-300/20 p-6">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs text-cyan-100">WordPress</span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black">Вистал</h3>
                <p className="mt-2 text-sm text-cyan-100">Комплектующие для очистных сооружений и изделий из полимерных и композитных материалов</p>
                <p className="mt-4 leading-7 text-slate-300">Производство, а также оказание услуг по проектированию, монтажу и обслуживанию очистных систем.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/*
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.24em] text-cyan-200">Как усилить кейсы</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Что добавить в каждую карточку</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Сейчас портфолио можно сделать сильнее, если добавить конкретику. Даже без цифр можно показать роль в проекте, стек, сложность, список работ и ценность для клиента.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="glass rounded-[2rem] p-7">
              <h3 className="text-2xl font-black">Задача клиента</h3>
              <p className="mt-4 leading-7 text-slate-300">Что нужно было сделать: новый сайт, доработка, перенос, интеграция, скорость, SEO или поддержка.</p>
            </article>
            <article className="glass rounded-[2rem] p-7">
              <h3 className="text-2xl font-black">Роль в проекте</h3>
              <p className="mt-4 leading-7 text-slate-300">Какая часть была вашей: верстка, backend, CMS, React, интеграции, поддержка или SEO-внедрение.</p>
            </article>
            <article className="glass rounded-[2rem] p-7">
              <h3 className="text-2xl font-black">Стек и решения</h3>
              <p className="mt-4 leading-7 text-slate-300">Какие технологии использовались и почему они подходили под задачу.</p>
            </article>
            <article className="glass rounded-[2rem] p-7">
              <h3 className="text-2xl font-black">Результат</h3>
              <p className="mt-4 leading-7 text-slate-300">Что изменилось после работ: запуск, новые разделы, стабильность, скорость, формы, удобство поддержки.</p>
            </article>
          </div>
        </div>
      </section>
      */}

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
            <details className="group rounded-3xl border border-white/10 bg-white/[.06] p-6 open:bg-white/[.09]"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">Можно ли подключить Яндекс Метрику и цели?<span className="text-cyan-200 group-open:rotate-45">+</span></summary>
              <p className="mt-4 leading-7 text-slate-300">Да. Для форм, кнопок, кликов по контактам, открытия модальных окон и отправки заявок можно настроить события, которые пригодятся для рекламы и аналитики.</p>
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
    </main>
  );
}