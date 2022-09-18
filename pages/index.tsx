import Header from "@components/Header";
import About from "@sections/About";
import Experience from "@sections/Experience";
import Hero from "@sections/Hero";
import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Manav Kaushal</title>
        <meta
          name="description"
          content="This is really cool responsive portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact */}
    </div>
  );
};

export default Home;
