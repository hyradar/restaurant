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
import { xfoodArray } from './menulogic';

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

    // switch (foodChoice) {
    //     case 'Entrees':
    //         entreesImage.src = entreesIconColor;
    //         entreesTitle.style.textDecoration = 'underline';
    //         entreesTitle.style.textDecorationColor = 'var(--clr-accent-1)';
    //         break;
    //     case 'Seafood':
    //         seafoo.src = entreesIconColor;
    //         entreesTitle.style.textDecoration = 'underline';
    //         entreesTitle.style.textDecorationColor = 'var(--clr-accent-1)';
    //         break;
    //     case 'Mains':
    //         break;
    //     case 'Salads':
    //         break;
    //     case 'Desserts':
    //         break;
    //     default:
    //         console.log('you hit the default!');
    //         break;
    // }

}

export function clearContentDiv() {
    let content = document.getElementById('content');
    let children = content.children;

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}