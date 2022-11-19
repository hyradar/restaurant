import mobileArrow from './images/mobilearrow.svg';
import seafraLogoBlack from './images/Seafralogo.svg';
import seafraLogoWhite from './images/seafraLogoWhite.svg';
import dropDownIcon from './images/dropdownicon.svg';
import {removeDropDown} from './script.js'
import { generateMenu } from './menupage';
import {changeBanner, clearContentDiv} from './view.js';
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
    
        changeBanner();

        //Set Logo Color
        rowLogo.src = seafraLogoBlack;
        
        //Menu Button
        let mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'mobilemenubutton';
        
        //Menu Icon
        let menuButtonImage = document.createElement('img');
        menuButtonImage.src = dropDownIcon;
        menuButtonImage.alt = 'Click here to access dropdown menu in mobile';
        menuButtonImage.setAttribute('data', 'dropdown-button');
        
        //Append TopRow elements to content Div
        rowAnchor.appendChild(rowLogo);
        mobileMenuButton.appendChild(menuButtonImage);
        topRow.appendChild(rowAnchor);
        topRow.appendChild(mobileMenuButton);
        body.appendChild(topRow);
        
        // Generating DropDown Menu
        let dropDown = document.createElement('div');
        dropDown.className = 'dropdown';
        dropDown.setAttribute('data', 'dropdown');
        
        let dropDownMenu = document.createElement('ul');
        dropDownMenu.className = 'dropdown-menu';
        
        //Append dropdown to content div
        body.appendChild(dropDown);
        dropDown.appendChild(dropDownMenu);
        
        //Generate menu items via menuArray
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
        
            //Append array item to dropdown menu
            dropDownItem.append(firstAnchor);
            dropDownItem.append(secondAnchor);
            secondAnchor.append(arrowImage);
            dropDownMenu.append(dropDownItem);
        });

        let homeButton = document.getElementById('Homebutton');
        homeButton.addEventListener('click', clearContentDiv);
        homeButton.addEventListener('click', generateHomePage);
    
        let menuButton = document.getElementById('Menubutton');
        menuButton.addEventListener('click', clearContentDiv);
        menuButton.addEventListener('click', generateMenu);

        
    }
    
    //Starts with Desktop HTML
    if (window.innerWidth >= 700) {
        let menuBar = document.createElement('ul');
        menuBar.className = 'menubar';

        //Removes topRow background
        topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

        //ReAppend menu items 
        menuArray.forEach((item)  => {
            let menuItem = document.createElement('li');
            menuItem.className = 'menuitem';
        
            let itemAnchor = document.createElement('a');
            itemAnchor.innerHTML = item;
            itemAnchor.href = '#';
            itemAnchor.id = item + 'button';

            rowLogo.src = seafraLogoWhite;
        
            menuItem.append(itemAnchor);
            menuBar.appendChild(menuItem);
        });
    
        topRow.appendChild(rowLogo);
        topRow.appendChild(menuBar);
        body.appendChild(topRow);

        changeBanner();
            
    }


    //Media Queries
    const mediaQueryMax = window.matchMedia('(max-width: 699px');
    const mediaQueryMin = window.matchMedia('(min-width: 700px)');

    mediaQueryMax.addListener(handleMediaQueryMax);
    mediaQueryMin.addListener(handleMediaQueryMin);

    function handleMediaQueryMin (e){
        if (e.matches) {
            
            //Delete Button and Dropdown Menu
            let mobileMenuButton = document.querySelector('.mobilemenubutton');
            mobileMenuButton.remove();

            let dropDown = document.querySelector('.dropdown');
            dropDown.remove();

            //Set Seafra Logo to White Version
            rowLogo.src = seafraLogoWhite;

            //Append menu to Top Row
            let menuBar = document.createElement('ul');
            menuBar.className = 'menubar';
            topRow.appendChild(menuBar);

            //Removes topRow background
            topRow.style.backgroundColor = "rgba(0, 0, 0, 0)";

            //ReAppend menu items 
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

            let homeButton = document.getElementById('Homebutton');
            homeButton.addEventListener('click', clearContentDiv);
            homeButton.addEventListener('click', generateHomePage);
        
            let menuButton = document.getElementById('Menubutton');
            menuButton.addEventListener('click', clearContentDiv);
            menuButton.addEventListener('click', generateMenu);

            changeBanner();
        }
    }

    function handleMediaQueryMax (e) {
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
        homeButton.addEventListener('click', clearContentDiv);
        homeButton.addEventListener('click', generateHomePage);

        let menuButton = document.getElementById('Menubutton');
        menuButton.addEventListener('click', clearContentDiv);
        menuButton.addEventListener('click', generateMenu);

        changeBanner();
    }
}