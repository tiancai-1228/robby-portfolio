/* eslint-disable @next/next/no-async-client-component */
"use client";

import Header from "./component/Header";
import About from "./component/section/About";
import Contact from "./component/section/Contact";
import Experience from "./component/section/Experience";
import Hero from "./component/section/Hero";
import Projects from "./component/section/Projects";
import Skills from "./component/section/Skills";
import {
  I_skill,
  I_social,
  I_pageInfo,
  I_experience,
  I_project,
} from "./service/interface";
import { useEffect, useState } from "react";
import { getSocial } from "./service/api/social";
import { getPageInfo } from "./service/api/pageInfo";
import { getSkill } from "./service/api/skill";
import { getExperience } from "./service/api/experience";
import { getProject } from "./service/api/project";

interface Prop {
  pageInfo: I_pageInfo;
  socials: I_social[];
  skills: I_skill[];
  experience: I_experience[];
  projects: I_project[];
}

export const revalidate = 30;

const Home = () => {
  const [data, setData] = useState<Prop>();

  const getInitData = async () => {
    const pageInfo: I_pageInfo = await getPageInfo();
    const socials: I_social[] = await getSocial();
    const skills: I_skill[] = await getSkill();
    const experience: I_experience[] = await getExperience();
    const projects: I_project[] = await getProject();

    setData({ pageInfo, socials, skills, experience, projects });
  };

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <main className="bg-primary h-screen  text-white  snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden  z-0">
      {data && (
        <>
          <Header socials={data.socials} />

          <section id="Hero" className="snap-center">
            <Hero pageInfo={data.pageInfo} />
          </section>

          <section id="About" className="snap-center">
            <About pageInfo={data.pageInfo} />
          </section>

          <section id="Experience" className="snap-center">
            <Experience experience={data.experience} />
          </section>

          <section id="Skills" className="snap-center">
            <Skills skills={data.skills} />
          </section>

          <section id="Projects" className="snap-center">
            <Projects projects={data.projects} />
          </section>

          <section id="Contact" className="snap-center">
            <Contact pageInfo={data.pageInfo} />
          </section>
        </>
      )}
    </main>
  );
};
export default Home;
