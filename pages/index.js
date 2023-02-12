// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports
import TriggerEnterAnimations from "@/assets/functions/dom/triggers/TriggerEnterAnimations";
import TriggerScrollAnimations from "@/assets/functions/dom/triggers/TriggerScrollAnimations";

import { KEYWORDS } from "@/assets/data/variables/ARRAYS";

import { ATI, FAVICON, F16, F32 } from "@/assets/cdns/CDNIcons";

// Component Imports
import { DesktopNav } from "@/assets/components/Nav/DesktopNav";
import { MobileNav } from "@/assets/components/Nav/MobileNav";

import { BackToTop } from "@/assets/components/Misc/BackToTop";

import { Top } from "@/assets/components/Top";
import { Info } from "@/assets/components/Info";
import { Projects } from "@/assets/components/Projects";
import { Contact } from "@/assets/components/Contact";

import { Footer } from "@/assets/components/Footer/Footer";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  //! Triggering the Enter Animations
  useEffect(() => {
    setTimeout(() => {
      TriggerEnterAnimations(router);
    }, 600);
  }, [router]);

  //! Triggering the Scroll Animations
  useEffect(() => {
    window.addEventListener("scroll", () => {
      TriggerScrollAnimations();
    });

    window.addEventListener("load", () => {
      TriggerScrollAnimations();
    });
  }, []);

  return (
    <div id="PAGE" className="overrides_Index index-page page">
      <Head>
        <title>codingthefront - Parker Phelps</title>

        <meta
          name="description"
          content="Parker Phelps is a Front End Web Developer who has spent the last 4+ years learning and creating front-end UIs that are sure to make the user feel and move around freely."
        />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={"codingthefront - Parker Phelps"} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={"https://codingthefront.com/"} />

        <link rel="canonical" href={"https://codingthefront.com/"} />
        <link rel="shortcut icon" href={FAVICON} />
        <link rel="apple-touch-icon" sizes="180x180" href={ATI} />
        <link rel="icon" type="image/png" sizes="32x32" href={F32} />
        <link rel="icon" type="image/png" sizes="16x16" href={F16} />
      </Head>

      <DesktopNav />
      <MobileNav />

      <BackToTop />

      <main id="PAGE_CNT" className="page-cnt">
        <Top />
        <Info />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
