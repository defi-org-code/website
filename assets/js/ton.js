import { createSideMenuLinks } from "./scroll-sections.js";
import { createSlider } from "./slider.js";

const container = document.querySelector(".ton-sticky");

createSideMenuLinks(container);
createSlider("ton-slider", 1, {
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
});
