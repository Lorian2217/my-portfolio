import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "../articles";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: "Статья не найдена",
    };
  }

  return {
    title: article.title,
    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
    
    alternates: {
      canonical: `https://lorian.su/blog/${article.slug}/`,
    },
  };
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          <div>
            <span className="inline-flex px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm mb-4"> {article.title} </span>
            <h1 className="text-5xl font-bold text-white mb-6"> {article.title} </h1>

            <div className="text-slate-400 text-lg">
              {article.description}
            </div>
          </div>

          <img src={article.image} alt={article.title} className="rounded-3xl w-full" />

        </div>

        <article
          className="mx-auto prose prose-invert prose-lg"
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        />

      </div>
    </div>
  );
}


// export default function ArticlePage() {
//   return (
    <div className="bg-slate-950 min-h-screen">

      <div className="container mx-auto px-4 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          <div>
            <span className="inline-flex px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm mb-4">
              React / Next.js
            </span>

            <h1 className="text-5xl font-bold text-white mb-6">
              React или Next.js: что выбрать для бизнеса
            </h1>

            <p className="text-slate-400 text-lg">
              Подробный разбор современных технологий
              для создания производительных веб-приложений.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
            alt=""
            className="rounded-3xl w-full"
          />
        </div>

        <article className="mx-auto prose prose-invert prose-lg">

          <h2>Введение</h2>

          <p>
            React является библиотекой для построения интерфейсов,
            а Next.js предоставляет дополнительные возможности
            для SEO, SSR и производительности.
          </p>

          <h2>Когда выбирать React</h2>

          <p>
            React отлично подходит для SPA-приложений,
            административных панелей и внутренних систем.
          </p>

          <h2>Когда выбирать Next.js</h2>

          <p>
            Если проект ориентирован на SEO, высокую скорость
            загрузки страниц и масштабирование, Next.js
            обычно становится лучшим выбором.
          </p>

        </article>

      </div>

    </div>
//   );
// }