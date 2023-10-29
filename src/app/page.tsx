import AQuirozDev from "@/components/aquirozdev";
import { ModeToggle } from "@/components/mode-toogle";
import { getArticles } from "@/lib/getArticles";
import Link from "next/link";

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="container flex flex-col items-center py-2 gap-2">
      <AQuirozDev />
      <h3 className="text-2xl font-semibold">Articles</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {articles.map((article, i: number) => (
          <Link
            href={article.url}
            key={i}
            target="_blank"
            className="flex dark:shadow-gray-600 transform flex-col gap-4 rounded-md p-4 shadow duration-300 ease-in-out hover:scale-105">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-500 mr-auto">
              {new Date(article.published_at).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">{article.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
