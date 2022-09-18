import React from "react";

function Video({ autoplay, loop, poster, id = "", src }) {
  return (
    <video
      id={id}
      class="video-js"
      poster={poster}
      controls={false}
      loop={loop}
      playsInline
      muted={true}
      preload="auto"
      autoPlay={autoplay}
      src={src}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default Video;
