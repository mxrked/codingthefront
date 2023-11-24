/**
 *
 *  This is the Index Projects
 *
 */

import { useRouter } from "next/router";

import { FaReact, FaSass } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import TriggerPageExit from "@/assets/functions/dom/triggers/TriggerPageExit";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexProjects = ({ projects_data }) => {
  return (
    <section id="indexProjects" className={`${styles.index_projects}`}>
      <div className={`${styles.index_projects_inner}`}></div>
    </section>
  );
};
