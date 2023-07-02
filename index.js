document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burgericon');
    const burgerMenu = document.querySelector('.burgermeniu');
    const closeIcon = document.querySelector('.x');

    // Function to show the burger menu
    function showBurgerMenu() {
      burgerMenu.style.display = 'block';
    }

    // Function to hide the burger menu
    function hideBurgerMenu() {
      burgerMenu.style.display = 'none';
    }

    // Event listener for burger icon click
    burgerIcon.addEventListener('click', showBurgerMenu);

    // Event listener for close (x) icon click
    closeIcon.addEventListener('click', hideBurgerMenu);
  });