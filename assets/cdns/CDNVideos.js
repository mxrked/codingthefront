/**
 *
 *  This holds the urls/srcs for the videos
 *
 */

import { CDNVideoReturn } from "./CDNReturns";

const TOP_VIDEO = CDNVideoReturn("index", "new-video-compressed", "mp4");
const TOP_VIDEO_POSTER = CDNVideoReturn(
  "index",
  "new-video-compressed",
  "webp"
);

export { TOP_VIDEO };
export { TOP_VIDEO_POSTER };
