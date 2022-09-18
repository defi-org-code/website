import React from "react";

const Hero = ({ _body, _relativeURL, _ID }) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <div className="hero">
      <div className="hero-description">{_body}</div>
      <img
        src={handleUrl(
          "../../../assets/images/notifications-protocol/hero/mobile-device.png"
        )}
        className="hero-image"
      />
    </div>
  );
};

export default Hero;
