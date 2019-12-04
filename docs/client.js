
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
menuButton.addEventListener('click', event => {
    const menuStatus = getComputedStyle(menu).display;
    if (menuStatus === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});