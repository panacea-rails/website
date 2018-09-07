function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function toggleClass(element, className) {
  if (element.classList) {
    element.classList.toggle(className)
  } else {
    let classes = element.className.split(' ');
    const existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }
}

function toggleMobileMenu() {
  const el = this;
  const mobileMenu = document.querySelector('.menu-mobile');
  const body = document.querySelector('body');

  toggleClass(el, 'open');
  toggleClass(mobileMenu, 'open');
  toggleClass(body, 'mobile-overflow');
}

ready(
  function() {

    const el = document.querySelector('.header-nav-menu-mobile');
    el.addEventListener('click', toggleMobileMenu);
  }
);
