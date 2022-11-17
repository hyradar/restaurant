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

//Create Food Groups for Menu
 function foodGroup(name, normalImage, colorImage, imageElement, titleElement, isCurrentCategory) {
    return {
        name,
        normalImage,
        colorImage,
        imageElement,
        titleElement,
        isCurrentCategory,
    }
}

let entrees = foodGroup('Entrees', entreesIcon, entreesIconColor, document.getElementById('Entreesmenuicon'), document.getElementById('Entreestitle'), true);
let seafood = foodGroup('Seafood', seafoodIcon, seafoodIconColor, document.getElementById('Seafoodmenuicon'), document.getElementById('Seafoodtitle'), false);
let mains = foodGroup('Mains', mainsIcon, mainsIconColor, document.getElementById('Mainsmenuicon'), document.getElementById('Mainstitle'), false);
let salads = foodGroup('Salads', saladsIcon, saladsIconColor, document.getElementById('Saladsmenuicon'), document.getElementById('Saladstitle'), false);
let desserts = foodGroup('Desserts', dessertsIcon, dessertsIconColor, document.getElementById('Dessertsmenuicon'), document.getElementById('Dessertstitle'), false);

export const xfoodArray = [entrees, seafood, mains, salads, desserts];

export function getCurrentCategory() {
    for (let i = 0; i < xfoodArray.length; i++) {
        if (xfoodArray[i].isCurrentCategory) {
            return xfoodArray[i].name;
        }
    }
}

export function setCurrentCategory(foodGroup) {
    xfoodArray.forEach((item) => {
        if (item != foodGroup) {
            item.isCurrentCategory = false
        }
        else {
            item.isCurrentCategory = true;
        }
    });
}