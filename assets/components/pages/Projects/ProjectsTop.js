/**
 *
 *  This is the projects top
 *
 */

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_LEFT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../styles/modules/Projects/Projects.module.css";

export const ProjectsTop = () => {
  // Scroll Fades
  const PROJECTS_TOP_CONTROLS = useAnimation();
  const [PROJECTS_TOP_REF, PROJECTS_TOP_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (PROJECTS_TOP_IN_VIEW) {
        PROJECTS_TOP_CONTROLS.start("visible");
      }
    } else {
      PROJECTS_TOP_CONTROLS.start("visible");
    }
  }, [PROJECTS_TOP_CONTROLS, PROJECTS_TOP_IN_VIEW]);

  return (
    <section id="projectsTop" className={`${styles.projects_top}`}>
      <motion.div
        className={`fm-animate fade-left half-second`}
        initial="hidden"
        animate={PROJECTS_TOP_CONTROLS}
        ref={PROJECTS_TOP_REF}
        variants={FADE_LEFT}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className={`${styles.above_major} half-second`}>View My</span>
        <h1 className="half-second">
          Current Projects<span>.</span>
        </h1>
        <p className="half-second">
          Below are all of the projects I have created over the last 3-4 years I
          have been learning how to become a Front End Web Developer. All of
          these projects were made from scratch and no templates were used in
          the creation process.
        </p>
      </motion.div>
    </section>
  );
};
