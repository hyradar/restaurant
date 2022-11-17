import entreeCategoryImageMobile from './images/categoryimages/entreecategorymobile.svg';
import entreeCategoryImageDesktopGold from './images/categoryimages/entreecategorydesktopgold.svg';
import {changeCategoryView} from './view.js';
import {setCurrentCategory, xfoodArray} from './menulogic.js'
import {getCurrentCategory} from './menulogic.js';

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
        categoryTitleImage.src = entreeCategoryImageDesktopGold;
    }
    else {
        categoryTitleImage.src = entreeCategoryImageMobile;
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
        filterInput.type = 'checkbox';
        filterInput.name = filters[i];

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

        let foodOptionAnchor = document.createElement('a');
            foodOptionAnchor.className = 'foodoptionanchor';
            foodOptionAnchor.href = '#';

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
                    changeCategoryView(xfoodArray);
                    break;
                case 'Seafoodoption': 
                    setCurrentCategory(xfoodArray[1]);
                    changeCategoryView(xfoodArray);
                    break;
                case 'Mainsoption':  
                    setCurrentCategory(xfoodArray[2]);
                    changeCategoryView(xfoodArray);
                    break;
                case 'Saladsoption':
                    setCurrentCategory(xfoodArray[3]);
                    changeCategoryView(xfoodArray);
                    break;
                case 'Dessertsoption': 
                    setCurrentCategory(xfoodArray[4]);
                    changeCategoryView(xfoodArray);
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
    changeCategoryView();
}