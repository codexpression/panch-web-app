// Code to toggle the side panel on mobile

let ourProfileBtn = document.querySelector('#user-btn');

let ourMenuBtn = document.querySelector('#menu-btn');

let profileInfoPanel = document.querySelector('#profile-info');

let closePanelBtn = document.querySelector('#close-btn');

let menuBox = document.querySelector('#links');

let isOpen = false;

function toggleDisplay (oldClass, newClass, element) {
    if (isOpen === false) {
        element.className = oldClass;
        isOpen = true;
    } else {
        element.className = newClass;
        isOpen = false;
    }
}

window.addEventListener('load', function () {
    toggleDisplay('closed', 'open', profileInfoPanel)
});
ourProfileBtn.addEventListener('click', function () {
    toggleDisplay('closed', 'open', profileInfoPanel)
});
closePanelBtn.addEventListener('click', function () {
    toggleDisplay('closed', 'open', profileInfoPanel)
});
ourMenuBtn.addEventListener('click', function () {
    toggleDisplay('hide-menu', 'show-menu', menuBox);
    console.log('menu open');
})