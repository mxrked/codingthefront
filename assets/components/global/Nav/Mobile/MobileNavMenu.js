/**
 *
 *  This is the Mobile Nav Menu
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { FaTimes } from "react-icons/fa";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        className={`${styles.darken} full-second`}
        id="mobileNavDarken"
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        className={`${styles.mobile_nav_menu_main} full-second`}
        id="mobileNavMain"
      >
        <div
          className={`${styles.mobile_nav_menu_main_cnt} half-second`}
          id="mobileNavMainCnt"
        >
          <button
            className="half-second"
            onClick={() => {
              CloseMobileNav();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>

          <ul>
            <li>
              <a href="/" className="index-link nav-link half-second">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="projects-link nav-link half-second"
              >
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="/info" className="info-link nav-link half-second">
                <span>Info</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="contact-link nav-link half-second">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
