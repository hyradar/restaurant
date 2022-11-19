import {generateTopBar} from './topbar.js';
import {generateMenu} from './menupage.js';
import {clearContentDiv} from './view.js';

//Runs when user first arrives at webpage

//If JS warning exists, delete
let javascriptWarning = document.getElementById('javascriptwarning');
if (javascriptWarning) {
    javascriptWarning.remove();
}

generateTopBar();
generateContent();

//Not sure why I need to do this twice to make it show up on first page O.o
generateHomePage();
generateHomePage();

//I use this code multiple times throughout my code
//Better to turn it into a module
//and refactor is so that it is easy to create new pages
let homeButton = document.getElementById('Homebutton');
    homeButton.addEventListener('click', clearContentDiv);
    homeButton.addEventListener('click', generateHomePage);

let menuButton = document.getElementById('Menubutton');
    menuButton.addEventListener('click', clearContentDiv);
    menuButton.addEventListener('click', generateMenu);

export function generateHomePage() {

    // Generating Center Box
    let content = document.getElementById('content');
    let centerBox = document.createElement('div');
    centerBox.className = 'centerbox';
    
    let centerTop = document.createElement('h1');
    centerTop.className = 'centertop';
    centerTop.innerHTML = 'Explore and Discover'
    
    let centerBottomDiv = document.createElement('div');
    let centerBottomText = document.createElement('h2');
    let centerBottomBlue = document.createElement('h2');

    centerBottomDiv.className = 'centerbottomdiv';
    centerBottomText.className = 'centerbottomtext';
    centerBottomText.innerHTML = 'The Seafra Seafood Collection';
    centerBottomBlue.className = 'centerbottomblue';
    centerBottomBlue.innerHTML = 'The Seafra Seafood Collection';
    
    centerBottomDiv.appendChild(centerBottomText);
    centerBottomDiv.appendChild(centerBottomBlue);

    centerBox.appendChild(centerTop);
    centerBox.appendChild(centerBottomDiv);
    content.appendChild(centerBox);
    content.appendChild(centerBox);
    content.appendChild(centerBox);
    content.appendChild(centerBox);
}

clearContentDiv();

//Easier to force topRow and dropDown above Content Div if I generate it with JS
function generateContent() {
    let content = document.createElement('div');
    let body = document.querySelector('.bg');
    content.id = 'content';
    body.appendChild(content);
}
