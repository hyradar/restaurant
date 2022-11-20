//Desktop
import seafraLogoWhite from './images/seafraLogoWhite.svg';

//Mobile
import seafraLogoBlack from './images/Seafralogo.svg';
import mobileArrow from './images/mobilearrow.svg';
import dropDownIcon from './images/dropdownicon.svg';

//Functions
import {removeDropDown} from './dropdown.js'
import {generateHomePage } from './homepage';
import {generateMenu, generateMenuItems} from './menupage';
import {getCurrentCategory} from './controller';

export function clearContentDiv() {
    let content = document.getElementById('content');
    let children = content.children;

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}

export function generateContent() {
    let content = document.createElement('div');
    let body = document.querySelector('.bg');
    content.id = 'content';
    body.appendChild(content);
}

export function generateDesktop() {

    let body = document.querySelector('.bg');
    let content = document.getElementById('content');
    let menuBar = document.createElement('ul');
    menuBar.className = 'menubar';

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

    //If there isn't a toprow (We are arriving for the first time to the site)
    let topRow = document.querySelector('.toprow');
    if (!topRow) {
  
        //Create TopRow
        let topRow = document.createElement('div');
        topRow.className = 'toprow';
        topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

        //Create Desktop Logo + Anchor
        let rowAnchor = document.createElement('a');
        rowAnchor.href = '#';

        let rowLogo = document.createElement('img');
        rowLogo.src = seafraLogoWhite;
        rowLogo.className = 'logo';
        rowLogo.alt = 'Seafra Logo';
        
        //Append everything
        rowAnchor.appendChild(rowLogo);
        topRow.appendChild(rowAnchor);
        topRow.appendChild(menuBar);
        body.appendChild(topRow);

    //If there is already a top row / we are coming from a different page
    } else {

        //Get rid of Mobile-Specific elements
        document.querySelector('.mobilemenubutton').remove();
        document.querySelector('.dropdown').remove();

        //Change to Desktop logo + background color
        let rowLogo = document.querySelector('.logo');
        rowLogo.src = seafraLogoWhite;
        topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

        //Append Desktop Menu
        topRow.appendChild(menuBar);
        body.insertBefore(topRow, content);
    }
}

export function generateMobile() {
    
    let findRow = document.querySelector('.toprow');
    if (findRow) {
        findRow.remove();
    }
    let menuBar = document.querySelector('.menubar');
    if (menuBar != 'undefined' && menuBar != null) {
        menuBar.remove();
    }
    let dropDown = document.querySelector('.dropdown');
    if (dropDown != 'undefined' && dropDown != null) {
        dropDown.remove();
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
    let content = document.getElementById('content');
    let mobileMenuButton = document.querySelector('.mobilemenubutton');
    
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
}

export function addButtonEventListeners() {
    let homeButton = document.getElementById('Homebutton');
    let menuButton = document.getElementById('Menubutton');
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            clearContentDiv();
            generateHomePage();
        });
    }
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            clearContentDiv();
            generateMenu();
            let category = getCurrentCategory();
            generateMenuItems(category);
        });
    }
}