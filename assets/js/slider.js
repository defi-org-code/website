import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

export const createSlider = (className, options) => {
  return new Swiper(`.${className}`, {
    loop: true,
    paginationClickable: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    ...options,
  });
};
