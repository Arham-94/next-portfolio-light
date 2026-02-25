import Image from "next/image";
import "@/css/ImageVideo.css";

const ImageVideo = ({ imageSrc, videoSrc }) => {
  return (
    <div className="ImageVideoContainer ">
      {!videoSrc && (
        <div className="imageSection ">
          <Image src={imageSrc} alt="" fill />
        </div>
      )}
      {!videoSrc ? null : (
        <div className="videoSection glass">
          <video src={videoSrc} controls preload="metadata" />
        </div>
      )}
    </div>
  );
};

export default ImageVideo;
