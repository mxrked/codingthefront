/**
 *
 *  This is the footer
 *
 */

import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { RESUME_PDF } from "../../cdns/CDNFiles";

import ReturnElementTopPos from "@/assets/functions/dom/returns/ReturnElementTopPos";

import styles from "../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  return (
    <footer id="footer" className={`${styles.footer}`}>
      <div className={`${styles.footer_inner} fade-up scroll-fade full-second`}>
        <h1>codingthefront</h1>

        <ul className={`${styles.jumpers}`}>
          <li>
            <span
              className="half-second footer-jumper"
              onClick={() => {
                const Y = ReturnElementTopPos("top", window);
                window.scrollTo({ top: Y });
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              Top
            </span>
          </li>
          <li>
            <span
              className="half-second footer-jumper"
              onClick={() => {
                const Y = ReturnElementTopPos("info", window);
                window.scrollTo({ top: Y });
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              Info
            </span>
          </li>
          <li>
            <span
              className="half-second footer-jumper"
              onClick={() => {
                const Y = ReturnElementTopPos("projects", window);
                window.scrollTo({ top: Y });
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              Projects
            </span>
          </li>
          <li>
            <span
              className="half-second footer-jumper"
              onClick={() => {
                const Y = ReturnElementTopPos("contact", window);
                window.scrollTo({ top: Y });
              }}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-jumper").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              Contact
            </span>
          </li>
        </ul>

        <ul className={`${styles.socials}`}>
          <li>
            <a
              href="https://twitter.com/Parker101P"
              className="half-second footer-social"
              target={"_blank"}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              <FaTwitter className={`${styles.icon}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/parker.phelps.144"
              className="half-second footer-social"
              target={"_blank"}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              <FaFacebook className={`${styles.icon}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/parker-phelps-a121501b6/"
              className="half-second footer-social"
              target={"_blank"}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              <FaLinkedin className={`${styles.icon}`} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mxrked"
              className="half-second footer-social"
              target={"_blank"}
              onMouseEnter={(e) => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 0.5;
                });

                e.currentTarget.style.opacity = 1;
              }}
              onMouseLeave={() => {
                document.querySelectorAll(".footer-social").forEach((link) => {
                  link.style.opacity = 1;
                });
              }}
            >
              <FaGithub className={`${styles.icon}`} />
            </a>
          </li>
        </ul>

        <div className={`${styles.contact}`}>
          <span>+1 (336) 831 3432</span>
          <span>codingthefront101@gmail.com</span>
          <span>pp101socials@gmail.com</span>
        </div>

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
      </div>
    </footer>
  );
};
