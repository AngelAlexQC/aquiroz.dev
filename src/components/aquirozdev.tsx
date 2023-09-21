import Image from "next/image";
import Link from "next/link";
import styles from "./aquirozdev.module.css";
// import dev.to, github, linkedin icons from react-icons
import { FaDev, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const links = [
  {
    icon: FaDev,
    href: "https://dev.to/angelalexqc",
  },
  {
    icon: FaGithub,
    href: "https://github.com/angelalexqc",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/aquirozdev",
  },
  {
    icon: FaFilePdf,
    href: "/documents/Ángel Quiroz.pdf",
  },
];

export const AQuirozDev = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className="flex items-center gap-2">
          <Image src="/img/logo.png" width="50" height="50" alt="Logo" />
          <h1>Ángel Quiroz</h1>
        </div>
        <h2>Full Stack Software Developer</h2>
        <p>
          I build software, focusing on web development. My main stack is
          JavaScript, TypeScript, React, Next.js, Node.js, Nest.js and related
          technologies.
        </p>
        <p>
          I am currently working on the design and construction of different
          products and solutions for my company.
        </p>
        <p>
          I am also working on some personal projects for learning and fun. I am
          a big fan of open source and I keep learning new things every day.
        </p>
      </section>
      <section className={styles.links}>
        <Image
          alt="Ángel Quiroz"
          height="200"
          src="/img/avatar.png"
          width="200"
          className={styles.avatar}
        />
        <ul>
          {links.map(({ icon: Icon, href }) => (
            <li key={href}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:scale-110 transition-transform duration-300 ease-in-out">
                <Icon size="2rem" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="mailto:aquirozdev@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full py-2 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out">
          <MdMail />
          <span>Contact me</span>
        </Link>
      </section>
    </main>
  );
};

export default AQuirozDev;
