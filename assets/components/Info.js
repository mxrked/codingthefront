/**
 *
 *  This is the info
 *
 */

import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { SKILLS } from "../data/variables/ARRAYS";
import { RESUME_PDF } from "../cdns/CDNFiles";

import styles from "../styles/modules/Index/Index.module.css";

export const Info = () => {
  return (
    <section id="info" className={`${styles.info}`}>
      <div
        className={`${styles.info_inner} fade-right scroll-fade full-second`}
      >
        <div className={`${styles.info_inner_box} container-fluid`}>
          <div className={`${styles.info_inner_row} row`}>
            <div
              className={`${styles.info_inner_side} ${styles.info_L} col-lg-7 col-md-7 col-sm-7 col-xs-7`}
            >
              <div className={`${styles.info_inner_side_cnt}`}>
                <h1>
                  Parker's <span>Background</span>.
                </h1>

                <p>
                  A determined and passionate front end web developer who is
                  always on track and confident in getting a product/project
                  finished and one that meets the quality of what the user
                  expects.
                </p>

                <div className={`${styles.resume_downloader}`}>
                  <span
                    className="half-second"
                    onClick={() => {
                      window.location.href = RESUME_PDF;
                    }}
                  >
                    Download Resume
                  </span>
                </div>

                <ul>
                  <li>
                    <a
                      href="https://twitter.com/Parker101P"
                      className="half-second"
                      target={"_blank"}
                    >
                      <FaTwitter className={`${styles.icon}`} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/parker.phelps.144"
                      className="half-second"
                      target={"_blank"}
                    >
                      <FaFacebook className={`${styles.icon}`} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/parker-phelps-a121501b6/"
                      className="half-second"
                      target={"_blank"}
                    >
                      <FaLinkedin className={`${styles.icon}`} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mxrked"
                      className="half-second"
                      target={"_blank"}
                    >
                      <FaGithub className={`${styles.icon}`} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.info_inner_side} ${styles.info_R} col-lg-5 col-md-5 col-sm-5 col-xs-5`}
            >
              <div className={`${styles.info_inner_side_cnt}`}>
                <span className={styles.my_skills}>My Skills</span>

                <div className={`${styles.skills_holder}`}>
                  {SKILLS.map((skill) => (
                    <div
                      className={`${styles.skill} skill half-second`}
                      onMouseEnter={(e) => {
                        const SKILLS = document.querySelectorAll(".skill");

                        SKILLS.forEach((s) => {
                          s.style.opacity = 0.5;
                        });

                        e.currentTarget.style.opacity = 1;
                      }}
                      onMouseLeave={() => {
                        const SKILLS = document.querySelectorAll(".skill");

                        SKILLS.forEach((s) => {
                          s.style.opacity = 1;
                        });
                      }}
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
