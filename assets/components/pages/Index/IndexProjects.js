/**
 *
 *  This is the index projects
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";
import ReactDOMServer from "react-dom/server";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSass, FaReact, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";
import { FADE_RIGHT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexProjects = (props) => {
  const router = useRouter();

  let projectsRouted = false;

  // Changing tech names to icons
  useEffect(() => {
    const ALL_TECHS = document.querySelectorAll(".project-tech");

    ALL_TECHS.forEach((tech) => {
      if (tech.innerHTML == "Sass") {
        tech.innerHTML = ReactDOMServer.renderToString(<FaSass />);
      }
      if (tech.innerHTML == "Bootstrap") {
        tech.innerHTML = ReactDOMServer.renderToString(<FaBootstrap />);
      }
      if (tech.innerHTML == "ReactJS") {
        tech.innerHTML = ReactDOMServer.renderToString(<FaReact />);
      }
      if (tech.innerHTML == "Next.js") {
        tech.innerHTML = ReactDOMServer.renderToString(<SiNextdotjs />);
      }
    });
  }, []);

  // Scroll Fades
  const INDEX_PROJECTS_CONTROLS = useAnimation();
  const [INDEX_PROJECTS_REF, INDEX_PROJECTS_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INDEX_PROJECTS_IN_VIEW) {
        INDEX_PROJECTS_CONTROLS.start("visible");
      }
    } else {
      INDEX_PROJECTS_CONTROLS.start("visible");
    }
  }, [INDEX_PROJECTS_CONTROLS, INDEX_PROJECTS_IN_VIEW]);

  return (
    <section id="indexProjects" className={`${styles.index_projects}`}>
      <motion.div
        className={`${styles.index_projects_inner} fm-animate fade-right half-second`}
        initial="hidden"
        animate={INDEX_PROJECTS_CONTROLS}
        ref={INDEX_PROJECTS_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span className={`${styles.above_major} half-second`}>View My</span>
        <h1 className="half-second">
          Current Projects<span>.</span>
        </h1>

        <div
          className={`${styles.link} half-second`}
          onClick={() => {
            TriggerExitAnimations();

            setTimeout(() => {
              PageRouting(router, "/projects", projectsRouted);
            }, 1000);
          }}
        >
          <span>View All</span>
        </div>

        {props.data.map((project) => (
          <div
            className={`${styles.project_box} container-fluid half-second`}
            key={project.projectID}
          >
            <div className={`${styles.project_row} row`}>
              <div
                className={`${styles.project_side} ${styles.project_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.project_side_cnt}`}>
                  {/** <BackgroundImage
                    src={project.projectCover}
                    width="100%"
                    height="100%"
                    className={styles.bg}
                  /> */}
                  <img
                    data-src={project.projectCover}
                    className="lazyload half-second"
                    alt={project.projectName + " image"}
                  />
                </div>
              </div>
              <div
                className={`${styles.project_side} ${styles.project_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.project_side_cnt}`}>
                  <span className={`${styles.project_id}`}>
                    {project.projectID}
                  </span>

                  <ul className={styles.project_techs}>
                    {project.projectTechs.map((tech) => (
                      <li className="project-tech half-second">{tech}</li>
                    ))}
                  </ul>

                  <div className={`${styles.project_side_cnt_text}`}>
                    <div className={`${styles.project_side_cnt_text_inner}`}>
                      <span className={`${styles.project_name} half-second`}>
                        {project.projectName}
                      </span>
                      <div className={styles.project_dates}>
                        <span className="half-second">
                          {project.projectStart}
                        </span>
                        <span className="half-second"> - </span>
                        <span className="half-second">
                          {project.projectEnd}
                        </span>
                      </div>

                      <p className="half-second">{project.projectDesc}</p>

                      <ul className={styles.project_highlights}>
                        {project.projectHighlights.map((hl) => (
                          <li className="half-second">{hl}</li>
                        ))}
                      </ul>

                      <div className={styles.project_links}>
                        <a
                          href={project.projectCodeLink}
                          className={`${styles.code_link} half-second`}
                          target={"_blank"}
                        >
                          <span>View Code</span>
                        </a>
                        <a
                          href={project.projectDemoLink}
                          className={`${styles.demo_link} half-second`}
                          target={"_blank"}
                        >
                          <span>View Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
