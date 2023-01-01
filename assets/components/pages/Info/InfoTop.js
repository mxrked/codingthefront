/**
 *
 *  This is the info top
 *
 */

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_LEFT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import styles from "../../../styles/modules/Info/Info.module.css";

export const InfoTop = () => {
  // Scroll Fades
  const INFO_TOP_CONTROLS = useAnimation();
  const [INFO_TOP_REF, INFO_TOP_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INFO_TOP_IN_VIEW) {
        INFO_TOP_CONTROLS.start("visible");
      }
    } else {
      INFO_TOP_CONTROLS.start("visible");
    }
  }, [INFO_TOP_CONTROLS, INFO_TOP_IN_VIEW]);

  return (
    <section id="infoTop" className={`${styles.info_top}`}>
      <motion.div
        className={`fm-animate fade-left half-second`}
        initial="hidden"
        animate={INFO_TOP_CONTROLS}
        ref={INFO_TOP_REF}
        variants={FADE_LEFT}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className={`${styles.above_major} half-second`}>Learn About</span>
        <h1 className="half-second">
          My Background<span>.</span>
        </h1>
        <p className="half-second">
          Learn about my background in becoming a front end web developer. You
          can also get a look at the different skills I have learned over the
          years.
        </p>
      </motion.div>
    </section>
  );
};
