/**
 *
 *  This is the Lazy Load Video
 *
 */

{
  /**
 <video
  preload="none"
  // controls
  autoPlay
  loop
  muted
  // src={TOP_VIDEO}
  // poster={TOP_VIDEO_POSTER}
  className={props.videoStyle}
  id={props.videoID}
  // poster={props.videoPoster}
  // loading="lazy"
  onPlaying={() => {
    console.log("Video is playing.");
  }}
  onPause={(e) => {
    console.log("Video is paused.");

    // e.currentTarget.currentTime = 0;
    // e.currentTarget.play();
  }}
  onEnded={() => {
    console.log("Video has ended.");
  }}
>
  <source src={props.videoSrc} type="video/mp4" />
</video>
*/
}

import { useState } from "react";

export const LazyLoadVideo = (props) => {
  const [videoData, setVideoData] = useState(false);

  return (
    <div>
      {videoData ? (
        <video
          preload="none"
          autoPlay
          muted
          loop
          className={props.videoStyle}
          // style={{ display: "none" }}
          onLoadedData={() => {
            setVideoData(true);
          }}
          onPlaying={(e) => {
            e.currentTarget.playbackRate = 0.8;
          }}
          onEnded={() => {
            console.log("Video has ended.");
          }}
        >
          <source src={props.videoSrc} type="video/mp4" />
        </video>
      ) : (
        <video
          preload="none"
          autoPlay
          muted
          loop
          className={props.videoStyle}
          // style={{ display: "none" }}
          onLoadedData={() => {
            setVideoData(true);
          }}
          onPlaying={(e) => {
            e.currentTarget.playbackRate = 0.8;
          }}
        >
          <source src={props.videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
