document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuItems = document.querySelector('.menu-items');
    const page = document.querySelector('.page');
  
    burgerMenu.addEventListener('click', function() {
      menuItems.classList.toggle('show');
      page.classList.toggle('down');
    });
  });
