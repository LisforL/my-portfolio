const playFromStart = (e) => {
  const video = e.currentTarget.querySelector("video");
  if (video) {
    video.currentTime = 0;
    video.play();
  }
};

const resetVideo = (e) => {
  const video = e.currentTarget.querySelector("video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
};

/* Shows a still image that swaps to a looping preview video on hover */
const MediaHover = ({ image, video, alt }) => (
  <div className="media-hover" onMouseEnter={playFromStart} onMouseLeave={resetVideo}>
    <img src={image} alt={alt} />
    <video src={video} muted playsInline preload="metadata" />
  </div>
);

export default MediaHover;
