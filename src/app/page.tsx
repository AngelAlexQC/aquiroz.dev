import AQuirozDev from "@/components/aquirozdev";
import { ModeToggle } from "@/components/mode-toogle";
import { getArticles } from "@/lib/getArticles";
import Link from "next/link";
import { getPackageStats } from "@/lib/stats";
import { Badge } from "@/components/ui/badge";
const packageName = "ec-dni-validator";

export default async function Home() {
  const articles = await getArticles();
  const {
    dailyDownloads,
    monthlyDownloads,
    totalDownloads,
    weeklyDownloads,
    yearlyDownloads,
  } = await getPackageStats(packageName);
  return (
    <main className="container flex flex-col lg:flex-row items-center lg:items-start py-2 gap-2">
      <AQuirozDev />
      <section className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Latest Articles</h3>
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
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>

          <Link
            href="https://www.npmjs.com/package/ec-dni-validator"
            target="_blank"
            className="flex dark:shadow-gray-600 transform flex-col gap-4 rounded-md p-4 shadow duration-300 ease-in-out hover:scale-105 mb-2">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-lg font-semibold">ec-dni-validator</h3>
              <Badge className="ml-2">JavaScript</Badge>
            </div>
            <p className="text-sm text-gray-500 mr-auto">NPM Package</p>
            <p className="text-sm text-gray-500">
              Validate DNI numbers of Ecuadorian citizens.
            </p>
            <h4 className="text-sm font-semibold text-center">Downloads</h4>
            <div className="flex flex-row gap-2 justify-between ma">
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-semibold">Weekly</h4>
                <p className="text-sm">{weeklyDownloads}</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-semibold">Monthly</h4>
                <p className="text-sm">{monthlyDownloads}</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-semibold">Yearly</h4>
                <p className="text-sm">{yearlyDownloads}</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-semibold">Total</h4>
                <p className="text-sm">{totalDownloads}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
