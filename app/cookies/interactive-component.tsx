"use client"

import "../globals.css";

import Link from 'next/link';

export default function InteractiveComponent() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-gradient mb-10 text-center text-5xl font-bold">
          Политика использования Cookie
        </h1>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Что такое Cookie
              </h2>

              <p>
                Cookie — небольшие файлы, которые сохраняются в браузере
                пользователя и помогают корректной работе сайта.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Какие Cookie используются
              </h2>

              <ul className="space-y-2">
                <li>• Технические</li>
                <li>• Аналитические</li>
                <li>• Функциональные</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Аналитика
              </h2>

              <p>
                Для анализа посещаемости используется сервис Яндекс.Метрика.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}