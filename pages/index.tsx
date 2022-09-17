import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components";

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
      {/* Header */}
      <Header />
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
};

export default Home;
