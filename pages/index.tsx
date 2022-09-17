import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Manav Kaushal</title>
        <meta
          name="description"
          content="This is really cool responsive portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-500">Test</h1>
    </div>
  );
};

export default Home;
