import Image from "next/image";
import Link from "next/link";
import styles from "./AQuirozDev.module.css";
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
        <h1>Ángel Quiroz</h1>
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
                className="flex items-center gap-2"
              >
                <Icon size="2rem" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="mailto:aquirozdev@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
        >
          <MdMail />
          <span>Contact me</span>
        </Link>
      </section>
    </main>
  );
};

export default AQuirozDev;
