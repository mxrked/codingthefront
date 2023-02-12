/**
 *
 *  This is the info
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import EmailSend from "../functions/data/email/EmailSend";

import styles from "../styles/modules/Index/Index.module.css";

export const Contact = () => {
  const router = useRouter();

  return (
    <section id="contact" className={`${styles.contact}`}>
      <div
        className={`${styles.contact_inner} fade-right scroll-fade full-second`}
      >
        <h1>
          Contact <span>Me</span>.
        </h1>

        <div className={`${styles.form_holder}`}>
          <form
            noValidate="noValidate"
            autoComplete={"false"}
            onKeyUp={(e) => {
              const ALL_INPUTS =
                e.currentTarget.querySelectorAll(".form-field");
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
            <div className={`${styles.form_multi_group}`}>
              <div className={`${styles.form_set}`}>
                <input
                  type="text"
                  id="clientFN"
                  name="clientFN"
                  placeholder="First Name"
                  className="half-second form-field"
                  autoComplete={"off"}
                  role={"presentation"}
                  onClick={(e) => {
                    e.currentTarget.placeholder = "Type something";
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.length <= 0) {
                      e.currentTarget.placeholder = "First Name";
                    }
                  }}
                />
              </div>
              <div className={`${styles.form_set}`}>
                <input
                  type="text"
                  id="clientLN"
                  name="clientLN"
                  placeholder="Last Name"
                  className="half-second form-field"
                  autoComplete={"off"}
                  role={"presentation"}
                  onClick={(e) => {
                    e.currentTarget.placeholder = "Type something";
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.length <= 0) {
                      e.currentTarget.placeholder = "Last Name";
                    }
                  }}
                />
              </div>
            </div>
            <div className={`${styles.form_multi_group}`}>
              <div className={`${styles.form_set}`}>
                <input
                  type="email"
                  id="clientEmail"
                  name="clientEmail"
                  placeholder="Email Address"
                  className="half-second form-field"
                  autoComplete={"off"}
                  role={"presentation"}
                  onClick={(e) => {
                    e.currentTarget.placeholder = "Type something";
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.length <= 0) {
                      e.currentTarget.placeholder = "Email Address";
                    }
                  }}
                />
              </div>
              <div className={`${styles.form_set}`}>
                <input
                  type="tel"
                  id="clientPhone"
                  name="clientPhone"
                  placeholder="Phone Number (with country code)"
                  className="half-second form-field"
                  autoComplete={"off"}
                  role={"presentation"}
                  onClick={(e) => {
                    e.currentTarget.placeholder = "Type something";
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.length <= 0) {
                      e.currentTarget.placeholder =
                        "Phone Number (with country code)";
                    }
                  }}
                />
              </div>
            </div>

            <div className={`${styles.form_single_group}`}>
              <div className={`${styles.form_set}`}>
                <input
                  type="text"
                  id="clientSubject"
                  name="clientSubject"
                  placeholder="I would like to have a website made for me."
                  className="half-second form-field"
                  autoComplete={"off"}
                  role={"presentation"}
                  onClick={(e) => {
                    e.currentTarget.placeholder = "Type something";
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.length <= 0) {
                      e.currentTarget.placeholder =
                        "I would like to have a website made for me.";
                    }
                  }}
                />
              </div>
            </div>
            <div className={`${styles.form_textarea_group}`}>
              <div className={`${styles.form_set}`}>
                <textarea
                  id="clientMessage"
                  name="clientMessage"
                  className="half-second form-field"
                  placeholder="Can you create a website for me. Here are the details of what the website should be about."
                  data-gramm="false"
                  data-gramm_editor="false"
                  data-enable-grammarly="false"
                  onClick={(e) => {
                    e.currentTarget.placeholder = "Type something";
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value.length <= 0) {
                      e.currentTarget.placeholder =
                        "Can you create a website for me. Here are the details of what the website should be about.";
                    }
                  }}
                />
              </div>
            </div>

            <div className={`${styles.form_btns}`}>
              <button
                type={"submit"}
                className={`${styles.submit} half-second`}
              >
                Send Form
              </button>
              <button
                type={"reset"}
                className={`${styles.reset} half-second`}
                onClick={() => {
                  // Removing borders
                  document.querySelectorAll(".form-field").forEach((field) => {
                    field.style.border = "none";
                  });

                  // Resetting placeholder values
                  const PLACEHOLDER_VALUES = [
                    "First Name",
                    "Last Name",
                    "Email Address",
                    "Phone Number (with country code)",
                    "I would like to have a website made for me.",
                    "Can you create a website for me. Here are the details of what the website should be about.",
                  ];

                  document.querySelectorAll(".form-field")[0].placeholder =
                    PLACEHOLDER_VALUES[0];
                  document.querySelectorAll(".form-field")[1].placeholder =
                    PLACEHOLDER_VALUES[1];
                  document.querySelectorAll(".form-field")[2].placeholder =
                    PLACEHOLDER_VALUES[2];
                  document.querySelectorAll(".form-field")[3].placeholder =
                    PLACEHOLDER_VALUES[3];
                  document.querySelectorAll(".form-field")[4].placeholder =
                    PLACEHOLDER_VALUES[4];
                  document.querySelectorAll(".form-field")[5].placeholder =
                    PLACEHOLDER_VALUES[5];
                }}
              >
                Reset Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
