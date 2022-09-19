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

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const assets = document.querySelectorAll(".home-main-asset");
let count = 0;
let intervalEnabled = true;
let timeout;
let isFirst = true;

// const loopPopups = async () => {
//   window.clearTimeout(timeout);
//   timeout = setTimeout(async () => {
//     while (intervalEnabled) {
//       const asset = assets[count];
//       await delay(isFirst ? 0 : 4000);
//       isFirst = false;
//       asset.classList.add("active-asset");
//       await delay(3000);
//       asset.classList.remove("active-asset");
//       if (count === assets.length - 1) {
//         count = 0;
//       } else {
//         count++;
//       }
//     }
//   }, 4000);
// };

let interval;

const loopAssets = async () => {
  console.log("interval started");
  const asset = assets[count];
  isFirst = false;
  asset.classList.add("active-asset");
  await delay(3000);
  asset.classList.remove("active-asset");
  if (count === assets.length - 1) {
    count = 0;
  } else {
    count++;
  }
};

const runLoopInterval = async () => {
  console.log("function started");
  loopAssets();
  interval = setInterval(async () => {
    loopAssets();
  }, 6000);
};

const startAssetsLoop = () => {
  timeout = setTimeout(() => {
    runLoopInterval();
  }, 4000);
};

const stopAssetsLoop = () => {
  window.clearTimeout(timeout);
  window.clearInterval(interval);
};

const visitedKey = "defi_org_visited";

const onDesktopLoad = () => {
  const loopContainer = document.getElementById("loop-container");
  const introVideo = document.getElementById("intro-video");
  const navbar = document.querySelector(".navbar");
  const assets = document.querySelectorAll(".home-main-asset");

  assets.forEach((asset) => {
    asset.addEventListener("mouseenter", () => {
      stopAssetsLoop();
      assets.forEach((asset) => {
        asset.classList.remove("active-asset");
      });
    });
    asset.addEventListener("mouseleave", () => {
      startAssetsLoop();
    });
  });

  if (localStorage.getItem(visitedKey)) {
    loopContainer.classList.remove("hidden");
    introVideo.classList.add("hidden");
    startAssetsLoop();
    return;
  }
  navbar.style.opacity = 0;

  loopContainer.classList.add("hidden");
  introVideo.onended = () => {
    introVideo.classList.add("hidden");
    loopContainer.classList.remove("hidden");
    localStorage.setItem(visitedKey, 1);
    navbar.style.opacity = 1;
    startAssetsLoop();
  };
};

const onLoad = () => {
  const mobile = window.innerWidth < 700;

  const mobileContainer = document.querySelector(".home-mobile");
  const desktopContainer = document.querySelector(".home-desktop");

  console.log(mobileContainer);

  if (mobile) {
    mobileContainer.classList.remove("display-none");
  } else {
    onDesktopLoad();
    desktopContainer.classList.remove("display-none");
  }
};

onLoad();
