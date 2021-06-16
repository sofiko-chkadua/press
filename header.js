// общая функция 
function togglePopup(modal) {
    modal.classList.toggle("popup_open");
    if (!modal.classList.contains("popup_open")) {
        document.removeEventListener("keyup", keyupHandler);
    }
}


// функция закр по еск
const keyupHandler = function (e) {
    console.log(123);
    if (e.keyCode == 27) {
        const openModal = document.querySelector(".popup_open");
        togglePopup(openModal);
    }
};

function handleOverlayClick(popup, e) {
    if (!e.target.closest(".popup__container")) {
      togglePopup(popup);
    }
    document.removeEventListener("keyup", keyupHandler);
  }

  const hiddenMenu = document.querySelector(".header__hidden-wrapper");
  const header = document.querySelector(".header");
  const logo = document.querySelector(".header__logo");
  const phone = document.querySelector(".header__icon");
  const about = document.querySelector(".header__link_about");
  const burgerMenuButton = document.querySelector(".header__menu-burger");
  const publish = document.querySelector(".header__link_publish")
  
  
  burgerMenuButton.addEventListener("click", function() {
      // togglePopup(popupMenu);
      hiddenMenu.classList.toggle("header__hidden-wrapper_open");
      burgerMenuButton.classList.toggle("header__menu-closed");
      header.classList.toggle("header_dark");
      document.addEventListener("keyup", keyupHandler);
      logo.classList.toggle("header__logo_dark");
      phone.classList.toggle("header__icon_dark");
  });
  
  about.addEventListener("click", function() {
      // togglePopup(popupMenu);
      hiddenMenu.classList.toggle("header__hidden-wrapper_open");
      burgerMenuButton.classList.toggle("header__menu-closed");
      header.classList.toggle("header_dark");
      document.addEventListener("keyup", keyupHandler);
      logo.classList.toggle("header__logo_dark");
      phone.classList.toggle("header__icon_dark");
  });

  publish.addEventListener("click", function() {
    // togglePopup(popupMenu);
    hiddenMenu.classList.toggle("header__hidden-wrapper_open");
    burgerMenuButton.classList.toggle("header__menu-closed");
    header.classList.toggle("header_dark");
    document.addEventListener("keyup", keyupHandler);
    logo.classList.toggle("header__logo_dark");
    phone.classList.toggle("header__icon_dark");
});