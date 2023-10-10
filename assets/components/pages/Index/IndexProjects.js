/**
 *
 *  This is the Index Projects
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

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexProjects = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexProjects"
      className={`${styles.index_projects} overrides_IndexProjects`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.index_projects_inner}`}>
          <div className={`${styles.index_projects_inner_box} container-fluid`}>
            <div className={`${styles.index_projects_inner_row} row`}>
              <div
                className={`${styles.index_projects_inner_side} ${styles.index_projects_L} col-lg-7 col-md-7 col-sm-7 col-xs-7 order-lg-0 order-md-0 order-sm-1 order-1`}
              >
                <div className={`${styles.index_projects_inner_side_cnt}`}>
                  <h1>Current Projects.</h1>

                  <p>
                    Over the last 5+ years, Parker has created over 6+ projects
                    that are displayed for you to view/download.
                  </p>

                  <button
                    onClick={() => {
                      router.push("/info");
                    }}
                    className="half-second"
                  >
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
              <div
                className={`${styles.index_projects_inner_side} ${styles.index_projects_R} col-lg-5 col-md-5 col-sm-5 col-xs-5 order-lg-1 order-md-1 order-sm-0 order-0`}
              >
                <div className={`${styles.index_projects_inner_side_cnt}`}>
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
