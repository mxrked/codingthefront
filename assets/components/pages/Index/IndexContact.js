/**
 *
 *  This is the index contact
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import Lottie from "react-lottie-player";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ContactWheelAnim from "../../../animations/lotties/contact-wheel.json";
import { FADE_LEFT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import TriggerExitAnimations from "../../../functions/dom/triggers/TriggerExitAnimations";
import PageRouting from "../../../functions/routing/PageRouting";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const router = useRouter();

  let contactRouted = false;

  // Scroll Fades
  const INDEX_CONTACT_CONTROLS = useAnimation();
  const [INDEX_CONTACT_REF, INDEX_CONTACT_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INDEX_CONTACT_IN_VIEW) {
        INDEX_CONTACT_CONTROLS.start("visible");
      }
    } else {
      INDEX_CONTACT_CONTROLS.start("visible");
    }
  }, [INDEX_CONTACT_CONTROLS, INDEX_CONTACT_IN_VIEW]);

  return (
    <section id="indexContact" className={`${styles.index_contact}`}>
      <motion.div
        className={`${styles.index_contact_inner} fm-animate fade-left half-second container-fluid`}
        initial="hidden"
        animate={INDEX_CONTACT_CONTROLS}
        ref={INDEX_CONTACT_REF}
        variants={FADE_LEFT}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={`${styles.index_contact_inner_row} row`}>
          <div
            className={`${styles.index_contact_inner_side} ${styles.index_contact_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
          >
            <div className={`${styles.index_contact_inner_side_cnt}`}>
              <span className={`${styles.above_major} half-second`}>
                Want To
              </span>
              <h1 className="half-second">
                Contact Me<span>?</span>
              </h1>

              <p className="half-second">
                There are many different ways you can reach out to me, but the
                easiest and most straight-forward would by using the contact
                form. You can also find other ways to contact me on the same
                page as the form.
              </p>

              <div
                className={`${styles.link} contact-link half-second`}
                onClick={() => {
                  TriggerExitAnimations();

                  setTimeout(() => {
                    PageRouting(router, "/contact", contactRouted);
                  }, 1000);
                }}
              >
                <span className="half-second">Learn More</span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.index_contact_inner_side} ${styles.index_contact_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
          >
            <div>
              <Lottie
                animationData={ContactWheelAnim}
                loop
                play
                className={`${styles.lottie} lottie half-second`}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
