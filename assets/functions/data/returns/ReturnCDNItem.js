/**
 *
 *  This is used to return a cdn item
 *
 */

export default function ReturnCDNItem(itemType, subFolder, fileName, fileExt) {
  const CDN_HOST =
    "https://raw.githubusercontent.com/mxrked/Codingthefront_CDN/main/";
  var item;

  // Return a file..
  if (itemType === "file" || itemType === "files") {
    item = CDN_HOST + "files/" + subFolder + "/" + fileName + "." + fileExt;
    return item;
  }

  // Return a project cover..
  if (itemType === "project" || itemType === "projects") {
    item = CDN_HOST + "projects/" + subFolder + "/" + fileName + "." + fileExt;
    return item;
  }

  // Return a background..
  if (itemType === "bg" || itemType === "bgs") {
    item = CDN_HOST + "bgs/" + subFolder + "/" + fileName + "." + fileExt;
    return item;
  }

  // Return an icon..
  if (itemType === "icon" || itemType === "icons") {
    item = CDN_HOST + "icons/" + subFolder + "/" + fileName + "." + fileExt;
    return item;
  }

  // Return an img..
  if (itemType === "img" || itemType === "imgs") {
    item = CDN_HOST + "imgs/" + subFolder + "/" + fileName + "." + fileExt;
    return item;
  }
}
