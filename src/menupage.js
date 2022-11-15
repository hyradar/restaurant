
export function generateMenu() {
    
    let alreadyMenuPage = document.querySelector('.menupagediv');

    //Added this if so that it would stop making a new menu on each click of 'Menu' 
    if (!alreadyMenuPage) {
        let centerBox = document.querySelector('.centerbox');
        let content = document.getElementById('content');
        
        //Remove previous page contents
        if (centerBox) {
            centerBox.remove();
        }
    
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
        let categoryTitleImage = document.createElement('div');
    
        menuDiv.className = 'menudiv';
        categoryDiv.className = 'categorydiv';
        categoryTitleImage.className = 'categorytitleimage';
        categoryTitleImage.innerHTML = 'this is where the category image will go';
        
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
    
        for (let i = 0; i < 5; i ++) {
            let foodOption = document.createElement('li');
            foodOption.className = 'foodoption';
    
            //Temporarily a div so I can use InnerHTML
            let foodOptionImage = document.createElement('div');
            let foodOptionTitle = document.createElement('div');
            foodOptionImage.innerHTML = 'food image';
            foodOptionTitle.innerHTML = 'food title';
    
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
        
        for (let i = 0; i < 20; i++) {
            let tableRow = document.createElement('tr');
            menuTable.appendChild(tableRow);
            for (let i = 0; i < 1; i++) {
                let tableData = document.createElement('td');
                tableData.innerHTML = i;
                tableRow.appendChild(tableData);
            }
        }
    }
}