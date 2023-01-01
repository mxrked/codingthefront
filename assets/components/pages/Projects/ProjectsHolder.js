/**
 *
 *  This is the projects holder
 *
 */

import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSass, FaReact, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { FADE_RIGHT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../styles/modules/Projects/Projects.module.css";

export const ProjectsHolder = (props) => {
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
  const PROJECTS_HOLDER_CONTROLS = useAnimation();
  const [PROJECTS_HOLDER_REF, PROJECTS_HOLDER_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (PROJECTS_HOLDER_IN_VIEW) {
        PROJECTS_HOLDER_CONTROLS.start("visible");
      }
    } else {
      PROJECTS_HOLDER_CONTROLS.start("visible");
    }
  }, [PROJECTS_HOLDER_CONTROLS, PROJECTS_HOLDER_IN_VIEW]);

  return (
    <section id="projectsHolder" className={`${styles.projects_holder}`}>
      <motion.div
        className={`${styles.projects_holder_inner} fm-animate fade-right half-second`}
        initial="hidden"
        animate={PROJECTS_HOLDER_CONTROLS}
        ref={PROJECTS_HOLDER_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 1, duration: 0.5 }}
      >
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
