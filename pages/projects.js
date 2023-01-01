// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLinks from "../assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { HeadCnt } from "../assets/components/global/Misc/HeadCnt";
import { DesktopNav } from "../assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "../assets/components/global/Nav/Mobile/MobileNav";
import { Resume } from "../assets/components/global/Nav/Both/Resume";
import { PageB2T } from "../assets/components/global/Misc/PageB2T";
import { Footer } from "../assets/components/global/Footer/Footer";

import { ProjectsTop } from "../assets/components/pages/Projects/ProjectsTop";
import { ProjectsHolder } from "../assets/components/pages/Projects/ProjectsHolder";

// Style Imports
import "../assets/styles/modules/Projects/Projects.module.css";

export const getStaticProps = async () => {
  const projectsRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/Codingthefront_CDN/main/files/json/PROJECTS.json"
  );
  const resumeExperienceRes = await fetch(
    "https://raw.githubusercontent.com/mxrked/Codingthefront_CDN/main/files/json/RESUME_EXPERIENCE.json"
  );

  const projectsResData = await projectsRes.json();
  const resumeExperienceResData = await resumeExperienceRes.json();

  return {
    props: {
      displayed_projects: projectsResData,
      displayed_resume_experience: resumeExperienceResData,
    },
  };
};

export default function Projects({
  displayed_resume_experience,
  displayed_projects,
}) {
  const router = useRouter();

  // Disable Index Page Links
  useEffect(() => {
    ManipPageLinks("disable", ".projects-link");
  }, []);

  return (
    <div id="PAGE" className="page half-second overrides_Projects">
      <HeadCnt
        title="codingthefront - Projects/Work"
        description="Recent graduate with an Associate's Degree in both Web Technologies and Programming and Software Development. Currently seeking to leverage skills in coding (HTML5, CSS3, JavaScript, Next.js, ReactJS), problem-solving, and communication to gain professional experience in a Front-End Developer role."
        keywords="Parker Phelps, Parker, Phelps, codingthefront, front end web developer, front end developer, front-end web developer, web developer, portfolio, web portfolio, HTML5, HTML, CSS3, CSS, JS, JavaScript, BootStrap, ReactJS, React.js, Next.js, NextJS, Sass, Scss, web developer for hire, seeking experience"
        robots="index, follow"
        url="https://codingthefront.com/projects/"
      />
      <DesktopNav />
      <MobileNav />
      <Resume data={displayed_resume_experience} />
      <PageB2T />

      <main id="PAGE_CNT" className="page-main full-second">
        <div className="page-main-cnt full-second">
          <ProjectsTop />
          <ProjectsHolder data={displayed_projects} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
