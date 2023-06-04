/**
 *
 *  This is the Info Main
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaWix,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNextdotjs,
  SiMicrosoftsqlserver,
  SiVisualstudio,
  SiAdobexd,
} from "react-icons/si";

import { FADE_IN } from "@/assets/animations/FADES";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Info/Info.module.css";

export const InfoMain = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  const SKILL_NAMES = [
    "HTML",
    "CSS",
    "Sass",
    "Javascript",
    "Bootstrap",
    "ReactJS",
    "Next.js",
    "SQL",
    "Python",
    "Java",
    "PHP",
    "Git",
    "Wix",
    "WordPress",
    "Visual Basic",
    "Adobe XD",
  ];
  const SKILL_ICONS = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <FaSass />,
    <IoLogoJavascript />,
    <FaBootstrap />,
    <FaReact />,
    <SiNextdotjs />,
    <SiMicrosoftsqlserver />,
    <FaPython />,
    <FaJava />,
    <FaPhp />,
    <FaGitAlt />,
    <FaWix />,
    <FaWordpress />,
    <SiVisualstudio />,
    <SiAdobexd />,
  ];

  return (
    <section id="infoMain" className={`${styles.info_main} overrides_InfoMain`}>
      <motion.div
        className={`${styles.motion} fm-motion full-second fade-in`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.info_main_inner}`}>
          <div className={`${styles.info_main_inner_box} container-fluid`}>
            <div className={`${styles.info_main_inner_row} row`}>
              <div
                className={`${styles.info_main_inner_side} ${styles.info_main_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.info_main_inner_side_cnt}`}>
                  <h1>The Journey.</h1>

                  <p>
                    He started his journey due to inspiration by his grandpa who
                    would create websites dedicated to his farm/tractor
                    equipment businesses.
                  </p>

                  <p>
                    After realizing this is what Parker wanted to do, he went to
                    college and graduated with 2 Associate's Degrees: Web
                    Technologies, Programming and Software Development.
                  </p>
                </div>
              </div>
              <div
                className={`${styles.info_main_inner_side} ${styles.info_main_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.info_main_inner_side_cnt}`}>
                  <h2>His Skills.</h2>

                  <div className={`${styles.skills_holder}`}>
                    <ul>
                      {SKILL_NAMES.map((skillName, index) => (
                        <li key={index}>
                          <span className={`${styles.skill_name}`}>
                            {skillName}
                          </span>{" "}
                          <span className={`${styles.icon_holder}`}>
                            {SKILL_ICONS[index]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
