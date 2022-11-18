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

}

export function clearContentDiv() {
    let content = document.getElementById('content');
    let children = content.children;

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}