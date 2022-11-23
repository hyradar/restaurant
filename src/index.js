import './style.css';
//Desktop
import { generateHomePage } from './homepage.js';
import { changeBanner } from './menupage.js';
import {generateDesktop, generateMobile, generateContent, addButtonEventListeners, setCurrentPage} from './view.js';
import {cPage} from './data.js';
import { generateContactPage } from './contact';

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
        cPage.currentPage = document.getElementById('Homebutton');
        setCurrentPage(cPage.currentPage);
    } else {
        generateDesktop();
        cPage.currentPage = document.getElementById('Homebutton');
        setCurrentPage(cPage.currentPage);
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
        setCurrentPage(cPage.currentPage);
    }
}

function handleMediaQueryMax () {
    generateMobile();
    addButtonEventListeners();
    changeBanner();
    setCurrentPage(cPage.currentPage);
}