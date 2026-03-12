import Image from "next/image";
import "@/css/ImageVideo.css";

const ImageVideo = ({ imageSrc, videoSrc }) => {
  const isYoutube =
    videoSrc?.includes("youtube.com") || videoSrc?.includes("youtu.be");

  const getYoutubeEmbed = (url) => {
    if (!url) return null;

    const id = url.includes("youtu.be")
      ? url.split("/").pop()
      : new URL(url).searchParams.get("v");

    return `https://www.youtube.com/embed/${id}`;
  };

  return (
    <div className="ImageVideoContainer">
      {!videoSrc && (
        <div className="imageSection">
          <Image src={imageSrc} alt="" fill />
        </div>
      )}

      {videoSrc && (
        <div className="videoSection glass">
          {isYoutube ? (
            <iframe
              src={getYoutubeEmbed(videoSrc)}
              title="YouTube video"
              allowFullScreen
            />
          ) : (
            <video src={videoSrc} controls preload="metadata" />
          )}
        </div>
      )}
    </div>
  );
};

export default ImageVideo;
