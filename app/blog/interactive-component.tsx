"use client"

import "../globals.css";

import { articles } from "./articles";
// import Link from 'next/link';


export default function InteractiveComponent() {
    return (
        <main>
            <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
                <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl"></div>
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"><span className="h-2 w-2 rounded-full bg-emerald-300"></span>Полезные статьи</div>
                        <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">Блог</h1>
                        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">Полезные статьи о разработке сайтов, SEO, React, Next.js и автоматизации бизнеса.</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button onClick={() => window.dispatchEvent(new Event("openLeadModal"))} className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-200">Получить оценку</button>
                            <a href="/projects/" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold transition hover:border-cyan-300/50 hover:text-cyan-200">Смотреть проекты</a>
                        </div>
                    </div>
                    {/* <div className="glass rounded-[2rem] p-6 shadow-2xl shadow-cyan-950/30">
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
                    </div> */}
                </div>
            </section>

            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                        {articles.map((article) => (
                            <article key={article.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition" >
                                <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-white mb-3"> {article.title} </h2>
                                    <p className="text-slate-400 mb-5 line-clamp-3"> {article.description} </p>
                                    <a href={`/blog/${article.slug}`} className="text-blue-400 hover:text-blue-300" > Читать → </a>
                                </div>
                            </article>
                        ))}
                    </div>
                    {/* <div className="flex justify-center gap-2 mt-16">
                        <button className="w-10 h-10 rounded-lg bg-slate-900 text-white"> 1 </button>
                        <button className="w-10 h-10 rounded-lg bg-blue-600 text-white"> 2 </button>
                        <button className="w-10 h-10 rounded-lg bg-slate-900 text-white"> 3 </button>
                    </div> */}
                </div>
            </div>
        </main>
    );
}