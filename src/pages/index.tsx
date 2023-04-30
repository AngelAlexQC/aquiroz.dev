import Head from "next/head";
import { AQuirozDev } from "../components";
import type { Article } from "../types/Article";
import Link from "next/link";

export const getStaticProps = async () => {
  const url = "https://dev.to/api/articles?username=angelalexqc";
  const res = await fetch(url);
  const data = (await res.json()) as Article[];
  return {
    props: { articles: data },
  };
};

function Home({ articles = [] }: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>Ángel Quiroz | AQuirozDEV</title>
        <meta
          name="description"
          content="Software Developer & Computer Systems Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#009bff]  to-[#020024]">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 ">
          <div className="flex flex-col items-center gap-2">
            <AQuirozDev />
          </div>
          <h2>Latest Posts</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i: number) => (
              <Link
                href={article.url}
                key={i}
                className="flex transform flex-col items-center justify-center gap-2 rounded-md p-4 shadow-md transition-all duration-500 ease-in-out hover:scale-105"
              >
                <h3 className="text-lg font-semibold">
                  {article.title.length > 50 ? (
                    <>{article.title.slice(0, 50)}...</>
                  ) : (
                    <>{article.title}</>
                  )}
                </h3>
                <p className="text-sm text-gray-500">
                  {article.description.length > 100 ? (
                    <>{article.description.slice(0, 100)}...</>
                  ) : (
                    <>{article.description}</>
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
