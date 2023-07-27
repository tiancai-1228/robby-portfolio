"use client";
import Header from "../component/Header";
import About from "../component/container/About";
import Contact from "../component/container/Contact";
import Experience from "../component/container/Experience";
import Hero from "../component/container/Hero";
import Project from "../component/container/Project";
import Skills from "../component/container/Skills";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-primary overflow-clip">
      <Header />

      <main className="mt-[60px] ">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </main>
    </main>
  );
};
export default Home;
