/**
 *
 *  This is the info skills
 *
 */

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaSass,
  FaReact,
  FaJava,
  FaWordpress,
  FaGitAlt,
} from "react-icons/fa";
import { SiAdobexd, SiVisualstudio, SiNextdotjs } from "react-icons/si";

import { FADE_LEFT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import ReturnResumeSkillYears from "../../../functions/data/returns/ReturnResumeSkillYears";

import styles from "../../../styles/modules/Info/Info.module.css";

const Skill_Details = (props) => {
  return (
    <div>
      <span className={`${styles.skill_name} half-second`}>
        {props.skill_name}
      </span>
      <span className={`${styles.skill_years}`}>
        Years: <span className="info-skill-years">0</span>
      </span>
    </div>
  );
};

export const InfoSkills = () => {
  // Adding years to skills
  useEffect(() => {
    const INFO_SKILL_YEAR_HOLDERS =
      document.querySelectorAll(".info-skill-years");

    const HTML_YEARS = ReturnResumeSkillYears(3);
    const CSS_YEARS = ReturnResumeSkillYears(3);
    const JS_YEARS = ReturnResumeSkillYears(2);
    const REACT_YEARS = ReturnResumeSkillYears(2);
    const VB_YEARS = ReturnResumeSkillYears(2);
    const BOOTSTRAP_YEARS = ReturnResumeSkillYears(1);
    const SASS_YEARS = ReturnResumeSkillYears(1);
    const NEXTJS_YEARS = ReturnResumeSkillYears(1);
    const JAVA_YEARS = ReturnResumeSkillYears(1);
    const WORDPRESS_YEARS = ReturnResumeSkillYears(1);
    const GIT_YEARS = ReturnResumeSkillYears(1);
    const XD_YEARS = ReturnResumeSkillYears(1);

    INFO_SKILL_YEAR_HOLDERS[0].innerHTML = HTML_YEARS;
    INFO_SKILL_YEAR_HOLDERS[1].innerHTML = CSS_YEARS;
    INFO_SKILL_YEAR_HOLDERS[2].innerHTML = JS_YEARS;
    INFO_SKILL_YEAR_HOLDERS[3].innerHTML = REACT_YEARS;
    INFO_SKILL_YEAR_HOLDERS[4].innerHTML = VB_YEARS;
    INFO_SKILL_YEAR_HOLDERS[5].innerHTML = BOOTSTRAP_YEARS;
    INFO_SKILL_YEAR_HOLDERS[6].innerHTML = SASS_YEARS;
    INFO_SKILL_YEAR_HOLDERS[7].innerHTML = NEXTJS_YEARS;
    INFO_SKILL_YEAR_HOLDERS[8].innerHTML = JAVA_YEARS;
    INFO_SKILL_YEAR_HOLDERS[9].innerHTML = WORDPRESS_YEARS;
    INFO_SKILL_YEAR_HOLDERS[10].innerHTML = GIT_YEARS;
    INFO_SKILL_YEAR_HOLDERS[11].innerHTML = XD_YEARS;
  }, []);

  // Changing skill icon color
  useEffect(() => {
    const INFO_SKILL_ICONS = document.querySelectorAll(".info-skill-icon");

    INFO_SKILL_ICONS[0].style.color = "orangered";
    INFO_SKILL_ICONS[1].style.color = "skyblue";
    INFO_SKILL_ICONS[2].style.color = "gold";
    INFO_SKILL_ICONS[3].style.color = "cyan";
    INFO_SKILL_ICONS[4].style.color = "#8c3fbf";
    INFO_SKILL_ICONS[5].style.color = "purple";
    INFO_SKILL_ICONS[6].style.color = "violet";
    INFO_SKILL_ICONS[7].style.color = "white";
    INFO_SKILL_ICONS[8].style.color = "orange";
    INFO_SKILL_ICONS[9].style.color = "#9e32e6";
    INFO_SKILL_ICONS[10].style.color = "darkred";
    INFO_SKILL_ICONS[11].style.color = "white";
  }, []);

  // Scroll Fades
  const INFO_SKILLS_CONTROLS = useAnimation();
  const [INFO_SKILLS_REF, INFO_SKILLS_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (INFO_SKILLS_IN_VIEW) {
        INFO_SKILLS_CONTROLS.start("visible");
      }
    } else {
      INFO_SKILLS_CONTROLS.start("visible");
    }
  }, [INFO_SKILLS_CONTROLS, INFO_SKILLS_IN_VIEW]);

  return (
    <section id="infoSkills" className={`${styles.info_skills}`}>
      <motion.div
        className={`${styles.info_skills_inner} fm-animate fade-left half-second`}
        initial="hidden"
        animate={INFO_SKILLS_CONTROLS}
        ref={INFO_SKILLS_REF}
        variants={FADE_LEFT}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <h2 className="half-second">
          My Current Skills<span>.</span>
        </h2>

        <div className={`${styles.info_skills_holder}`}>
          <ul>
            <li>
              <FaHtml5 className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="HTML5" />
            </li>
            <li>
              <FaCss3 className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="CSS3" />
            </li>
            <li>
              <FaJs className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Javascript" />
            </li>
            <li>
              <FaReact className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="ReactJS" />
            </li>
            <li>
              <SiVisualstudio className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Visual Basic" />
            </li>
            <li>
              <FaBootstrap className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Bootstrap" />
            </li>
          </ul>
          <ul>
            <li>
              <FaSass className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Sass/Scss" />
            </li>
            <li>
              <SiNextdotjs className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Next.js" />
            </li>
            <li>
              <FaGitAlt className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Git" />
            </li>
            <li>
              <SiAdobexd className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Adobe XD" />
            </li>
            <li>
              <FaJava className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Java" />
            </li>
            <li>
              <FaWordpress className={`${styles.icon} info-skill-icon`} />
              <Skill_Details skill_name="Wordpress" />
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
