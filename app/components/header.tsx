"use client"

import "../globals.css";

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3" aria-label="Lorian">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 text-sm font-black text-slate-950 shadow-glow">L</span>
                    <span><span className="block text-sm font-semibold">Lorian</span><span className="block text-xs text-slate-400">React / Next.js / Bitrix</span></span>
                </Link>
                <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Основная навигация">
                    <Link className="text-cyan-200 hover:text-cyan-200 transition" href="/">Главная</Link>
                    <Link className="text-slate-300 hover:text-cyan-200 transition" href="/services/">Услуги</Link>
                    <Link className="text-slate-300 hover:text-cyan-200 transition" href="/projects/">Проекты</Link>
                    <Link className="text-slate-300 hover:text-cyan-200 transition" href="/about/">Обо мне</Link>
                    <Link className="text-slate-300 hover:text-cyan-200 transition" href="/contacts/">Контакты</Link>
                </nav>
                <button onClick={() => window.dispatchEvent(new Event("openLeadModal"))} className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">Обсудить проект</button>
            </div>
        </header>
    );
}