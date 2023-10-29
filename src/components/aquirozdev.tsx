import Image from "next/image";
import Link from "next/link";
// import dev.to, github, linkedin icons from react-icons
import { FaEnvelope } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toogle";
import { Badge } from "./ui/badge";
import { links } from "./links";
import { techs } from "./techs";
import { getPackageStats } from "@/lib/stats";
const packageName = "ec-dni-validator";

export async function AQuirozDev() {
  const {
    dailyDownloads,
    monthlyDownloads,
    totalDownloads,
    weeklyDownloads,
    yearlyDownloads,
  } = await getPackageStats(packageName);
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center">
        <Image
          alt="Ángel Quiroz"
          height="200"
          src="/img/avatar.png"
          width="200"
          className="rounded-full border-4 shadow-lg"
        />
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/img/logo-black.png"
            width="50"
            height="50"
            className="dark:hidden"
            alt="Logo"
          />
          <Image
            src="/img/logo.png"
            width="50"
            height="50"
            className="hidden dark:block"
            alt="Logo"
          />
          <h1 className="text-xl font-bold">Ángel Quiroz</h1>
        </div>
        <h2 className="font-semibold text-foreground">
          Full Stack Software Developer
        </h2>

        <ul className="flex flex-row gap-2 p-2">
          {links.map(({ icon: Icon, href, title }) => (
            <li key={href}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                title={title}
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                })}>
                <Icon size="2rem" />
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
        <Link
          href="mailto:aquirozdev@gmail.com"
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "mt-2",
          })}>
          <FaEnvelope className="mr-2" />
          Contact me
        </Link>
      </section>
      <div className="mb-2 text-center p-2">
        I build software, focusing on web development with:
        <br />
        {techs.map((tech) => (
          <>
            <Badge key={tech}>{tech}</Badge>
            &nbsp;
          </>
        ))}
        <br />
        and related technologies.
      </div>
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
  );
}

export default AQuirozDev;
