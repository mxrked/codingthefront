/**
 *
 *  This is the Index Top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { Player } from "@lottiefiles/react-lottie-player";

import { FADE_IN } from "@/assets/animations/FADES";
import { BG_GRADIENT } from "@/assets/cdns/CDNBgs";
import { IMG_LOTTIE_DRAWING } from "@/assets/cdns/CDNImgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

// const GradientCircle = (props) => {
//   return <div className={`${styles[props.gradient_circle_class]}`} />;
// };

export const IndexTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <BackgroundImage
          src={BG_GRADIENT}
          className={`${styles.bg}`}
          width="100%"
          height="100%"
        />

        <div className={`${styles.index_top_inner}`}>
          <div className={`${styles.index_top_inner_box} container-fluid`}>
            <div className={`${styles.index_top_inner_row} row`}>
              <div
                className={`${styles.index_top_inner_side} ${styles.index_top_L} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <div className={`${styles.index_top_inner_side_cnt}`}>
                  <h1>
                    Hi, My name is <br />
                    Parker.
                  </h1>
                  <h2>
                    I am a <br />
                    Web Developer.
                  </h2>

                  <ul>
                    <li>
                      <a href="/info" className="half-second">
                        <span>Info</span>
                      </a>
                    </li>
                    <li>
                      <a href="/projects" className="half-second">
                        <span>Projects</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.index_top_inner_side} ${styles.index_top_R} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.index_top_inner_side_cnt}`}>
                  <Player
                    autoplay
                    loop
                    src={IMG_LOTTIE_DRAWING}
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
