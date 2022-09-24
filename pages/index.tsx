import Header from "@components/Header";
import About from "@sections/About";
import Contact from "@sections/Contact";
import Experience from "@sections/Experience";
import Hero from "@sections/Hero";
import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 customScrollBar">
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
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-end px-4">
            <img
              className="w-10 h-10 p-1 transition duration-300 ease-in-out rounded-full cursor-pointer filter grayscale hover:grayscale-0"
              src="/images/mk_yellow_light_bg_notext.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
