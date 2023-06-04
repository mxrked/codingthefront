/**
 *
 * This is the Contact Page
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

import { ContactTop } from "@/assets/components/pages/Contact/ContactTop";
import { ContactForm } from "@/assets/components/pages/Contact/ContactForm";

import { Footer } from "@/assets/components/global/Footer/Footer";

import styles from "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  // Triggering exit animations
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".contact-link");
  }, []);

  return (
    <div id="PAGE" className="page overrides_Contact full-second">
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="PAGE_CNT">
        <ContactTop />
        <ContactForm />

        <Footer />
      </main>
    </div>
  );
}
