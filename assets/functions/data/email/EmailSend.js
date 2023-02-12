/**
 *
 *  This uses EmailJS to send an email
 *
 */

import emailjs from "emailjs-com";

import CheckValidEmail from "./CheckValidEmail";
import CheckValidPhoneNumber from "./CheckValidPhoneNumber";

export default function EmailSend(
  rooter,
  formTarget,
  serviceID,
  templateID,
  code
) {
  let sentSuccess = false; // This is used to determine when the form was sent successfully

  const FN = document.getElementById("clientFN");
  const LN = document.getElementById("clientLN");
  const EMAIL = document.getElementById("clientEmail");
  const PHONE = document.getElementById("clientPhone");
  const SUBJECT = document.getElementById("clientSubject");
  const MESSAGE = document.getElementById("clientMessage");

  const CHECK_EMAIL = CheckValidEmail(EMAIL);
  const CHECK_PHONE = CheckValidPhoneNumber(PHONE);

  // Highlights invalid fields
  if (FN.value == "") {
    FN.style.border = "1px solid #e5305b";
  } else {
    FN.style.border = "none";
  }
  if (LN.value == "") {
    LN.style.border = "1px solid #e5305b";
  } else {
    LN.style.border = "none";
  }
  if (!CHECK_EMAIL) {
    EMAIL.style.border = "1px solid #e5305b";
  } else {
    EMAIL.style.border = "none";
  }
  if (!CHECK_PHONE) {
    PHONE.style.border = "1px solid #e5305b";
  } else {
    PHONE.style.border = "none";
  }
  if (SUBJECT.value == "") {
    SUBJECT.style.border = "1px solid #e5305b";
  } else {
    SUBJECT.style.border = "none";
  }
  if (MESSAGE.value == "") {
    MESSAGE.style.border = "1px solid #e5305b";
  } else {
    MESSAGE.style.border = "none";
  }

  // Checking if all fields are valid, then sends email
  if (
    FN.value == "" ||
    LN.value == "" ||
    !CHECK_EMAIL ||
    !CHECK_PHONE ||
    SUBJECT.value == "" ||
    MESSAGE.value == ""
  ) {
    // Prevent send
    formTarget.preventDefault();
  } else {
    formTarget.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, formTarget.target, code)
      .then((res) => {
        console.log(res);

        if (res.text == "OK") {
          sentSuccess = true;

          FN.style.border = "none";
          LN.style.border = "none";
          EMAIL.style.border = "none";
          PHONE.style.border = "none";
          SUBJECT.style.border = "none";
          MESSAGE.style.border = "none";

          setTimeout(() => {
            if (sentSuccess) {
              rooter.reload();
            }
          }, 300);
        }
      });
  }
}
