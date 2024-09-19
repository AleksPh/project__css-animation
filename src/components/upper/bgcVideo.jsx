import videoSrc from '../../image/video/bgc-video.mp4';

const BackgroundVideo = () => {
  
  return (
    <div className="video-background">
      <video  autoPlay muted loop className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;