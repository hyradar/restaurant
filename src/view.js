import { xfoodArray } from './menu.js';
import mobileArrow from './images/mobilearrow.svg';
import seafraLogoBlack from './images/Seafralogo.svg';
import seafraLogoWhite from './images/seafraLogoWhite.svg';
import dropDownIcon from './images/dropdownicon.svg';
import {removeDropDown} from './dropdown.js'
import { generateMenu } from './menupage';
import { generateHomePage } from './homepage';

export function generateTopBar() {
    const body = document.querySelector('.bg');
    document.title = 'Seafra';
    
    //Generating Top Row
    let topRow = document.createElement('div');
    topRow.className = 'toprow';
    let rowAnchor = document.createElement('a');
    let rowLogo = document.createElement('img');
    rowLogo.alt = 'Seafra Logo';
    rowLogo.className = 'logo';
    
    let menuArray = ['Home', 'Menu', 'Contact', 'Dev Notes'];
    
    // Starts with Mobile HTML
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

    changeBanner(); 
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
        rowAnchor.appendChild(rowLogo);
    
        topRow.appendChild(rowAnchor);
        topRow.appendChild(menuBar);
        body.insertBefore(topRow, content);

        let homeButton = document.getElementById('Homebutton');
        if (homeButton) {
            homeButton.addEventListener('click', clearContentDiv);
            homeButton.addEventListener('click', generateHomePage);
        }
            
        let menuButton = document.getElementById('Menubutton');
        if (menuButton) {
            menuButton.addEventListener('click', clearContentDiv);
            menuButton.addEventListener('click', generateMenu);
        }   
        changeBanner();       
    }
}

function handleMediaQueryMax (e) {
    generateMobile();
}


//Technically Menu View
export function changeCategoryView() {

    xfoodArray.forEach((item) => {
        if (item.isCurrentCategory) {
            item.imageElement.src = item.colorImage;
            item.titleElement.style.textDecoration = 'underline';
            item.titleElement.style.textDecorationColor = 'var(--clr-accent-1)';
        } else {
            item.imageElement.src = item.normalImage;
            item.titleElement.style.textDecoration = 'none';
        }
    });
}

export function clearContentDiv() {
    let content = document.getElementById('content');
    let children = content.children;

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}

export function changeBanner() {
    let banner = document.querySelector('.categorytitleimage');
    xfoodArray.forEach((item) => {
    
        if (banner) {
            if (item.isCurrentCategory) {
                if (window.innerWidth >= 700) {
                    banner.src = item.desktopBanner;
                }
                else {
                    banner.src = item.mobileBanner;
                }
            }
        }
    });
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
    console.log('generatemobilefiring');
    let menuArray = ['Home', 'Menu', 'Contact', 'Dev Notes'];
    
    let findRow = document.querySelector('.toprow');
    if (findRow) {}
    findRow.remove();
        
        let topRow = document.createElement('div');
        topRow.className = 'toprow';
        let rowAnchor = document.createElement('a');
        rowAnchor.className = 'rowanchor';
        let rowLogo = document.createElement('img');
        rowLogo.alt = 'Seafra Logo';
        rowLogo.className = 'logo';

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

        rowLogo.src = seafraLogoBlack;
        
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

        changeBanner();
    }
    