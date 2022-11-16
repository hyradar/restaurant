import {generateTopBar} from './topbar.js';
import {changeIconColor} from './menulogic.js';
import entreesIcon from './images/menuicons/wheat.png';
import entreesIconColor from './images/menuicons/wheatcolor.svg';
import seafoodIcon from './images//menuicons/prawn.png';
import seafoodIconColor from './images/menuicons/prawncolor.svg';
import mainsIcon from './images/menuicons/food-tray.png';
import mainsIconColor from './images/menuicons/food-traycolor.svg';
import saladsIcon from './images/menuicons/salad.png';
import saladsIconColor from './images/menuicons/saladcolor.svg';
import dessertsIcon from './images/menuicons/cupcake.png';
import dessertsIconColor from './images/menuicons/cupcakecolor.svg';
import entreeCategoryImageMobile from './images/categoryimages/entreecategorymobile.svg';
import entreeCategoryImageDesktop from './images/categoryimages/entreecategorydesktop.svg';
import entreeCategoryImageDesktopGold from './images/categoryimages/entreecategorydesktopgold.svg';

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
    let optionCarousel = document.createElement('nav');
    let foodCategories = document.createElement('ul');
    optionCarousel.className = 'optionscarousel';
    foodCategories.className = 'foodcategories';

    //Create Food Groups for Menu
    function createFoodGroup(name, src, color) {
        return {
            name,
            src,
            color
        }
    }

    let entrees = createFoodGroup('Entrees', entreesIcon, entreesIconColor);
    let seafood = createFoodGroup('Seafood', seafoodIcon, seafoodIconColor);
    let mains = createFoodGroup('Mains', mainsIcon, mainsIconColor);
    let salads = createFoodGroup('Salads', saladsIcon, saladsIconColor);
    let desserts = createFoodGroup('Desserts', dessertsIcon, dessertsIconColor);

    //Create Array of different Food Groups
    let foodArray = [entrees, seafood, mains, salads, desserts];
    for (let i = 0; i < foodArray.length; i ++) {

        // let foodDiv = document.createElement('div');

        let foodOptionAnchor = document.createElement('a');
            foodOptionAnchor.className = 'foodoptionanchor';
            foodOptionAnchor.href = '#';

        let foodOption = document.createElement('li');
            foodOption.className = 'foodoption';
            foodOption.id = foodArray[i].name + 'option';

        let foodOptionImage = document.createElement('img');
            foodOptionImage.className = 'foodoptionimage';
            foodOptionImage.id = foodArray[i].name + 'menuicon';
            foodOptionImage.src = foodArray[i].src;

        let foodOptionTitle = document.createElement('h3');
            foodOptionTitle.innerHTML = foodArray[i].name;
            foodOptionTitle.id = foodArray[i].name + 'title';

        // foodOption.appendChild(foodOptionImage);
        // foodOption.appendChild(foodOptionTitle);
        foodOption.append(foodOptionImage, foodOptionTitle);
        foodOptionAnchor.appendChild(foodOption);
        foodCategories.appendChild(foodOptionAnchor);
        // foodDiv.appendChild(foodOptionAnchor);

        foodOption.addEventListener('mouseover', () => {
            let entree = document.getElementById('Entreesmenuicon');
            let entreeTitle = document.getElementById('Entreestitle');
            let seafood = document.getElementById('Seafoodmenuicon');
            let seafoodTitle = document.getElementById('Seafoodtitle');
            let mains = document.getElementById('Mainsmenuicon');
            let mainsTitle = document.getElementById('Mainstitle');
            let salads = document.getElementById('Saladsmenuicon');
            let saladsTitle = document.getElementById('Saladstitle');
            let desserts = document.getElementById('Dessertsmenuicon');
            let dessertTitle = document.getElementById('Dessertstitle');
            
            switch (foodOption.id) {
                case 'Entreesoption':  
                    entree.src = entreesIconColor;
                    entreeTitle.style.textDecoration = 'underline';
                    entreeTitle.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Seafoodoption':  
                    seafood.src = seafoodIconColor;
                    seafoodTitle.style.textDecoration = 'underline';
                    seafoodTitle.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Mainsoption':  
                    mains.src = mainsIconColor;
                    mainsTitle.style.textDecoration = 'underline';
                    mainsTitle.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Saladsoption':  
                    salads.src = saladsIconColor;
                    saladsTitle.style.textDecoration = 'underline';
                    saladsTitle.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                case 'Dessertsoption':  
                    desserts.src = dessertsIconColor;
                    dessertTitle.style.textDecoration = 'underline';
                    dessertTitle.style.textDecorationColor = 'var(--clr-accent-1)';
                    break;
                default:
                    break;
            }
        });

        foodOption.addEventListener('mouseout', () => {
            let entree = document.getElementById('Entreesmenuicon');
            let entreeTitle = document.getElementById('Entreestitle');
            let seafood = document.getElementById('Seafoodmenuicon');
            let seafoodTitle = document.getElementById('Seafoodtitle');
            let mains = document.getElementById('Mainsmenuicon');
            let mainsTitle = document.getElementById('Mainstitle');
            let salads = document.getElementById('Saladsmenuicon');
            let saladsTitle = document.getElementById('Saladstitle');
            let desserts = document.getElementById('Dessertsmenuicon');
            let dessertsTitle = document.getElementById('Dessertstitle');

            switch (foodOption.id) {
                case 'Entreesoption':  
                    entree.src = entreesIcon;
                    entreeTitle.style.textDecoration = 'none';
                    break;
                case 'Seafoodoption':  
                    seafood.src = seafoodIcon;
                    seafoodTitle.style.textDecoration = 'none'
                    break;
                case 'Mainsoption':  
                    mains.src = mainsIcon;
                    mainsTitle.style.textDecoration = 'none';
                    break;
                case 'Saladsoption':
                    salads.src = saladsIcon;
                    saladsTitle.style.textDecoration = 'none'
                    break;
                case 'Dessertsoption':  
                    desserts.src = dessertsIcon;
                    dessertsTitle.style.textDecoration = 'none';
                    break;
                default:
                    break;
            }

        });

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