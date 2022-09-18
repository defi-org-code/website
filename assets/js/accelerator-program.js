import { createPostsList, renderPosts } from "./posts.js";
import { createSlider } from "./slider.js";

const container = document.querySelector(".accelerator-media-list");

const list = createPostsList(container);
createSlider("accelerator-program-slider", {
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
renderPosts(list, container);
