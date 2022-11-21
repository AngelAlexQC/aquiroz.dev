import Image from "next/image";
import styles from "./AQuirozDev.module.css";

export const AQuirozDev = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>Ángel Quiroz</h1>
        <h2>
          Tech Lead at{" "}
          <a href="https://www.edgebound.com" target="_blank" rel="noreferrer">
            Edgebound
          </a>
        </h2>
        <p>
          I build software for the web. I&apos;m a Full-Stack developer with a
          focus on JavaScript and TypeScript.
        </p>
        <p>
          I am currently working on the design and construction of different
          products and solutions for my company.
        </p>
        <p>I am also working on some personal projects for learning and fun.</p>
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
          <li>
            <a href="https://blog.aquiroz.dev" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://github.com/angelalexqc"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/aquirozdev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AQuirozDev;
