import Head from "next/head";
import { AQuirozDev } from "../components";
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#009bff]  to-[#020024]">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 ">
          <div className="flex flex-col items-center gap-2">
            <AQuirozDev />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
