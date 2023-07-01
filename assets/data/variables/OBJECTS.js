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
} from "../../cdns/CDNIcons";
import {
  ACCOUNT_GUARD_IMG,
  ANIMEX_STREAMING_IMG,
  A_FRESH_PLACE_IMG,
  FAUNAANDFLORA_IMG,
  FILEZOID_IMG,
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
  "FiberCompany",
  FIBERCOMPANY_IMG,
  "Client: FiberCompany",
  200.0,
  "A arts/crafts website dedicated to the FiberCompany.",
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
