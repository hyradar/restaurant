import {changeCategoryView, changeBanner} from './view.js';
import {entreesMenu, seafoodMenu, mainsMenu, saladsMenu, dessertsMenu, filterArray, entrees, setCurrentCategory, getCurrentCategory, xfoodArray, updateMenuWithFilters} from './menu.js';

export function generateMenu() {

    let content = document.getElementById('content');

    let checkIfAlreadyGenerated = document.querySelector('.menupagediv');
    if (!checkIfAlreadyGenerated) {
  
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
        categoryTitleImage.src = entrees.desktopBanner;
    }
    else {
        categoryTitleImage.src = entrees.mobileBanner;
    }
    
    //Information box
    let infoBox = document.createElement('div');
    infoBox.className = 'infobox';
    let infoBoxText = document.createElement('p');
    infoBoxText.className = 'infoboxtext';
    infoBoxText.textContent = 'Welcome to the filterable menu! If you have any dietary requirements or food allergies, use the filters below to change the menu accordingly.';

    infoBox.appendChild(infoBoxText);
    menuDiv.appendChild(infoBox);
    
    //Filter Navigation Element followed by filter creation based on object array
    let filterNav = document.createElement('nav');
    let filterNavInnerDiv = document.createElement('div');
    filterNav.className = 'filternav';
    filterNavInnerDiv.className = 'filternavinnerdiv';

    let filters = ['Vego', 'Dairy-Free', 'Treenut', 'Vegan', 'Fish',
     'Gluten-Free', 'Peanut', 'Soy', 'Shellfish', 'Egg'];

    for (let i = 0; i < filters.length; i ++) {
        let filterDiv = document.createElement('div');
        let filterInput = document.createElement('input');
        let filterLabel = document.createElement('label');

        filterDiv.className = 'filterdiv';

        filterInput.className = 'filterinput';
        filterInput.id = filterInput.className + filters[i];
        filterInput.type = 'checkbox';
        filterInput.name = filters[i];
        filterInput.addEventListener('click', () => {
            filterArray.setFilter(filterInput.id);
            updateMenuWithFilters(entreesMenu, filterArray);
            updateMenuWithFilters(seafoodMenu, filterArray);
            updateMenuWithFilters(mainsMenu, filterArray);
            updateMenuWithFilters(saladsMenu, filterArray);
            updateMenuWithFilters(dessertsMenu, filterArray);
            clearMenuItems();
            let category =  getCurrentCategory();
            switch (category) {
                case 'Entrees': generateMenuItems(entreesMenu);
                    break;
                case 'Seafood': generateMenuItems(seafoodMenu);
                    break;
                case 'Mains':  generateMenuItems(mainsMenu);
                    break;
                case 'Salads': generateMenuItems(saladsMenu);
                    break;
                case 'Desserts': generateMenuItems(dessertsMenu);
                    break;
                default:
                    break;
            }
            
        });

        filterLabel.for = filters[i];
        filterLabel.innerText = filters[i];
        filterLabel.className = 'filterinputlabel';

        filterDiv.append(filterLabel, filterInput);
        filterNavInnerDiv.append(filterDiv);
    }

    //Append everything to the menu div
    filterNav.appendChild(filterNavInnerDiv);
    menuDiv.appendChild(filterNav);

    //generate food categories
    let foodCategories = document.createElement('nav');
    foodCategories.className = 'foodcategories';

    for (let i = 0; i < xfoodArray.length; i ++) {

        let foodOptionAnchor = document.createElement('button');
            foodOptionAnchor.className = 'foodoptionbutton';
            //fdsa

        let foodOption = document.createElement('li');
            foodOption.className = 'foodoption';
            foodOption.id = xfoodArray[i].name + 'option';

        let foodOptionImage = document.createElement('img');
            foodOptionImage.className = 'foodoptionimage';
            foodOptionImage.id = xfoodArray[i].name + 'menuicon';
            foodOptionImage.src = xfoodArray[i].normalImage;
            xfoodArray[i].imageElement = foodOptionImage;

        let foodOptionTitle = document.createElement('h3');
            foodOptionTitle.innerHTML = xfoodArray[i].name;
            foodOptionTitle.id = xfoodArray[i].name + 'title';
            xfoodArray[i].titleElement = foodOptionTitle;

        foodOption.append(foodOptionImage, foodOptionTitle);
        foodOptionAnchor.appendChild(foodOption);
        foodCategories.appendChild(foodOptionAnchor);

        foodOption.addEventListener('mouseover', () => {
            
            switch (foodOption.id) {
                case 'Entreesoption':
                    xfoodArray[0].imageElement.src = xfoodArray[0].colorImage;
                    xfoodArray[0].titleElement.style.textDecoration = 'underline';
                    xfoodArray[0].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';

                    break;
                case 'Seafoodoption':  
                    xfoodArray[1].imageElement.src = xfoodArray[1].colorImage;
                    xfoodArray[1].titleElement.style.textDecoration = 'underline';
                    xfoodArray[1].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Mainsoption':  
                    xfoodArray[2].imageElement.src = xfoodArray[2].colorImage;
                    xfoodArray[2].titleElement.style.textDecoration = 'underline';
                    xfoodArray[2].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Saladsoption':  
                    xfoodArray[3].imageElement.src = xfoodArray[3].colorImage;
                    xfoodArray[3].titleElement.style.textDecoration = 'underline';
                    xfoodArray[3].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Dessertsoption':  
                    xfoodArray[4].imageElement.src = xfoodArray[4].colorImage;
                    xfoodArray[4].titleElement.style.textDecoration = 'underline';
                    xfoodArray[4].titleElement.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                default:
                    break;
            }
        });

        foodOption.addEventListener('mouseout', () => {
            let isCurrentCategory =  getCurrentCategory();
            switch (foodOption.id) {
                case 'Entreesoption': 
                    if (isCurrentCategory === 'Entrees') {
                        break;
                    } else {
                        xfoodArray[0].imageElement.src = xfoodArray[0].normalImage;
                        xfoodArray[0].titleElement.style.textDecoration = 'none';
                        break;
                    }
                case 'Seafoodoption':  
                    if (isCurrentCategory === 'Seafood') {
                        break;
                    } else {
                        xfoodArray[1].imageElement.src = xfoodArray[1].normalImage;
                        xfoodArray[1].titleElement.style.textDecoration = 'none';
                        break;
                    }
                    break;
                case 'Mainsoption':
                    if (isCurrentCategory === 'Mains') {
                        break;
                    } else {
                        xfoodArray[2].imageElement.src = xfoodArray[2].normalImage;
                        xfoodArray[2].titleElement.style.textDecoration = 'none';
                        break;
                    }  
                    break;
                case 'Saladsoption':
                    if (isCurrentCategory === 'Salads') {
                        break;
                    }
                    else {
                        xfoodArray[3].imageElement.src = xfoodArray[3].normalImage;
                        xfoodArray[3].titleElement.style.textDecoration = 'none';
                        break;
                    }  
                    break;
                case 'Dessertsoption': 
                    if (isCurrentCategory === 'Desserts') {
                        break;
                    }
                    else {
                        xfoodArray[4].imageElement.src = xfoodArray[4].normalImage;
                        xfoodArray[4].titleElement.style.textDecoration = 'none';
                        break;
                    }  
                default:
                    break;
            }
        });

        foodOption.addEventListener('click', () => {
            switch (foodOption.id) {
                case 'Entreesoption': 
                    setCurrentCategory(xfoodArray[0]);
                    clearMenuItems();
                    generateMenuItems(entreesMenu);
                    changeCategoryView();
                    changeBanner();
                    break;
                case 'Seafoodoption': 
                    setCurrentCategory(xfoodArray[1]);
                    clearMenuItems();
                    generateMenuItems(seafoodMenu);
                    changeCategoryView();
                    changeBanner();
                    break;
                case 'Mainsoption':  
                    setCurrentCategory(xfoodArray[2]);
                    clearMenuItems();
                    generateMenuItems(mainsMenu);
                    changeCategoryView();
                    changeBanner();
                    break;
                case 'Saladsoption':
                    setCurrentCategory(xfoodArray[3]);
                    clearMenuItems();
                    generateMenuItems(saladsMenu);
                    changeCategoryView();
                    changeBanner();
                    break;
                case 'Dessertsoption': 
                    setCurrentCategory(xfoodArray[4]);
                    clearMenuItems();
                    generateMenuItems(dessertsMenu);
                    changeCategoryView();
                    changeBanner();
                    break;
                default:
                    break;
            }
        });
    }

    menuDiv.appendChild(foodCategories);
    menuPageDiv.appendChild(menuDiv);

    //Menu Table
    //Image? - Title/Descriptiong - Price
    let menuLayout = document.createElement('div');
    menuLayout.className = 'menulayout';
    
    categoryDiv.appendChild(categoryTitleImage);
    menuDiv.appendChild(categoryDiv)
    menuDiv.appendChild(menuLayout);

    setCurrentCategory(xfoodArray[0]);
    generateMenuItems(entreesMenu);
    changeCategoryView(xfoodArray);
    }
  
}

function generateMenuItems(menu) {

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].canShow === true) {
            let menuLayout = document.querySelector('.menulayout');
            let row = document.createElement('div');
            row.className = 'menurow';
    
            let itemNamePrice = document.createElement('span');
            let itemName = document.createElement('span');
            let itemPrice = document.createElement('span');
            let itemDesc = document.createElement('span');
    
            itemNamePrice.className = 'itemnameprice';
            itemDesc.className = 'itemdesc';
    
            itemName.innerText = menu[i].name;
            itemDesc.innerText = menu[i].description;
            itemPrice.innerText = menu[i].price;
    
            itemNamePrice.appendChild(itemName);
            itemNamePrice.appendChild(itemPrice);
            row.appendChild(itemNamePrice);
            row.appendChild(itemDesc);
            menuLayout.appendChild(row);
        }    
    } 
}

//Deletes then recreates MenuLayout Div
function clearMenuItems() {
    let menu = document.querySelector('.menulayout');
    
    if (menu.childNodes.length > 0) {
        menu.remove();

        //Recreate Div
        let menuLayout = document.createElement('div');
        let menuDiv = document.querySelector('.menudiv');
        menuLayout.className = 'menulayout';
        menuDiv.className = 'menudiv';
        menuDiv.appendChild(menuLayout);
    }
}