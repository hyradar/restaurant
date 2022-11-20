import './style.css';
//Desktop
import { generateHomePage } from './homepage.js';
import { changeBanner } from './menupage.js';
import {generateDesktop, generateMobile, generateContent, addButtonEventListeners} from './view.js';

//Runs when user first arrives at webpage

//Delete Javascript Warning
let javascriptWarning = document.getElementById('javascriptwarning');
if (javascriptWarning) {
    javascriptWarning.remove();
}

siteStart();
generateContent();
generateHomePage();
addButtonEventListeners();

function siteStart() {
    
    if (window.innerWidth < 700) {
        generateMobile();
    } else {
        generateDesktop();
    }

    //Media Queries
    const mediaQueryMax = window.matchMedia('(max-width: 699px');
    const mediaQueryMin = window.matchMedia('(min-width: 700px)');
    mediaQueryMax.addListener(handleMediaQueryMax);
    mediaQueryMin.addListener(handleMediaQueryMin);
}

//Why does Min need e.matches?
function handleMediaQueryMin (e){
    if (e.matches) {
        generateDesktop();
        addButtonEventListeners();
        changeBanner();       
    }
}

function handleMediaQueryMax () {
    generateMobile();
    addButtonEventListeners();
    changeBanner();
}