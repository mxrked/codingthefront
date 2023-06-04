/**
 *
 *  This is the Index Contact
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

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexContact"
      className={`${styles.index_contact} overrides_IndexContact`}
    >
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.index_contact_inner}`}>
          <div className={`${styles.index_contact_inner_box} container-fluid`}>
            <div className={`${styles.index_contact_inner_row} row`}>
              <div
                className={`${styles.index_contact_inner_side} ${styles.index_contact_L} col-lg-7 col-md-7 col-sm-7 col-xs-7 order-lg-0 order-md-0 order-sm-1 order-1`}
              >
                <div className={`${styles.index_contact_inner_side_cnt}`}>
                  <h1>Making Contact.</h1>

                  <p>
                    You can contact Parker via the contact form or phone to
                    discuss project ideas and business opportunities.
                  </p>

                  <a href="/contact" className="half-second">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.index_contact_inner_side} ${styles.index_contact_R} col-lg-5 col-md-5 col-sm-5 col-xs-5 order-lg-1 order-md-1 order-sm-0 order-0`}
              >
                <div className={`${styles.index_contact_inner_side_cnt}`}>
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
