/**
 *
 *  This is the Lazy Load Video
 *
 */

export const LazyLoadVideo = (props) => {
  return (
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
      loading="lazy"
      onEnded={() => {
        console.log("Video has ended.");
      }}
    >
      <source src={props.videoSrc} type="video/mp4" />
    </video>
  );
};
