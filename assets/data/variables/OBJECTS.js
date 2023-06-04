// This file is used to hold some objects

import Project from "../classes/Project";

import {
  ACCOUNT_GUARD_IMG,
  ANIMEX_STREAMING_IMG,
  A_FRESH_PLACE_IMG,
  FAUNAANDFLORA_IMG,
  FILEZOID_IMG,
  ONLYJOJO_IMG,
  RTSYVISUALS_IMG,
  SHARPQUILLS_IMG,
} from "../../cdns/CDNImgs";
import { PYQT, PYTHON, SQL, SASS, NEXTJS, REACT } from "../../cdns/CDNIcons";

const RTSYVISUALS_OBJ = new Project(
  "P_1",
  "project_1",
  "RTSYVisuals",
  "A photography-based website.",
  "Rick Dingwall, NC",
  "2023 - 2023",
  RTSYVISUALS_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/rtsyvisuals",
  "https://rtsyvisuals.com/"
);
const ANIMEX_OBJ = new Project(
  "P_2",
  "project_2",
  "Animex",
  "An anime-based streaming site.",
  "Personal Project",
  "2022 - 2022",
  ANIMEX_STREAMING_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/animex_streaming",
  "https://sparkling-dragon-f3af91.netlify.app/"
);
const ONLYJOJO_OBJ = new Project(
  "P_3",
  "project_3",
  "OnlyJojo",
  "A JJBA-based ecommerce site.",
  "Personal Project",
  "2022 - 2022",
  ONLYJOJO_IMG,
  [SASS, REACT],
  "https://github.com/mxrked/OnlyJojo",
  "https://startling-syrniki-d0dc90.netlify.app/"
);
const SHARPQUILLS_OBJ = new Project(
  "P_4",
  "project_4",
  "SharpQuills",
  "A hedgehog-based informational site.",
  "Personal Project",
  "2022 - 2022",
  SHARPQUILLS_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/SharpQuill_NEXTJS",
  "https://astounding-gaufre-f9428d.netlify.app/"
);
const AFRESHPLACE_OBJ = new Project(
  "P_5",
  "project_5",
  "A Fresh Place",
  "A food-based ecommerce site.",
  "Personal Project",
  "2022 - 2022",
  A_FRESH_PLACE_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/AFreshPlace",
  "https://startling-syrniki-d0dc90.netlify.app/"
);
const FAUNAANDFLORA_OBJ = new Project(
  "P_6",
  "project_6",
  "Fauna and Flora",
  "A plant-based informational site.",
  "Haytham Elkhair, NC",
  "2022 - 2022",
  FAUNAANDFLORA_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/floraandfauna",
  "https://fantastic-starburst-b0f940.netlify.app/"
);
const ACCOUNTGUARD_OBJ = new Project(
  "P_7",
  "project_7",
  "AccountGuard",
  "A account manager PyQt5 app.",
  "Personal Project",
  "2023 - 2023",
  ACCOUNT_GUARD_IMG,
  [PYTHON, PYQT, SQL],
  "https://github.com/mxrked/AccountGuard_PyQt5",
  undefined
);
const FILEZOID_OBJ = new Project(
  "P_8",
  "project_8",
  "Filezoid",
  "A file creator PyQt5 app.",
  "Personal Project",
  "2023 - 2023",
  FILEZOID_IMG,
  [PYTHON, PYQT],
  "https://github.com/mxrked/Filezoid",
  undefined
);

export {
  RTSYVISUALS_OBJ,
  ANIMEX_OBJ,
  ONLYJOJO_OBJ,
  SHARPQUILLS_OBJ,
  AFRESHPLACE_OBJ,
  FAUNAANDFLORA_OBJ,
  ACCOUNTGUARD_OBJ,
  FILEZOID_OBJ,
};
