/**
 *
 *  This is the Footer
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";
import {
  FaCode,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { BG_GRADIENT } from "@/assets/cdns/CDNBgs";
import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Footer/Footer.module.css";

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

export const Footer = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <section id="footerHolder" className={`${styles.footer_holder}`}>
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
        <footer className={`${styles.footer}`}>
          <BackgroundImage
            src={BG_GRADIENT}
            width="100%"
            height="100%"
            className={`${styles.bg}`}
          />

          <div className={`${styles.footer_inner}`}>
            <div className={`${styles.footer_inner_box} container-fluid`}>
              <div className={`${styles.footer_inner_row} row`}>
                <div
                  className={`${styles.footer_inner_side} ${styles.footer_L} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
                >
                  <div className={`${styles.footer_inner_side_cnt}`}>
                    <div className={`${styles.logo}`}>
                      <a href="/" className="index-link half-second">
                        <FaCode className={`${styles.icon}`} />

                        <span>codingthefront</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.footer_inner_side} ${styles.footer_M} col-lg-3 col-md-3 col-sm-3 col-xs-3`}
                >
                  <div className={`${styles.footer_inner_side_cnt}`}>
                    <ul>
                      <li>
                        <a href="/" className="half-second index-link">
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="/info" className="half-second info-link">
                          <span>Info</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/projects"
                          className="half-second projects-link"
                        >
                          <span>Projects</span>
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="half-second contact-link">
                          <span>Contact</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.footer_inner_side} ${styles.footer_R} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
                >
                  <div className={`${styles.footer_inner_side_cnt}`}>
                    <ul className={`${styles.contact}`}>
                      <li>
                        <span className="half-second">
                          codingthefront@gmail.com
                        </span>
                      </li>
                      <li>
                        <span className="half-second">+1 (336)-831-3432</span>
                      </li>
                    </ul>

                    <ul className={`${styles.socials}`}>
                      <li>
                        <div
                          onClick={() => {
                            window.open(
                              "https://twitter.com/Parker101P",
                              "_blank"
                            );
                          }}
                          className="half-second"
                        >
                          <FaTwitter className={`${styles.icon}`} />
                        </div>
                      </li>
                      <li>
                        <div
                          onClick={() => {
                            window.open(
                              "https://www.facebook.com/parker.phelps.144",
                              "_blank"
                            );
                          }}
                          className="half-second"
                        >
                          <FaFacebook className={`${styles.icon}`} />
                        </div>
                      </li>
                      <li>
                        <div
                          onClick={() => {
                            window.open(
                              "https://www.linkedin.com/in/parker-phelps-a121501b6/",
                              "_blank"
                            );
                          }}
                          className="half-second"
                        >
                          <FaLinkedin className={`${styles.icon}`} />
                        </div>
                      </li>
                      <li>
                        <div
                          onClick={() => {
                            window.open("https://github.com/mxrked", "_blank");
                          }}
                          className="half-second"
                        >
                          <FaGithub className={`${styles.icon}`} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </section>
  );
};
