/**
 *
 *  This is the Info Top
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
import { FILE_RESUME_PDF } from "@/assets/cdns/CDNFiles";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Info/Info.module.css";

export const InfoTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="infoTop" className={`${styles.info_top} overrides_InfoTop`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.info_top_inner}`}>
          <div className={`${styles.info_top_inner_box} container-fluid`}>
            <div className={`${styles.info_top_inner_row} row`}>
              <div
                className={`${styles.info_top_inner_side} ${styles.info_top_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.info_top_inner_side_cnt}`}>
                  <h1>About Parker.</h1>

                  <p>
                    Parker has dedicated his life to become a Web Developer and
                    Software Engineer. His story is quite the inspiring one
                    which you can learn about below.
                  </p>

                  <p>
                    If you would like to download and view his resume you can by
                    clicking this button:
                  </p>

                  <div
                    onClick={() => {
                      window.open(FILE_RESUME_PDF, "_blank");
                    }}
                    className={`${styles.download_resume} half-second`}
                  >
                    <span>My Resume</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.info_top_inner_side} ${styles.info_top_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <div className={`${styles.info_top_inner_side_cnt}`}>
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
