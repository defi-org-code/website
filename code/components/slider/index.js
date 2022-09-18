import React from "react";

function Slider({ id = "", slides }) {
  return (
    <div className={`swiper ${id}`}>
      <div className="swiper-wrapper">{slides}</div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default Slider;
