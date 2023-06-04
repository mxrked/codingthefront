/**
 *
 * This is the Index Page
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
import { Footer } from "@/assets/components/global/Footer/Footer";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexInfo } from "@/assets/components/pages/Index/IndexInfo";
import { IndexProjects } from "@/assets/components/pages/Index/IndexProjects";
import { IndexContact } from "@/assets/components/pages/Index/IndexContact";

import styles from "../assets/styles/modules/Index/Index.module.css";

export default function Index() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".index-link");
  }, []);

  return (
    <div id="PAGE" className="page overrides_Index full-second">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT">
        <IndexTop />
        <IndexInfo />
        <IndexProjects />
        <IndexContact />
        <Footer />
      </main>
    </div>
  );
}
