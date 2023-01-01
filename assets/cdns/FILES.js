/**
 *
 *  This will hold all the files urls from the cdn
 *
 */

import ReturnCDNItem from "../functions/data/returns/ReturnCDNItem";

const PROJECTS_JSON = ReturnCDNItem("file", "json", "PROJECTS", "json");

const RESUME_PDF = ReturnCDNItem(
  "file",
  "resume",
  "Parker_Phelps_Resume",
  "pdf"
);
const RESUME_DOC = ReturnCDNItem(
  "file",
  "resume",
  "Parker_Phelps_Resume",
  "doc"
);
const RESUME_DOCX = ReturnCDNItem(
  "file",
  "resume",
  "Parker_Phelps_Resume",
  "DOCX"
);

export { PROJECTS_JSON, RESUME_DOC, RESUME_DOCX, RESUME_PDF };
