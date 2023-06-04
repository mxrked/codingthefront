/**
 *
 *  This is the Projects Top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";

import { FADE_IN } from "@/assets/animations/FADES";
import { IMG_LOTTIE_MOBILE_DEV } from "@/assets/cdns/CDNImgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Projects/Projects.module.css";

export const ProjectsTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="projectsTop"
      className={`${styles.projects_top} overrides_ProjectsTop`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.projects_top_inner}`}>
          <div className={`${styles.projects_top_inner_box} container-fluid`}>
            <div className={`${styles.projects_top_inner_row} row`}>
              <div
                className={`${styles.projects_top_inner_side} ${styles.projects_top_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.projects_top_inner_side_cnt}`}>
                  <h1>Current Projects.</h1>

                  <p>
                    Over the last 5+ years, Parker has created over 6+ projects
                    that are displayed for you to view/download.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.projects_top_inner_side} ${styles.projects_top_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <div className={`${styles.projects_top_inner_side_cnt}`}>
                  <Player
                    autoplay
                    loop
                    src={IMG_LOTTIE_MOBILE_DEV}
                    className={`${styles.lottie}`}
                    style={{ height: "300px", width: "300px" }}
                  ></Player>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
