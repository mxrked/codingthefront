/**
 *
 *  This is where the project class and objects will go
 *
 */

import {
  AFRESHPLACE_IMG,
  FAUNAANDFLORA_IMG,
  ONLYJOJO_IMG,
  RTSYVISUALS_IMG,
  SHARPQUILLS_IMG,
} from "../../cdns/CDNImgs";

class Project {
  constructor(
    projectId,
    projectName,
    projectImg,
    projectDesc,
    projectDemoLink,
    projectCodeLink
  ) {
    this.projectId = projectId;
    this.projectName = projectName;
    this.projectImg = projectImg;
    this.projectDesc = projectDesc;
    this.projectDemoLink = projectDemoLink;
    this.projectCodeLink = projectCodeLink;
  }

  set setProjectId(projectId) {
    this.projectId = projectId;
  }
  set setProjectName(projectName) {
    this.projectName = projectName;
  }
  set setProjectImg(projectImg) {
    this.projectImg = projectImg;
  }
  set setProjectDesc(projectDesc) {
    this.projectDesc = projectDesc;
  }
  set setProjectDemoLink(projectDemoLink) {
    this.projectDemoLink = projectDemoLink;
  }
  set setProjectCodeLink(projectCodeLink) {
    this.projectCodeLink = projectCodeLink;
  }

  get getProjectId() {
    return this.projectId;
  }
  get getProjectName() {
    return this.projectName;
  }
  get getProjectImg() {
    return this.projectImg;
  }
  get getProjectDesc() {
    return this.projectDesc;
  }
  get getProjectDemoLink() {
    return this.projectDemoLink;
  }
  get getProjectCodeLink() {
    return this.projectCodeLink;
  }
}

const AFRESHPLACE_OBJ = new Project(
  "P_1",
  "AFreshPlace",
  AFRESHPLACE_IMG,
  "A ecommerce based website for fresh produce.",
  "https://effulgent-marshmallow-23dfdf.netlify.app/",
  "https://github.com/mxrked/AFreshPlace"
);
const FAUNAANDFLORA_OBJ = new Project(
  "P_2",
  "Fauna and Flora",
  FAUNAANDFLORA_IMG,
  "A informational website for NC fauna and flora.",
  "https://fantastic-starburst-b0f940.netlify.app/",
  "https://github.com/mxrked/floraandfauna"
);
const ONLYJOJO_OBJ = new Project(
  "P_3",
  "OnlyJojo",
  ONLYJOJO_IMG,
  "A ecommerce based website JoJo's Bizarre Adventure.",
  "https://startling-syrniki-d0dc90.netlify.app/",
  "https://github.com/mxrked/OnlyJojo"
);
const RTSYVISUALS_OBJ = new Project(
  "P_4",
  "RTSYVisuals",
  RTSYVISUALS_IMG,
  "A photography website for Rick Dingall.",
  "https://rtsyvisuals.com/home",
  "https://github.com/mxrked/Rick-s-Website"
);
const SHARPQUILLS_OBJ = new Project(
  "P_5",
  "SharpQuills",
  SHARPQUILLS_IMG,
  "A informational website for hedgehogs.",
  "https://astounding-gaufre-f9428d.netlify.app/",
  "https://github.com/mxrked/SharpQuill_NEXTJS"
);

const PROJECTS = [
  AFRESHPLACE_OBJ,
  FAUNAANDFLORA_OBJ,
  ONLYJOJO_OBJ,
  RTSYVISUALS_OBJ,
  SHARPQUILLS_OBJ,
];

export {
  PROJECTS,
  AFRESHPLACE_OBJ,
  FAUNAANDFLORA_OBJ,
  ONLYJOJO_OBJ,
  RTSYVISUALS_OBJ,
  SHARPQUILLS_OBJ,
};
