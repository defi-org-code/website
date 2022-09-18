import React from "react";
import { generateUrl } from "../../../utils";

function Slide({ _relativeURL, _ID, image, _body, link, figure, title }) {
  return (
    <div className="swiper-slide home-slider-slide">
      <div className="home-slider-slide-wrapper">
        <div className="triangle"></div>
        <div className="home-slider-slide-top">
          <img
            className="home-slider-slide-top-dots"
            src={generateUrl(
              "../../../../assets/images/home/slides/dots.svg",
              _relativeURL,
              _ID
            )}
          />
          <img
            className="home-slider-slide-top-hero"
            src={generateUrl(image, _relativeURL, _ID)}
          />
        </div>
        <div className="home-slider-slide-content">
          <div className="home-slider-slide-title">{title}</div>
          <div className="home-slider-slide-body">{_body}</div>
        </div>
        <div className="home-slider-slide-bottom">
          {link}
          <div className="home-slider-slide-bottom-img">
            <img src={generateUrl(figure, _relativeURL, _ID)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
