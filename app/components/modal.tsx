"use client"

import "../globals.css";
import Link from 'next/link';

import { useState } from "react";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadModal({
    isOpen,
    onClose,
}: LeadModalProps) {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        contact: "",
        task: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            alert("Заявка отправлена");

            setForm({
                name: "",
                contact: "",
                task: "",
            });

            onClose();

        } catch (error) {
            console.error(error);

            alert("Ошибка отправки");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="leadModal" className={`fixed inset-0 z-[100] items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm ${ isOpen ? "flex" : "hidden" }`} onClick={onClose}>
            <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/15" aria-label="Закрыть">×</button>
                <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-200">Заявка</p>
                <h2 className="mt-3 text-3xl font-black">Расскажите о проекте</h2>
                {/* <p className="mt-3 leading-7 text-slate-300">Форму можно связать с API-route в Next.js, Telegram, почтой, CRM и Яндекс Метрикой.</p> */}
                <p className="mt-3 leading-7 text-slate-300">Можно прислать ссылку на сайт, макет, ТЗ или просто краткое описание.</p>
                <form className="mt-6 space-y-4" action="#" method="post" onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Имя" value={form.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />
                    <input name="contact" type="text" placeholder="Telegram, телефон или email" value={form.contact} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />
                    <textarea name="task" rows={4} placeholder="Коротко опишите задачу" value={form.task} onChange={handleChange} className="w-full resize-none rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"></textarea>
                    <div className="flex gap-3">
                        <div className="rounded-lg overflow-hidden w-[25px] h-[25px]"><input type="checkbox" name="privacy" className="w-full h-full" required /></div>
                        <div>Даю согласие на <Link href="/privacy/" className="border-b-1">обработку персональных данных</Link></div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full rounded-full bg-cyan-300 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-200">{loading ? "Отправка..." : "Отправить заявку"}</button>
                </form>
            </div>
        </div>
    );
}