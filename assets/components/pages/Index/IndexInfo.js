/**
 *
 *  This is the Index Info
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
import { IMG_LOTTIE_WEB_DEVELOPER } from "@/assets/cdns/CDNImgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

const GradientCircle = (props) => {
  return (
    <div className={styles[props.gradient_circle_class]}>
      <BackgroundImage
        src={BG_GRADIENT}
        className={`${styles.bg}`}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export const IndexInfo = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexInfo"
      className={`${styles.index_info} overrides_IndexInfo`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <GradientCircle gradient_circle_class="l_big" />
        <GradientCircle gradient_circle_class="l_small_1" />
        <GradientCircle gradient_circle_class="l_small_2" />
        <GradientCircle gradient_circle_class="m_small_1" />
        <GradientCircle gradient_circle_class="m_small_2" />
        <GradientCircle gradient_circle_class="r_big" />
        <GradientCircle gradient_circle_class="r_small_1" />
        <GradientCircle gradient_circle_class="r_small_2" />

        <div className={`${styles.index_info_inner}`}>
          <div className={`${styles.index_info_inner_box} container-fluid`}>
            <div className={`${styles.index_info_inner_row} row`}>
              <div
                className={`${styles.index_info_inner_side} ${styles.index_info_L} col-lg-7 col-md-7 col-sm-7 col-xs-7 order-lg-0 order-md-0 order-sm-1 order-1`}
              >
                <div className={`${styles.index_info_inner_side_cnt}`}>
                  <h1>About Parker.</h1>

                  <p>
                    Parker has dedicated his life to become a Web Developer and
                    Software Engineer. His story is quite the inspiring one.
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
                className={`${styles.index_info_inner_side} ${styles.index_info_R} col-lg-5 col-md-5 col-sm-5 col-xs-5 order-lg-1 order-md-1 order-sm-0 order-0`}
              >
                <div className={`${styles.index_info_inner_side_cnt}`}>
                  <Player
                    autoplay
                    loop
                    src={IMG_LOTTIE_WEB_DEVELOPER}
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
