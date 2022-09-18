import { createSlider } from "./slider.js";

createSlider("home-slider", {
  spaceBetween: 30,
  slidesPerView: 2.5,
  slidesPerGroup: 1,
  breakpoints: {
    1800: {
      slidesPerView: 3,
    },
  },
});

const visitedKey = "defi_org_visited";

const loadDesktopVideos = () => {
  const loopContainer = document.getElementById("loop-container");
  const introVideo = document.getElementById("intro-video");
  const navbar = document.querySelector(".navbar");
  console.log(localStorage.getItem(visitedKey));
  if (localStorage.getItem(visitedKey)) {
    loopContainer.classList.remove("hidden");
    introVideo.classList.add("hidden");

    return;
  }
  navbar.style.opacity = 0;

  loopContainer.classList.add("hidden");
  introVideo.onended = () => {
    introVideo.classList.add("hidden");
    loopContainer.classList.remove("hidden");
    localStorage.setItem(visitedKey, 1);
    navbar.style.opacity = 1;
  };
};

// window.addEventListener("beforeunload", (event) => {
//   console.log(event);
//   event.returnValue = "Are you sure you want to leave?";
// });

// window.onbeforeunload = (event) => {
//   alert("test");
//   console.log(event);
//   debugger;
//   localStorage.removeItem(visitedKey);
// };

const loadMobileVideos = () => {
  const video = document.getElementById("mobile-video");
};

const onLoad = () => {
  const mobile = window.innerWidth < 700;

  const mobileContainer = document.querySelector(".home-mobile");
  const desktopContainer = document.querySelector(".home-desktop");

  console.log(mobileContainer);

  if (mobile) {
    loadMobileVideos();
    mobileContainer.classList.remove("display-none");
  } else {
    loadDesktopVideos();
    desktopContainer.classList.remove("display-none");
  }
};

onLoad();
