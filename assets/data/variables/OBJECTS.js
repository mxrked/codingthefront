// This file is used to hold some objects

import Project from "../classes/Project";

import {
  PYQT,
  PYTHON,
  SQL,
  SASS,
  NEXTJS,
  REACT,
  WIX,
  EDITOR_X,
  SQLALCHEMY,
} from "../../cdns/CDNIcons";
import {
  ACCOUNT_GUARD_IMG,
  ANIMEX_STREAMING_IMG,
  A_FRESH_PLACE_IMG,
  FAUNAANDFLORA_IMG,
  FILEZOID_IMG,
  MEDICAL_OFFICE_ADMINISTRATION_IMG,
  ONLYJOJO_IMG,
  RTSYVISUALS_IMG,
  SHARPQUILLS_IMG,
  FIBERCOMPANY_IMG,
} from "../../cdns/CDNImgs";

const RTSYVISUALS_OBJ = new Project(
  "P_01",
  "RTSYVisuals",
  RTSYVISUALS_IMG,
  "Client: Rick Dingwall",
  750.0,
  "A photography website for Rick Dingwall's business.",
  [REACT, NEXTJS, SASS],
  "https://rtsyvisuals.com/",
  "https://github.com/mxrked/rtsyvisuals"
);
const FIBERCOMPANY_OBJ = new Project(
  "P_02",
  "Fiber Company",
  FIBERCOMPANY_IMG,
  "Client: Fiber Company",
  200.0,
  "A arts/crafts website dedicated to the Fiber Company.",
  [WIX, EDITOR_X],
  "https://www.fibercompanync.com/",
  undefined
);
const ANIMEX_STREAMING_OBJ = new Project(
  "P_03",
  "Animex Streaming",
  ANIMEX_STREAMING_IMG,
  "Client: None",
  "Unpaid",
  "A anime-based streaming website.",
  [REACT, NEXTJS, SASS],
  "https://sparkling-dragon-f3af91.netlify.app/",
  "https://github.com/mxrked/animex_streaming"
);
const AFRESHPLACE_OBJ = new Project(
  "P_04",
  "A Fresh Place",
  A_FRESH_PLACE_IMG,
  "Client: None",
  "Unpaid",
  "A ecommerce-based food and produce website.",
  [REACT, NEXTJS, SASS],
  "https://effulgent-marshmallow-23dfdf.netlify.app/",
  "https://github.com/mxrked/AFreshPlace"
);
const ONLYJOJO_OBJ = new Project(
  "P_05",
  "OnlyJojo",
  ONLYJOJO_IMG,
  "Client: None",
  "Unpaid",
  "A ecommerce-based JoJo's Bizarre Adventure website.",
  [REACT, NEXTJS, SASS],
  "https://startling-syrniki-d0dc90.netlify.app/",
  "https://github.com/mxrked/OnlyJojo"
);
const SHARPQUILLS_OBJ = new Project(
  "P_06",
  "Sharp Quills",
  SHARPQUILLS_IMG,
  "Client: None",
  "Unpaid",
  "A informational-based hedgehog website.",
  [REACT, NEXTJS, SASS],
  "https://astounding-gaufre-f9428d.netlify.app/",
  "https://github.com/mxrked/SharpQuill_NEXTJS"
);
const FLORA_AND_FUANA_OBJ = new Project(
  "P_07",
  "Flora and Fuana",
  FAUNAANDFLORA_IMG,
  "Client: Haytham Elkhair",
  "Unpaid",
  "A informational-based flora and fuana website.",
  [REACT, NEXTJS, SASS],
  "https://fantastic-starburst-b0f940.netlify.app/",
  "https://github.com/mxrked/floraandfauna"
);
const MEDICAL_OFFICE_ADMINISTRATION_OBJ = new Project(
  "P_08",
  "Medical Office Administration",
  MEDICAL_OFFICE_ADMINISTRATION_IMG,
  "Client: Capstone Project",
  "Unpaid",
  "A PyQt5 GUI program for a Medical Office Administration team.",
  [PYTHON, PYQT, SQLALCHEMY],
  undefined,
  "https://github.com/mxrked/Medical-Office-Administration"
);
const ACCOUNT_GUARD_OBJ = new Project(
  "P_09",
  "AccountGuard",
  ACCOUNT_GUARD_IMG,
  "Client: None",
  "Unpaid",
  "A PyQt5 GUI program for storing and managing account information.",
  [PYTHON, PYQT, SQL],
  undefined,
  "https://github.com/mxrked/AccountGuard_PyQt5"
);
const FILEZOID_OBJ = new Project(
  "P_10",
  "Filezoid",
  FILEZOID_IMG,
  "Client: None",
  "Unpaid",
  "A PyQt5 GUI program for creating different types of files.",
  [PYTHON, PYQT, SQL],
  undefined,
  "https://github.com/mxrked/Filezoid"
);

export {
  RTSYVISUALS_OBJ,
  FIBERCOMPANY_OBJ,
  ANIMEX_STREAMING_OBJ,
  AFRESHPLACE_OBJ,
  ONLYJOJO_OBJ,
  SHARPQUILLS_OBJ,
  FLORA_AND_FUANA_OBJ,
  MEDICAL_OFFICE_ADMINISTRATION_OBJ,
  ACCOUNT_GUARD_OBJ,
  FILEZOID_OBJ,
};
