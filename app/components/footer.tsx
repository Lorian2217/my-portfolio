"use client"

import "../globals.css";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row md:items-center">
                <p>© 2026 Lorian. Разработка сайтов на React, Next.js, Bitrix и CMS.</p>
                <div className="flex flex-wrap gap-4">
                    <Link className="hover:text-cyan-200" href="/services/">Услуги</Link>
                    <Link className="hover:text-cyan-200" href="/projects/">Проекты</Link>
                    <Link className="hover:text-cyan-200" href="/contacts/">Контакты</Link>
                    {/* <Link className="hover:text-cyan-200" href="/payment/">Оплата</Link>
                    <Link className="hover:text-cyan-200" href="/blog/">Блог</Link> */}
                </div>
            </div>
        </footer>
    );
}