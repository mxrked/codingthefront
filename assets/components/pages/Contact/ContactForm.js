/**
 *
 *  This is the contact form
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADE_RIGHT } from "../../../animations/FRAMER_MOTION_ANIMATIONS";

import EmailSend from "../../../functions/data/email/EmailSend";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactForm = () => {
  const router = useRouter();

  // Scroll Fades
  const CONTACT_FORM_CONTROLS = useAnimation();
  const [CONTACT_FORM_REF, CONTACT_FORM_IN_VIEW] = useInView();
  useEffect(() => {
    if (window.scrollY < 100) {
      if (CONTACT_FORM_IN_VIEW) {
        CONTACT_FORM_CONTROLS.start("visible");
      }
    } else {
      CONTACT_FORM_CONTROLS.start("visible");
    }
  }, [CONTACT_FORM_CONTROLS, CONTACT_FORM_IN_VIEW]);

  return (
    <section id="contactForm" className={`${styles.contact_form}`}>
      <motion.div
        className={`${styles.contact_form_inner} fm-animate fade-right half-second`}
        initial="hidden"
        animate={CONTACT_FORM_CONTROLS}
        ref={CONTACT_FORM_REF}
        variants={FADE_RIGHT}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <form
          noValidate="novalidate" // This disables the tooltips
          className="half-second"
          onKeyUp={(e) => {
            const ALL_INPUTS = e.currentTarget.querySelectorAll(".form-field");

            // This will reset a field if there is a invalid border around it
            ALL_INPUTS.forEach((field) => {
              if (field.value !== "") {
                if (field.style.border != "none") {
                  field.style.border = "none";
                }
              }
            });
          }}
          onSubmit={(e) => {
            EmailSend(
              router,
              e,
              "service_amdtdgj",
              "template_i1i9p9i",
              "lDJjRNeJ2R54YI5Hq"
            );
          }}
        >
          <div className={`${styles.form_row} half-second`}>
            <div className={`${styles.form_set} ${styles.set_1} half-second`}>
              <label name="clientFN" className="half-second" for="clientFN">
                First Name
              </label>

              <input
                type="text"
                id="clientFN"
                name="clientFN"
                placeholder="John/Jane"
                className="half-second form-field"
                autoComplete="new-password"
              />
            </div>
            <div className={`${styles.form_set} ${styles.set_2} half-second`}>
              <label name="clientLN" className="half-second" for="clientLN">
                Last Name
              </label>

              <input
                type="text"
                id="clientLN"
                name="clientLN"
                placeholder="Doe"
                className="half-second form-field"
                autoComplete="new-password"
              />
            </div>
          </div>
          <div className={`${styles.form_row} half-second`}>
            <div className={`${styles.form_set} ${styles.set_3} half-second`}>
              <label
                name="clientEmail"
                className="half-second"
                for="clientEmail"
              >
                Email Address
              </label>

              <input
                type="email"
                id="clientEmail"
                name="clientEmail"
                placeholder="burner@burner.com"
                className="half-second form-field"
                autoComplete="new-password"
              />
            </div>
            <div className={`${styles.form_set} ${styles.set_4} half-second`}>
              <label
                name="clientPhone"
                className="half-second"
                for="clientPhone"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="clientPhone"
                name="clientPhone"
                placeholder="+1-202-555-0135"
                className="half-second form-field"
                autoComplete="new-password"
              />
            </div>
          </div>
          <div className={`${styles.form_row} half-second`}>
            <div className={`${styles.form_set} ${styles.set_5} half-second`}>
              <label
                name="clientSubject"
                className="half-second"
                for="clientSubject"
              >
                Subject of Message
              </label>

              <input
                type="text"
                id="clientSubject"
                name="clientSubject"
                placeholder="I would like to have a website made for me."
                className="half-second form-field"
                autoComplete="new-password"
              />
            </div>
          </div>
          <div className={`${styles.form_row} half-second`}>
            <div className={`${styles.form_set} ${styles.set_6} half-second`}>
              <label
                name="clientMessage"
                className="half-second"
                for="clientMessage"
              >
                Message
              </label>

              <textarea
                id="clientMessage"
                name="clientMessage"
                className="half-second form-field"
                placeholder="Can you create a website for me. Here are the details of what the website should be about."
              />
            </div>
          </div>
          <div className={`${styles.form_btns} half-second`}>
            <button type={"submit"} className={`${styles.submit} half-second`}>
              Send
            </button>
            <button
              type={"reset"}
              className={`${styles.reset} half-second`}
              onClick={() => {
                document.querySelectorAll(".form-field").forEach((field) => {
                  field.style.border = "none";
                });
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
