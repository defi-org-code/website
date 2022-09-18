const menu = document.createElement("div");
menu.classList.add("side-menu");

export const createSideMenuLinks = (container) => {
  if (!container) {
    return;
  }

  const anchors = document.querySelectorAll(".anchor");

  for (const anchor of anchors) {
    const id = anchor
      .getAttribute("data-title")
      .toLowerCase()
      .split(" ")
      .join("-");
    anchor.setAttribute("id", id);
    const bottomAnchor = document.createElement("div");
    bottomAnchor.classList.add("bottom-anchor");
    bottomAnchor.setAttribute("id", id);

    const sideMenuBlur = document.createElement("figure");
    const sideMenuContainer = document.createElement("div");
    const sideMenuLink = document.createElement("a");
    const linkText = document.createElement("p");
    const blurText = document.createElement("p");

    sideMenuContainer.classList.add("side-menu-link");
    linkText.innerHTML = anchor.getAttribute("data-title");
    blurText.innerHTML = anchor.getAttribute("data-title");
    sideMenuContainer.setAttribute("href", `#${id}`);
    sideMenuLink.setAttribute("href", `#${id}`);
    sideMenuLink.append(linkText);
    sideMenuBlur.append(blurText);
    sideMenuLink.id = `${id}-link`;
    sideMenuContainer.append(sideMenuLink);
    sideMenuContainer.append(sideMenuBlur);
    menu.append(sideMenuContainer);
    const parent = anchor.parentNode;
    parent.append(bottomAnchor);
    parent.classList.add("side-menu-parent");
  }

  document.addEventListener("scroll", onScroll);

  container.prepend(menu);
  const firstAnchor = document
    .querySelectorAll(".side-menu-parent")[0]
    .querySelector(".anchor");
  const id = firstAnchor.getAttribute("id");
  handleSideMenuLinkIsActive(`${id}-link`);
};

const onScroll = () => {
  const parents = document.querySelectorAll(".side-menu-parent");

  for (const parent of parents) {
    const anchor = parent.querySelector(".anchor");
    const anchorBottom = parent.querySelector(".bottom-anchor");
    const anchorTopPosition = anchor.getBoundingClientRect().top;
    const anchorBottomPosition = anchorBottom.getBoundingClientRect().top;
    const id = anchor.getAttribute("id");
    if (anchorTopPosition < 10 && anchorBottomPosition > 0) {
      handleSideMenuLinkIsActive(`${id}-link`);
    }
  }
};

const handleSideMenuLinkIsActive = (selected) => {
  const menu = document.querySelector(".side-menu");
  const links = menu.querySelectorAll(".side-menu-link");
  for (const link of links) {
    const linkId = link.querySelector("a").getAttribute("id");

    if (linkId === selected) {
      link.classList.add("side-menu-active-link");
    } else {
      link.classList.remove("side-menu-active-link");
    }
  }
};
