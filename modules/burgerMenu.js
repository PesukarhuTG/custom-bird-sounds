function burger() {
  const burgerMenu = document.querySelector('.burger-menu');
  const headerNavigation = document.querySelector('.header__navigation');

  function toggleMenu() {
    burgerMenu.classList.toggle('burger-menu_active');
    headerNavigation.classList.toggle('header__navigation_active');
  }

  burgerMenu.addEventListener('click', toggleMenu);

  headerNavigation.addEventListener('click', e => {
    if (e.target.classList.contains('navigation__item')
      || e.target.classList.contains('headling')) {
      toggleMenu();
    }
  });
}

export default burger;