import React from "react";
import Slider from "../../../components/slider";

function TonSlider(props) {
  return (
    <div>
      <Slider {...props} id="ton-slider" />
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default TonSlider;
