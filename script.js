document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuItems = document.querySelector('.menu-items');
  
    burgerMenu.addEventListener('click', function() {
      menuItems.classList.toggle('show');
    });
  });