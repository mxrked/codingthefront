/**
 *
 * This is the Projects Page
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { PageHead } from "@/assets/components/global/All/PageHead";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";

import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

import { ProjectsTop } from "@/assets/components/pages/Projects/ProjectsTop";
import { ProjectsMain } from "@/assets/components/pages/Projects/ProjectsMain";

import { Footer } from "@/assets/components/global/Footer/Footer";

import styles from "../assets/styles/modules/Projects/Projects.module.css";

export default function Projects() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".projects-link");
  }, []);

  return (
    <div id="PAGE" className="page overrides_Projects full-second">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT">
        <ProjectsTop />
        <ProjectsMain />

        <Footer />
      </main>
    </div>
  );
}
