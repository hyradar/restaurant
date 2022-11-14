
import {generateTopBar} from './topbar.js';
import {generateMenu} from './menupage.js';



generateTopBar();

let menuButton = document.getElementById('Menubutton');
    menuButton.addEventListener('click', generateMenu);

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