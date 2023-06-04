/**
 *
 *  This is the Contact Top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Player } from "@lottiefiles/react-lottie-player";

import { FADE_IN } from "@/assets/animations/FADES";
import { IMG_LOTTIE_REACHING_OUT } from "@/assets/cdns/CDNImgs";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="contactTop"
      className={`${styles.contact_top} overrides_ContactTop`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.contact_top_inner}`}>
          <div className={`${styles.contact_top_inner_box} container-fluid`}>
            <div className={`${styles.contact_top_inner_row} row`}>
              <div
                className={`${styles.contact_top_inner_side} ${styles.contact_top_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
              >
                <div className={`${styles.contact_top_inner_side_cnt}`}>
                  <h1>Reach Out.</h1>

                  <p>
                    You can contact Parker via the contact form or phone to
                    discuss project ideas and business opportunities.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.contact_top_inner_side} ${styles.contact_top_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
              >
                <div className={`${styles.contact_top_inner_side_cnt}`}>
                  <Player
                    autoplay
                    loop
                    src={IMG_LOTTIE_REACHING_OUT}
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
