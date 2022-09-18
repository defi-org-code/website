const openMenu = document.querySelector(".navbar-open");
const menu = document.querySelector(".navbar-menu");
const closeMenu = document.querySelector(".navbar-menu-close");
let scrollPos = 0;
const navbarContainer = document.querySelector(".navbar");

export const addNavbarEvents = () => {
  if (!navbar) {
    return;
  }
  try {
    openMenu.addEventListener("click", () => {
      menu.classList.add("navbar-menu-active");
    });
    closeMenu.addEventListener("click", () => {
      menu.classList.remove("navbar-menu-active");
    });
  } catch (error) {
    console.log("navbar missing");
  }
};

const isVisible = (elem) =>
  !!elem &&
  !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);

export function hideOnClickOutside() {
  const outsideClickListener = (event) => {
    if (
      !event.target.classList.contains("navbar-open-img") &&
      !menu.contains(event.target) &&
      isVisible(menu) &&
      menu.classList.contains("navbar-menu-active")
    ) {
      menu.classList.remove("navbar-menu-active");
    }
  };

  document.addEventListener("click", outsideClickListener);
}

const handleActiveLink = () => {
  const pathname = window.location.pathname;
  const links = document.querySelectorAll(".navigation-link");
  const firstLink = links[0];
  const url = pathname !== "/" ? pathname : "/main";
  let selected;
  for (const link of links) {
    link.classList.remove("active-link");
    const title = link.getAttribute("title").replace("/", "");
    if (url.indexOf(title) > 0) {
      link.classList.add("active-link");
      if (!selected) {
        selected = true;
      }
    }
  }

  if (!selected) {
    firstLink.classList.add("active-link");
  }
};

const handleNavbarTransform = () => {
  if (document.querySelector(".navbar-menu-active")) {
    return;
  }

  if (document.body.getBoundingClientRect().top > scrollPos) {
    navbarContainer.classList.remove("navbar-hidden");
  } else {
    if (document.body.getBoundingClientRect().top < -100) {
      navbarContainer.classList.add("navbar-hidden");
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
};

const handleNavbarBackground = () => {
  const navbar = document.querySelector(".navbar");

  const offsetTop = window.pageYOffset;
  if (offsetTop >= 30) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
};

const onScroll = () => {
  document.addEventListener(
    "scroll",
    () => {
      handleNavbarBackground();
      handleNavbarTransform();
    },
    { passive: true }
  );
};

const init = () => {
  handleActiveLink();
  addNavbarEvents();
  onScroll();
  hideOnClickOutside();
};

export const navbar = {
  init,
};
