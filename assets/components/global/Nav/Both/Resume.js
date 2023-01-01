/**
 *
 *  This is the resume
 *
 */

import { useEffect } from "react";

import {
  FaDownload,
  FaTimes,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaSass,
  FaReact,
  FaJava,
  FaWordpress,
  FaGitAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiAdobexd, SiVisualstudio, SiNextdotjs } from "react-icons/si";

import RemoveStorageValue from "../../../../functions/data/storages/RemoveStorageValue";
import ReturnResumeSkillYears from "../../../../functions/data/returns/ReturnResumeSkillYears";
import ManipElementOpacVis from "../../../../functions/dom/manip/ManipElementOpacVis";

import { RESUME_PDF, RESUME_DOC, RESUME_DOCX } from "../../../../cdns/FILES";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

const Skill_Details = (props) => {
  return (
    <div>
      <span className={`${styles.skill_name} half-second`}>
        {props.skill_name}
      </span>
      <span className={`${styles.skill_years}`}>
        Years: <span className="skill-years">0</span>
      </span>
    </div>
  );
};

const Education = (props) => {
  return (
    <div className={`${styles.education}`}>
      <span className={`${styles.education_degree_type} half-second`}>
        {props.education_degree_type}
      </span>
      <span className={`${styles.education_name} half-second`}>
        {props.education_name}
      </span>
      <span className={`${styles.education_school} half-second`}>
        Forsyth Tech Community College - Winston-Salem, NC
      </span>
      <span className={`${styles.education_dates} half-second`}>
        {props.education_dates}
      </span>
    </div>
  );
};

export const Resume = (props) => {
  // Adding years to skills
  useEffect(() => {
    const SKILL_YEAR_HOLDERS = document.querySelectorAll(".skill-years");

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

    SKILL_YEAR_HOLDERS[0].innerHTML = HTML_YEARS;
    SKILL_YEAR_HOLDERS[1].innerHTML = CSS_YEARS;
    SKILL_YEAR_HOLDERS[2].innerHTML = JS_YEARS;
    SKILL_YEAR_HOLDERS[3].innerHTML = REACT_YEARS;
    SKILL_YEAR_HOLDERS[4].innerHTML = VB_YEARS;
    SKILL_YEAR_HOLDERS[5].innerHTML = BOOTSTRAP_YEARS;
    SKILL_YEAR_HOLDERS[6].innerHTML = SASS_YEARS;
    SKILL_YEAR_HOLDERS[7].innerHTML = NEXTJS_YEARS;
    SKILL_YEAR_HOLDERS[8].innerHTML = JAVA_YEARS;
    SKILL_YEAR_HOLDERS[9].innerHTML = WORDPRESS_YEARS;
    SKILL_YEAR_HOLDERS[10].innerHTML = GIT_YEARS;
    SKILL_YEAR_HOLDERS[11].innerHTML = XD_YEARS;
  }, []);

  // Changing skill icon color
  useEffect(() => {
    const SKILL_ICONS = document.querySelectorAll(".skill-icon");

    SKILL_ICONS[0].style.color = "orangered";
    SKILL_ICONS[1].style.color = "skyblue";
    SKILL_ICONS[2].style.color = "gold";
    SKILL_ICONS[3].style.color = "cyan";
    SKILL_ICONS[4].style.color = "#8c3fbf";
    SKILL_ICONS[5].style.color = "purple";
    SKILL_ICONS[6].style.color = "violet";
    SKILL_ICONS[7].style.color = "white";
    SKILL_ICONS[8].style.color = "orange";
    SKILL_ICONS[9].style.color = "#9e32e6";
    SKILL_ICONS[10].style.color = "darkred";
    SKILL_ICONS[11].style.color = "white";
  }, []);

  return (
    <div id="resume" className={`${styles.resume} full-second`}>
      <div className={`${styles.empty_space}`} />

      <div id="resumeCnt" className={`${styles.resume_cnt} half-second`}>
        <div className={styles.resume_cnt_inner}>
          <div className={`${styles.resume_cnt_top}`}>
            <h1 className="half-second">Parker Phelps</h1>

            <div>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/Parker101P"
                    target={"_blank"}
                    className="half-second"
                  >
                    <FaTwitter className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/parker.phelps.144"
                    target={"_blank"}
                    className="half-second"
                  >
                    <FaFacebook className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mxrked"
                    target={"_blank"}
                    className="half-second"
                  >
                    <FaGithub className={styles.icon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/parker-phelps-a121501b6/"
                    target={"_blank"}
                    className="half-second"
                  >
                    <FaLinkedin className={styles.icon} />
                  </a>
                </li>
              </ul>

              <button
                className="half-second"
                onClick={() => {
                  RemoveStorageValue("session", "Resume Opened");

                  document.getElementById("resume").style.pointerEvents =
                    "none";
                  document.getElementById("resume").style.overflowY = "hidden";

                  ManipElementOpacVis(
                    document.getElementById("resumeCnt"),
                    false
                  );

                  setTimeout(() => {
                    ManipElementOpacVis(
                      document.getElementById("resume"),
                      false
                    );
                  }, 700);

                  setTimeout(() => {
                    document.querySelector(".page-main-cnt").style.opacity = 1;
                    document.body.style.pointerEvents = "auto";
                    document.body.style.overflowY = "auto";
                  }, 900);
                }}
              >
                <FaTimes className={styles.icon} />
              </button>
            </div>
          </div>
          <div className={`${styles.resume_cnt_under_top}`}>
            <ul className={`${styles.contact}`}>
              <li className="half-second">pp101socials@gmail.com</li>
              <li className="half-second">codingthefront101@gmail.com</li>
              <li className="half-second">+1 (336) 831-3432</li>
            </ul>

            <ul className={`${styles.downloads}`}>
              <li>
                <div
                  className="half-second"
                  onClick={() => {
                    window.open(RESUME_PDF);
                  }}
                >
                  <span className="half-second">PDF</span>
                  <FaDownload className={`${styles.icon}`} />
                </div>
              </li>
              <li>
                <div
                  className="half-second"
                  onClick={() => {
                    window.open(RESUME_DOC);
                  }}
                >
                  <span className="half-second">Doc</span>
                  <FaDownload className={`${styles.icon}`} />
                </div>
              </li>
              <li>
                <div
                  className="half-second"
                  onClick={() => {
                    window.open(RESUME_DOCX);
                  }}
                >
                  <span className="half-second">DOCX</span>
                  <FaDownload className={`${styles.icon}`} />
                </div>
              </li>
            </ul>
          </div>

          <div className={`${styles.resume_cnt_motto}`}>
            <blockquote className="half-second">
              <span>"</span>Always work smarter, not harder, and when there is
              an issue there is always a solution!<span>"</span>
            </blockquote>
          </div>
          <div className={`${styles.resume_cnt_summary_and_objective}`}>
            <div>
              <span className="half-second">Summary</span>
              <p className="half-second">
                To seek out a career in the Front-End Web Development field.
                Experience includes collaborating in team-driven environments to
                create high-performance websites that customers and business
                both loves. Familiar with applicable design and user practices.
                Motivated professional offering Associate's Degree in both Web
                Technologies and Programming and Software Development. Adds
                value to any organization in need of great collaboration,
                interpersonal and multitasking abilities. Meets tight deadlines.
              </p>
            </div>
            <div>
              <span className="half-second">Objective</span>
              <p className="half-second">
                Recent graduate with an Associate's Degree in both Web
                Technologies and Programming and Software Development. Currently
                seeking to leverage skills in coding (HTML5, CSS3, JavaScript,
                Next.js, ReactJS), problem-solving, and communication to gain
                professional experience in a Front-End Developer role. Previous
                experience consists of personal website design projects, but
                possesses a strong desire to learn in a professional capacity.
              </p>
            </div>
          </div>
          <div className={`${styles.resume_cnt_skills}`}>
            <span className={`${styles.sect_name} half-second`}>Skills</span>

            <div className={styles.skills_holder}>
              <ul>
                <li>
                  <FaHtml5 className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="HTML5" />
                </li>
                <li>
                  <FaCss3 className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="CSS3" />
                </li>
                <li>
                  <FaJs className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Javascript" />
                </li>
                <li>
                  <FaReact className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="ReactJS" />
                </li>
                <li>
                  <SiVisualstudio className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Visual Basic" />
                </li>
                <li>
                  <FaBootstrap className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Bootstrap" />
                </li>
              </ul>
              <ul>
                <li>
                  <FaSass className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Sass/Scss" />
                </li>
                <li>
                  <SiNextdotjs className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Next.js" />
                </li>
                <li>
                  <FaGitAlt className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Git" />
                </li>
                <li>
                  <SiAdobexd className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Adobe XD" />
                </li>
                <li>
                  <FaJava className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Java" />
                </li>
                <li>
                  <FaWordpress className={`${styles.icon} skill-icon`} />
                  <Skill_Details skill_name="Wordpress" />
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.resume_cnt_experiences}`}>
            <span className={`${styles.sect_name} half-second`}>
              Experience
            </span>

            {props.data.map((experience) => (
              <div className={`${styles.experience}`}>
                <span className={`${styles.experience_name} half-second`}>
                  {experience.projectName}
                </span>
                <span className={`${styles.experience_client} half-second`}>
                  {experience.projectClient}
                </span>
                <div className="half-second">
                  <span className="half-second">{experience.projectStart}</span>
                  <span className="half-second"> - </span>
                  <span className="half-second">{experience.projectEnd}</span>
                </div>
                <ul>
                  {experience.projectAchievements.map((a) => (
                    <li className="half-second">{a}</li>
                  ))}
                </ul>

                <a
                  href={experience.projectDemoLink}
                  target={"_blank"}
                  className="half-second"
                >
                  <span>View Demo</span>
                </a>
              </div>
            ))}
          </div>
          <div className={`${styles.resume_cnt_educations}`}>
            <span className={`${styles.sect_name} half-second`}>Education</span>

            <Education
              education_degree_type="Associates"
              education_name="Programming and Software Development"
              education_dates="08/2020 - 05/2023"
            />
            <Education
              education_degree_type="Associates"
              education_name="Web Technologies"
              education_dates="09/2018 - 05/2020"
            />
            <Education
              education_degree_type="Certificate"
              education_name="Web Fundamentals"
              education_dates="03/2019"
            />
          </div>
        </div>
      </div>

      <div className={`${styles.empty_space}`} />
    </div>
  );
};
