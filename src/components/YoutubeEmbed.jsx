import { useState } from "react";
import PropTypes from "prop-types";
import VideoIcon from "../components/Icon";

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function YoutubeEmbed({ embedId, title }) {
  const [video, setVideo] = useState(true);

  function handleClickVideo() {
    setVideo(false);
  }

  return (
    <>
      {video ? (
        <div className={`image__wrap`} onClick={handleClickVideo}>
          <VideoIcon />
          <img
            className="max-w-full"
            src={`https://img.youtube.com/vi/${embedId}/sddefault.jpg`}
            style={{ maxWidth: "315px" }}
            width={315}
            height={560}
            alt={`${title}`}
          />
        </div>
      ) : (
        <iframe
          width="315"
          height="560"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
          title={`${title}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </>
  );
}
