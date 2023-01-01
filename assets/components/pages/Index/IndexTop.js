/**
 *
 *  This is the index page top
 *
 */

import { useEffect } from "react";

import Lottie from "react-lottie-player";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HappyDevAnim from "../../../animations/lotties/happy-dev.json";
import { FADE_RIGHT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  // Scroll Fades
  const INDEX_TOP_CONTROLS = useAnimation();
  const [INDEX_TOP_REF, INDEX_TOP_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INDEX_TOP_IN_VIEW) {
        INDEX_TOP_CONTROLS.start("visible");
      }
    } else {
      INDEX_TOP_CONTROLS.start("visible");
    }
  }, [INDEX_TOP_CONTROLS, INDEX_TOP_IN_VIEW]);

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <motion.div
        className={`${styles.index_top_inner} fm-animate fade-right half-second container-fluid`}
        initial="hidden"
        animate={INDEX_TOP_CONTROLS}
        ref={INDEX_TOP_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`${styles.index_top_inner_row} row`}>
          <div
            className={`${styles.index_top_inner_side} ${styles.index_top_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
          >
            <div className={`${styles.index_top_inner_side_text}`}>
              <span className={`${styles.above_major} half-second`}>
                Hello. My Name Is
              </span>
              <h1 className="half-second">
                Parker Phelps<span>.</span>
              </h1>
              <p className="half-second">I Am A Front-End Web Developer.</p>

              <div className={`${styles.jumpers}`}>
                <div
                  className={`${styles.jumper} half-second`}
                  onClick={(e) => {
                    document.getElementById("indexInfo").scrollIntoView();
                  }}
                >
                  <span>Info</span>
                </div>
                <div
                  className={`${styles.jumper} half-second`}
                  onClick={(e) => {
                    document.getElementById("indexProjects").scrollIntoView();
                  }}
                >
                  <span>Projects</span>
                </div>
                <div
                  className={`${styles.jumper} half-second`}
                  onClick={(e) => {
                    document.getElementById("indexContact").scrollIntoView();
                  }}
                >
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.index_top_inner_side} ${styles.index_top_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
          >
            <div>
              <Lottie
                animationData={HappyDevAnim}
                play
                loop
                className={`${styles.lottie} lottie half-second`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
