/**
 *
 *  This is the Project class
 *
 */

export default class Project {
  constructor(
    projectID,
    projectName,
    projectImg,
    projectClient,
    projectPrice,
    projectDesc,
    projectTechs,
    projectDemo,
    projectCode
  ) {
    this._projectID = projectID;
    this._projectName = projectName;
    this._projectImg = projectImg;
    this._projectClient = projectClient;
    this._projectPrice = projectPrice;
    this._projectDesc = projectDesc;
    this._projectTechs = projectTechs;
    this._projectDemo = projectDemo;
    this._projectCode = projectCode;
  }

  get getProjectID() {
    return this._projectID;
  }
  get getProjectName() {
    return this._projectName;
  }
  get getProjectImg() {
    return this._projectImg;
  }
  get getProjectClient() {
    return this._projectClient;
  }
  get getProjectPrice() {
    // Converting to currency
    if (
      typeof this._projectPrice !== "string" &&
      typeof this._projectPrice !== "undefined"
    ) {
      return this._projectPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }

    if (typeof this._projectPrice == "string") {
      return this._projectPrice;
    }

    if (typeof this._projectPrice == "undefined") {
      return "Unpaid";
    }
  }
  get getProjectDesc() {
    return this._projectDesc;
  }
  get getProjectTechs() {
    return this._projectTechs;
  }
  get getProjectDemo() {
    if (typeof this._projectDemo == "string") {
      return this._projectDemo;
    }

    if (typeof this._projectDemo !== "string") {
      return;
    }
  }
  get getProjectCode() {
    if (typeof this._projectCode == "string") {
      return this._projectCode;
    }

    if (typeof this._projectCode !== "string") {
      return;
    }
  }

  projectDetails() {
    // Converting the tech icons to string values
    // const ICONS_TO_STRING = [];
    // this._projectTechs.forEach((tech) => {
    //   ICONS_TO_STRING.push(renderToString(tech));
    // });

    const PROJECT_DETAILS =
      "Project ID: " +
      this.getProjectID +
      "\nProject Name: " +
      this.getProjectName +
      "\nProject Img: " +
      this.getProjectImg +
      "\nProject Client: " +
      this.getProjectClient +
      "\nProject Price: $" +
      this.getProjectPrice +
      "\nProject Description: " +
      this.getProjectDesc +
      "\nProject Techs: " +
      this.getProjectTechs +
      "\nProject Demo Link: " +
      this.getProjectDemo +
      "\nProject Code Link: " +
      this.getProjectCode;

    return PROJECT_DETAILS;
  }
}
