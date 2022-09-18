const navbar = document.querySelector('.navbar')
const mobileToggle = document.querySelector('.navbar-mobile-hamburger')
const menu = document.querySelector('.navbar-menu')
const close = document.querySelector('.navbar-mobile-close')

export const init = () => {
  addScrollEvent()
  animateNavbar()
  addClickEvents()
};


const animateNavbar = () => {
  const scrolled = window.pageYOffset >= 10
  navbar.classList.toggle('navbar-active', scrolled)
}


const addClickEvents = () => {
  mobileToggle.addEventListener('click', () => {
    menu.classList.add('navbar-menu-active')
  })
  close.addEventListener('click', () => {
    menu.classList.remove('navbar-menu-active')
  })
}


let lastScrollTop = 0;
const hideNavbar = () => {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop && window.pageYOffset >= 400) {
    navbar.classList.add('navbar-hide')
  } else {
    navbar.classList.remove('navbar-hide')
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}

const addScrollEvent = () => {
  document.addEventListener(
    'scroll',
    () => {
      animateNavbar()
      hideNavbar()
    },
    { passive: true }
  );
}