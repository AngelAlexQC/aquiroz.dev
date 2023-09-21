import AQuirozDev from "@/components/aquirozdev";
import Link from "next/link";

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

async function getArticles() {
  const url = "https://dev.to/api/articles?username=angelalexqc";
  const res = await fetch(url);
  const data = (await res.json()) as Article[];
  return data;
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="flex flex-col items-center md:h-full md:justify-center">
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
              target="_blank"
              className="flex dark:shadow-gray-600 transform flex-col gap-2 rounded-md p-4 shadow duration-300 ease-in-out hover:scale-95">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-500 mr-auto">
                {new Date(article.published_at).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
