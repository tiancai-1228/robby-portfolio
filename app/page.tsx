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
import { getSocial } from "./service/api/social";
import { getPageInfo } from "./service/api/pageInfo";
import { getSkill } from "./service/api/skill";
import { getExperience } from "./service/api/experience";
import { getProject } from "./service/api/project";

async function getServerData() {
  const pageInfo: I_pageInfo = await getPageInfo();
  const socials: I_social[] = await getSocial();
  const skills: I_skill[] = await getSkill();
  const experience: I_experience[] = await getExperience();
  const projects: I_project[] = await getProject();

  return { pageInfo, socials, skills, experience, projects };
}

const Home = async () => {
  const data = await getServerData();

  return (
    <main className="bg-primary h-screen  text-white  snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden  z-0">
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
    </main>
  );
};
export default Home;
