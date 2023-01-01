/**
 *
 *  This is the info background
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { IMG_OF_ME } from "../../../cdns/IMGS";
import { FADE_RIGHT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";

import styles from "../../../styles/modules/Info/Info.module.css";

export const InfoBackground = () => {
  const router = useRouter();

  let projectsRouted = false;

  // Scroll Fades
  const INFO_BACKGROUND_CONTROLS = useAnimation();
  const [INFO_BACKGROUND_REF, INFO_BACKGROUND_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INFO_BACKGROUND_IN_VIEW) {
        INFO_BACKGROUND_CONTROLS.start("visible");
      }
    } else {
      INFO_BACKGROUND_CONTROLS.start("visible");
    }
  }, [INFO_BACKGROUND_CONTROLS, INFO_BACKGROUND_IN_VIEW]);

  return (
    <section id="infoBackground" className={`${styles.info_background}`}>
      <motion.div
        className={`${styles.info_background_inner} container-fluid fade-right fm-animate half-second`}
        initial="hidden"
        animate={INFO_BACKGROUND_CONTROLS}
        ref={INFO_BACKGROUND_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className={`${styles.info_background_inner_row} row`}>
          <div
            className={`${styles.info_background_inner_side} ${styles.info_background_L} col-lg-7 col-md-7 col-sm-7 col-xs-7 order-sm-0 order-1`}
          >
            <div className={`${styles.info_background_inner_side_cnt}`}>
              <h2 className="half-second">
                About Me<span>.</span>
              </h2>

              <p className="half-second">
                I am a passionate Front End Web Developer. During my years of
                learning the basics and mastering them, I have managed to create
                many wonderful projects for the user and I am always willing to
                start a project for anyone.
              </p>

              <div
                className="half-second"
                onClick={() => {
                  TriggerExitAnimations();

                  setTimeout(() => {
                    PageRouting(router, "/projects", projectsRouted);
                  }, 1000);
                }}
              >
                <span>View Work</span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.info_background_inner_side} ${styles.info_background_R} col-lg-5 col-md-5 col-sm-5 col-xs-5 order-sm-1 order-0`}
          >
            <div className={`${styles.info_background_inner_side_cnt}`}>
              <img
                data-src={IMG_OF_ME}
                className="lazyload half-second"
                alt="Image of Parker Phelps"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
