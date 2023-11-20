/**
 *
 *  This is used to return/get a url for a medias
 *
 */

const SERVER =
  "https://raw.githubusercontent.com/mxrked/CDN_codingthefront/main/";

function CDNBGReturn(bgSub, bgSubFile, fileExt) {
  let bgSrc;

  if (bgSub) {
    if (bgSubFile) {
      if (fileExt) {
        bgSrc = SERVER + "bgs/" + bgSub + "/" + bgSubFile + "." + fileExt;
      }
    }
  }

  return bgSrc;
}

function CDNVideoReturn(videoSub, videoSubFile, fileExt) {
  let videoSrc;

  if (videoSub) {
    if (videoSubFile) {
      if (fileExt) {
        videoSrc =
          SERVER + "videos/" + videoSub + "/" + videoSubFile + "." + fileExt;
      }
    }
  }

  return videoSrc;
}

function CDNImgReturn(imgSub, imgSubFile, fileExt) {
  let imgSrc;

  if (imgSub) {
    if (imgSubFile) {
      if (fileExt) {
        imgSrc = SERVER + "imgs/" + imgSub + "/" + imgSubFile + "." + fileExt;
      }
    }
  }

  return imgSrc;
}

function CDNSVGReturn(svgSub, svgSubFile) {
  let svgSrc;

  if (svgSub) {
    if (svgSubFile) {
      svgSrc = SERVER + "svgs/" + svgSub + "/" + svgSubFile + ".svg";
    }
  }

  return svgSrc;
}

export { CDNBGReturn, CDNVideoReturn, CDNImgReturn, CDNSVGReturn };
