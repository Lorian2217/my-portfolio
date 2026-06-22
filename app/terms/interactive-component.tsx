"use client"

import "../globals.css";

import Link from 'next/link';

export default function InteractiveComponent() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="glass inline-flex rounded-full px-4 py-2 text-sm text-cyan-200">
            Юридическая информация
          </span>

          <h1 className="text-gradient mt-6 text-5xl font-bold md:text-6xl">
            Пользовательское соглашение
          </h1>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                1. Общие положения
              </h2>

              <p className="pb-3">Настоящее Пользовательское соглашение регулирует порядок использования сайта lorian.su.</p>
              <p>Используя сайт, пользователь подтверждает согласие с условиями настоящего Соглашения.</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                2. Назначение сайта
              </h2>

              <p>Сайт носит информационный характер и предназначен для ознакомления пользователей с предоставляемыми услугами и направления заявок на их получение.</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                3. Права и обязанности пользователя
              </h2>

              <p className="pb-3">Пользователь обязуется:</p>

              <ul className="space-y-2">
                <li>• предоставлять достоверную информацию;</li>
                <li>• не использовать сайт в противоправных целях;</li>
                <li>• не предпринимать действий, способных нарушить работу сайта.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                4. Ограничение ответственности
              </h2>

              <p className="pb-3">Информация на сайте предоставляется «как есть».</p>
              <p>Оператор не гарантирует бесперебойную работу сайта и не несет ответственности за убытки, возникшие вследствие невозможности его использования.</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                5. Интеллектуальная собственность
              </h2>

              <p>Все материалы сайта принадлежат их законным правообладателям и защищаются законодательством Российской Федерации.</p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold text-white">
                6. Заключительные положения
              </h2>

              <p>Оператор вправе в любое время изменять настоящее Соглашение.</p>
              <p className="pt-3">Актуальная редакция публикуется на сайте <Link href="https://lorian.su/" className="border-b-1">lorian.su.</Link></p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}