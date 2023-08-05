"use client";
import { motion } from "framer-motion";
import Header from "./component/Header";
import About from "./component/section/About";
import Contact from "./component/section/Contact";
import Experience from "./component/section/Experience";
import Hero from "./component/section/Hero";
import Projects from "./component/section/Projects";
import Skills from "./component/section/Skills";

const Home = () => {
  return (
    <main className="bg-primary h-screen  text-white  snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden  z-0">
      <Header />

      <section id="Hero" className="snap-center">
        <Hero />
      </section>

      <section id="About" className="snap-center">
        <About />
      </section>

      <section id="Experience" className="snap-center">
        <Experience />
      </section>

      <section id="Skills" className="snap-center">
        <Skills />
      </section>

      <section id="Projects" className="snap-center">
        <Projects />
      </section>

      <section id="Contact" className="snap-center">
        <Contact />
      </section>
    </main>
  );
};
export default Home;
