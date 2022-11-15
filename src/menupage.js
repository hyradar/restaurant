import {generateTopBar} from './topbar.js';
import entreesIcon from './images/menuicons/wheat.png';
import seafoodIcon from './images//menuicons/prawn.png';
import mainsIcon from './images/menuicons/food-tray.png';
import saladsIcon from './images/menuicons/salad.png';
import dessertsIcon from './images/menuicons/cupcake.png';

import entreeCategoryImageMobile from './images/categoryimages/entreecategorymobile.svg';
import entreeCategoryImageDesktop from './images/categoryimages/entreecategorydesktop.svg';

export function generateMenu() {
    
    let content = document.getElementById('content');
    let centerBox = document.querySelector('.centerbox');

    //Page Div to manage layout
    let menuPageDiv = document.createElement('div');
    menuPageDiv.className = 'menupagediv';

    content.appendChild(menuPageDiv);

    //Title Card
    let menuTitle = document.createElement('h1');
    let menuTitleCard = document.createElement('div');
    menuTitle.className = 'menutitle';
    menuTitle.innerHTML = 'Seafra Menu';
    menuTitleCard.className = 'menutitlecard';

    menuTitleCard.appendChild(menuTitle);
    menuPageDiv.appendChild(menuTitleCard);

    //This Div is to organize all elements within the menu
    let menuDiv = document.createElement('div');
    let categoryDiv = document.createElement('div');
    //Will change below to img once I have one
    let categoryTitleImage = document.createElement('img');

    menuDiv.className = 'menudiv';
    categoryDiv.className = 'categorydiv';
    categoryTitleImage.className = 'categorytitleimage';
    
    if (window.innerWidth >= 700) {
        categoryTitleImage.src = entreeCategoryImageDesktop;
    }
    else {
        categoryTitleImage.src = entreeCategoryImageMobile;
    }
    
    
    //This will be used to house the menu filters
    let filterNav = document.createElement('nav');
    filterNav.className = 'filternav';
    filterNav.innerHTML = 'This will be used to house the menu filters';

    menuDiv.appendChild(filterNav);

    //generate food categories
    let optionCarousel = document.createElement('nav');
    let foodCategories = document.createElement('ul');
    optionCarousel.className = 'optionscarousel';
    foodCategories.className = 'foodcategories';

    //Create Food Groups for Menu
    function createFoodGroup(name, src) {
        
        return {
            name,
            src
        }
    }

    let entrees = createFoodGroup('Entrees', entreesIcon);
    let seafood = createFoodGroup('Seafood', seafoodIcon);
    let mains = createFoodGroup('Mains', mainsIcon);
    let salads = createFoodGroup('Salads', saladsIcon);
    let desserts = createFoodGroup('Desserts', dessertsIcon);

    //Create Array of different Food Groups
    let foodArray = [entrees, seafood, mains, salads, desserts];
    for (let i = 0; i < foodArray.length; i ++) {
        let foodOption = document.createElement('li');
        foodOption.className = 'foodoption';

        let foodOptionImage = document.createElement('img');
        let foodOptionTitle = document.createElement('div');
        foodOptionImage.className = 'foodoptionimage';
        foodOptionImage.id = foodArray[i].name;
        foodOptionImage.src = foodArray[i].src;
        foodOptionTitle.innerHTML = foodArray[i].name;

        foodOption.appendChild(foodOptionImage);
        foodOption.appendChild(foodOptionTitle);
        foodCategories.appendChild(foodOption);
    }
    optionCarousel.appendChild(foodCategories);
    menuDiv.appendChild(optionCarousel);
    menuPageDiv.appendChild(menuDiv);

    //Menu Table
    //Image? - Title/Descriptiong - Price
    let menuTable = document.createElement('table');
    menuTable.className = 'menutable';
    
    categoryDiv.appendChild(categoryTitleImage);
    menuDiv.appendChild(categoryDiv)
    menuDiv.appendChild(menuTable);
    
    for (let i = 0; i < 6; i++) {
        let tableRow = document.createElement('tr');
        menuTable.appendChild(tableRow);
        for (let i = 0; i < 1; i++) {
            let tableData = document.createElement('td');
            tableData.innerHTML = i;
            tableRow.appendChild(tableData);
        }
    }
}