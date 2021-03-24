// Code to toggle the side panel on mobile

let ourMenuBtn = document.querySelector('#menu-btn');

let profileInfoPanel = document.querySelector('#profile-info');

let closePanelBtn = document.querySelector('#close-btn');

let isOpen = false;

function showPanel () {
    if (isOpen === false) {
        profileInfoPanel.className = "closed";
        isOpen = true;
    } else {
        profileInfoPanel.className = "open";
        isOpen = false;
    }
}

window.addEventListener('load', showPanel);
ourMenuBtn.addEventListener('click', showPanel);
closePanelBtn.addEventListener('click', showPanel);