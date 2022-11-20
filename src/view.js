
import mobileArrow from './images/mobilearrow.svg';
import seafraLogoBlack from './images/Seafralogo.svg';
import seafraLogoWhite from './images/seafraLogoWhite.svg';
import dropDownIcon from './images/dropdownicon.svg';
import {removeDropDown} from './dropdown.js'
import { generateMenu } from './menupage';
import { generateHomePage } from './homepage';
import { changeBanner } from './menupage';

export function siteStart() {
    
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

function handleMediaQueryMin (e){
    if (e.matches) {
        let body = document.querySelector('.bg');

        //Delete Button and Dropdown Menu
        let mobileMenuButton = document.querySelector('.mobilemenubutton');
        if (mobileMenuButton) {
            mobileMenuButton.remove();
        }
        let dropDown = document.querySelector('.dropdown');
        if (dropDown) {
            dropDown.remove();
        } 
    
        let topRow = document.querySelector('.toprow');
        if (topRow) {
            topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
        
        let menuBar = document.createElement('ul');
        menuBar.className = 'menubar';

        // ReAppend menu items 
        let menuArray = ['Home', 'Menu', 'Contact', 'Dev Notes'];
        menuArray.forEach((item)  => {
            let menuItem = document.createElement('li');
            menuItem.className = 'menuitem';
        
            let itemAnchor = document.createElement('a');
            itemAnchor.innerHTML = item;
            itemAnchor.href = '#';
            itemAnchor.id = item + 'button';
        
            menuItem.append(itemAnchor);
            menuBar.appendChild(menuItem);
        });
        let rowLogo = document.querySelector('.logo');
        rowLogo.src = seafraLogoWhite;
        let rowAnchor = document.querySelector('.rowanchor');
        rowAnchor.href = '#';
        rowAnchor.appendChild(rowLogo);
    
        topRow.appendChild(rowAnchor);
        topRow.appendChild(menuBar);
        body.insertBefore(topRow, content);

        addButtonEventListeners();
        changeBanner();       
    }
}

function handleMediaQueryMax (e) {
    generateMobile();
}

export function clearContentDiv() {
    let content = document.getElementById('content');
    let children = content.children;

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}

function generateDesktop() {
    let body = document.querySelector('.bg');
    let menuArray = ['Home', 'Menu', 'Contact', 'Dev Notes'];
    let rowAnchor = document.createElement('a');
    let rowLogo = document.createElement('img');
    let topRow = document.createElement('div');
    topRow.className = 'toprow';
    topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

    let menuBar = document.createElement('ul');
    menuBar.className = 'menubar';

    rowLogo.className = 'logo';
    rowLogo.src = seafraLogoWhite;
    rowLogo.alt = 'Seafra Logo';

    menuArray.forEach((item)  => {
        let menuItem = document.createElement('li');
        menuItem.className = 'menuitem';
    
        let itemAnchor = document.createElement('a');
        itemAnchor.innerHTML = item;
        itemAnchor.href = '#';
        itemAnchor.id = item + 'button';
    
        menuItem.append(itemAnchor);
        menuBar.appendChild(menuItem);

    rowAnchor = document.querySelector('.rowanchor');
    if (rowAnchor) {
        rowAnchor.appendChild(rowLogo);
    }
    topRow.appendChild(rowLogo);
    topRow.appendChild(menuBar);
    body.appendChild(topRow);
    });

}
function generateMobile() {

    
    let findRow = document.querySelector('.toprow');
    if (findRow) {
        findRow.remove();
    }
        
        let menuArray = ['Home', 'Menu', 'Contact', 'Dev Notes'];
        let topRow = document.createElement('div');
        topRow.className = 'toprow';
        let rowAnchor = document.createElement('a');
        rowAnchor.href = '#';
        rowAnchor.className = 'rowanchor';
        let rowLogo = document.createElement('img');
        rowLogo.alt = 'Seafra Logo';
        rowLogo.className = 'logo';
        rowLogo.src = seafraLogoBlack;

        let body = document.querySelector('.bg');
        let menuBar = document.querySelector('.menubar');
        let dropDown = document.querySelector('.dropdown');
        let mobileMenuButton = document.querySelector('.mobilemenubutton');
        
        if (menuBar != 'undefined' && menuBar != null) {
            menuBar.remove();
        }

        if (dropDown != 'undefined' && dropDown != null) {
            dropDown.remove();
        }
        if (mobileMenuButton != 'undefined' && mobileMenuButton != null) {
            mobileMenuButton.remove();
        }

        
        
        //Menu Button
        mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'mobilemenubutton';
        
        let menuButtonImage = document.createElement('img');
        menuButtonImage.src = dropDownIcon;
        menuButtonImage.alt = 'Click here to access dropdown menu in mobile';
        menuButtonImage.setAttribute('data', 'dropdown-button');
        
        rowAnchor.appendChild(rowLogo);
        mobileMenuButton.appendChild(menuButtonImage);
        
        topRow.style.backgroundColor = 'white';
        topRow.appendChild(rowAnchor);
        topRow.appendChild(mobileMenuButton);
        let content = document.getElementById('content');
        body.insertBefore(topRow, content);
        
        // Generating DropDown Menu
        dropDown = document.createElement('div');
        dropDown.className = 'dropdown';
        dropDown.setAttribute('data', 'dropdown');
        
        let dropDownMenu = document.createElement('ul');
        dropDownMenu.className = 'dropdown-menu';

        dropDown.appendChild(dropDownMenu);
        body.insertBefore(dropDown, content);
        
        //Geneate Dropdown Items
        menuArray.forEach((item)  => {
            let dropDownItem = document.createElement('li');
            dropDownItem.className = 'dropdown-item';
        
            let firstAnchor = document.createElement('a');
            firstAnchor.innerHTML = item;
            firstAnchor.href = '#';
            firstAnchor.id = item + 'button';
            firstAnchor.addEventListener('click', removeDropDown);
        
            let secondAnchor = document.createElement('a');
            secondAnchor.href = '#';
        
            let arrowImage = document.createElement('img');
            arrowImage.src = mobileArrow;
            arrowImage.addEventListener('click', removeDropDown);
        
            dropDownItem.append(firstAnchor);
            dropDownItem.append(secondAnchor);
            secondAnchor.append(arrowImage);
            dropDownMenu.append(dropDownItem);
        });
        
        addButtonEventListeners();
        changeBanner();
}

export function addButtonEventListeners() {
    let homeButton = document.getElementById('Homebutton');
    let menuButton = document.getElementById('Menubutton');
    if (homeButton) {
        homeButton.addEventListener('click', clearContentDiv);
        homeButton.addEventListener('click', generateHomePage);
    }
    
    if (menuButton) {
        menuButton.addEventListener('click', clearContentDiv);
        menuButton.addEventListener('click', generateMenu);
    }

}