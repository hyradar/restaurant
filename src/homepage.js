import {generateTopBar} from './topbar.js';
import {generateMenu} from './menupage.js';

generateTopBar();
generateContent();
generateHomePage();

let homeButton = document.getElementById('Homebutton');
    homeButton.addEventListener('click', clearContentDiv);
    homeButton.addEventListener('click', generateHomePage);

let menuButton = document.getElementById('Menubutton');
    menuButton.addEventListener('click', clearContentDiv);
    menuButton.addEventListener('click', generateMenu);

export function generateHomePage() {
    
    let checkDropDown = document.querySelector('.dropdown');

    // Generating Center Box
    let centerBox = document.createElement('div');
    centerBox.className = 'centerbox';
    
    let centerTop = document.createElement('h2');
    centerTop.className = 'centertop';
    centerTop.innerHTML = 'Explore and Discover'
    let centerBottom = document.createElement('h1');
    centerBottom.className = 'centerbottom';
    centerBottom.innerHTML = 'The Seafra Seafood Collection';
    
    centerBox.appendChild(centerTop);
    centerBox.appendChild(centerBottom);
    content.appendChild(centerBox);
}

export function clearContentDiv() {
    console.log('clear content div firing');
    let content = document.getElementById('content');
    let children = content.children;

    console.log({children});
    console.log(children.length);

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}

function generateContent() {
    let content = document.createElement('div');
    let body = document.querySelector('.bg');
    content.id = 'content';
    body.appendChild(content);
}


