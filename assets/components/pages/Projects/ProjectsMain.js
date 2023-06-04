/**
 *
 *  This is the Projects Main
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { PROJECTS } from "@/assets/data/variables/ARRAYS";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Projects/Projects.module.css";
import { FaGithub, FaGlobe } from "react-icons/fa";

export const ProjectsMain = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="projectsMain"
      className={`${styles.projects_main} overrides_ProjectsMain`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.projects_main_inner}`}>
          <div className={`${styles.projects_main_inner_box} container-fluid`}>
            <div className={`${styles.projects_main_inner_row} row`}>
              {PROJECTS.map((project) => (
                <div
                  className={`${styles.project} ${
                    styles[project._projectClass]
                  } col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                >
                  <div className={`${styles.project_inner}`}>
                    <div className={`${styles.project_img}`}>
                      <img
                        data-src={project._img}
                        className="lazyload"
                        alt={`Image of ${project._name}`}
                      />
                    </div>

                    <div
                      className={`${styles.project_inner_box} container-fluid`}
                    >
                      <div className={`${styles.project_inner_row} row`}>
                        <div
                          className={`${styles.project_inner_side} ${styles.project_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.project_inner_side_cnt}`}>
                            <span className={`${styles.project_name}`}>
                              {project._name}
                            </span>

                            <span className={`${styles.project_client}`}>
                              {project._client}
                            </span>

                            <p>{project._desc}</p>
                          </div>
                        </div>
                        <div
                          className={`${styles.project_inner_side} ${styles.project_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                        >
                          <div className={`${styles.project_inner_side_cnt}`}>
                            <ul className={`${styles.project_links}`}>
                              <li
                                className={`${styles.project_code}`}
                                onClick={() => {
                                  window.open(project._code, "_blank");
                                }}
                              >
                                <span>Code</span>

                                <FaGithub />
                              </li>
                              <li
                                className={`${styles.project_demo}`}
                                onClick={() => {
                                  window.open(project._demo, "_blank");
                                }}
                              >
                                <span>Demo</span>

                                <FaGlobe />
                              </li>
                            </ul>

                            <ul className={`${styles.project_tools}`}>
                              {project._tools.map((tool) => (
                                <li>
                                  <img data-src={tool} className="lazyload" />
                                </li>
                              ))}
                            </ul>

                            <span className={`${styles.project_years}`}>
                              {project._years}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
