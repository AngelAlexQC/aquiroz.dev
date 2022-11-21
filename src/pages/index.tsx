import Head from "next/head";
import { AQuirozDev, AuthShowcase } from "../components";

const Home = () => {
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col items-center gap-2">
            <AQuirozDev />
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
