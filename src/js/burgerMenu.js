const burgerMenuBtnRef = document.querySelector('.js-menu-btn');
const burgerMenuRef = document.querySelector('.js-burger-menu');
const burgerMenuBtnCloseRef = document.querySelector('.js-menu-btn-close');

const onToggleShowBurgerMenu = () => {
  burgerMenuRef.classList.toggle('isOpen');
  document.body.classList.toggle('isOpen');
};

burgerMenuBtnRef.addEventListener('click', onToggleShowBurgerMenu);
burgerMenuBtnCloseRef.addEventListener('click', onToggleShowBurgerMenu);
