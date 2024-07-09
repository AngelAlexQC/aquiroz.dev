import Image from "next/image";
import Link from "next/link";
// import dev.to, github, linkedin icons from react-icons
import { FaEnvelope } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toogle";
import { Badge } from "./ui/badge";
import { links } from "./links";
import { techs } from "./techs";

export async function AQuirozDev() {
  return (
    <div className="flex flex-col items-center md:sticky md:top-0 py-4">
      <section className="flex flex-col items-center ">
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
        <h2 className="font-semibold text-foreground">Software Engineer</h2>

        <ul className="flex flex-row gap-2 p-2">
          {links.map(({ icon: Icon, href, title }, i) => (
            <li key={i}>
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
    </div>
  );
}

export default AQuirozDev;
