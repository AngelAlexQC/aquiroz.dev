import Head from "next/head";
import { AQuirozDev } from "../components";

interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: any;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: any;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: any;
    github_username: string;
    user_id: number;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
}

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
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 rounded-md p-4 shadow-md"
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
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
