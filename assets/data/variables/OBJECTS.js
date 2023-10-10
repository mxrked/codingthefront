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
  FIBERCOMPANY_IMG,
  DISTINCT_PAINTING_LLC_IMG,
  RADIANCE_GLOW_IMG,
  ANIMAL_ARK_OF_SUMMERLIN_IMG,
  ELTYS_PREMIUM_PAINTING_IMG,
} from "../../cdns/CDNImgs";
import { PYQT, PYTHON, SQL, SASS, NEXTJS, REACT } from "../../cdns/CDNIcons";

const RTSYVISUALS_OBJ = new Project(
  "P_1",
  "project_1",
  "RTSYVisuals",
  "A photography-based website.",
  "Freelance Consultant",
  "2023 - 2023",
  RTSYVISUALS_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/rtsyvisuals",
  "https://rtsyvisuals.com/"
);
const RADIANCE_GLOW_OBJ = new Project(
  "P_2",
  "project_2",
  "Radiance Glow HSC",
  "Website for Radiance Glow HSC, NC.",
  "Freelance Consultant",
  "2023 - 2023",
  RADIANCE_GLOW_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/radiance-glow-hard-surface-cleaning",
  "https://radianceglowhsc.com/"
);
const ANIMAL_ARK_OF_SUMMERLIN_OBJ = new Project(
  "P_3",
  "project_3",
  "AAOS Dog Rescue",
  "Website for Animal Ark Of Summerlin, NC.",
  "Freelance Consultant",
  "2023 - 2023",
  ANIMAL_ARK_OF_SUMMERLIN_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/animalarkofsummerlin",
  "https://animalarkofsummerlin.com/"
);
const DISTINCT_PAINTING_LLC_OBJ = new Project(
  "P_4",
  "project_4",
  "Distinct Painting LLC",
  "Website for Distinct Painting LLC, NC.",
  "Freelance Consultant",
  "2023 - 2023",
  DISTINCT_PAINTING_LLC_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/distinctpaintingllc",
  "https://distinctpaintingllc.com/"
);
const ELTYS_PREMIUM_PAINTING_OBJ = new Project(
  "P_5",
  "project_5",
  "Elty's Prem. Painting",
  "Website for Elty's Premium Painting, NC.",
  "Freelance Consultant",
  "2023 - 2023",
  ELTYS_PREMIUM_PAINTING_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/eltyspremiumpainting/tree/development",
  "https://eltyspremiumpainting.com/"
);
const FIBERCOMPANY_OBJ = new Project(
  "P_6",
  "project_6",
  "FiberCompany",
  "Website for FiberCompany, NC.",
  "Freelance Consultant",
  "2023 - 2023",
  FIBERCOMPANY_IMG,
  [],
  undefined,
  "https://fibercompanync.com"
);
const ANIMEX_OBJ = new Project(
  "P_7",
  "project_7",
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
  "P_8",
  "project_8",
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
  "P_9",
  "project_9",
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
  "P_10",
  "project_10",
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
  "P_11",
  "project_11",
  "Fauna and Flora",
  "A plant-based informational site.",
  "Personal Project",
  "2022 - 2022",
  FAUNAANDFLORA_IMG,
  [SASS, NEXTJS, REACT],
  "https://github.com/mxrked/floraandfauna",
  "https://fantastic-starburst-b0f940.netlify.app/"
);
const ACCOUNTGUARD_OBJ = new Project(
  "P_12",
  "project_12",
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
  "P_13",
  "project_13",
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
  FIBERCOMPANY_OBJ,
  RADIANCE_GLOW_OBJ,
  ANIMAL_ARK_OF_SUMMERLIN_OBJ,
  DISTINCT_PAINTING_LLC_OBJ,
  ELTYS_PREMIUM_PAINTING_OBJ,
};
