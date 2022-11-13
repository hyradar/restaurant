import mobileArrow from './images/mobilearrow.svg';
import seafraLogo from './images/Seafralogo.svg';
import dropDownIcon from './images/dropdownicon.svg';

let body = document.querySelector('.bg');
const content = document.getElementById('content');
let paragraph = document.createElement('p');

document.title = 'Seafra';

//Generating Top Row

let topRow = document.createElement('div');
topRow.className = 'toprow';

//Logo
let rowAnchor = document.createElement('a');
let rowLogo = document.createElement('img');
rowLogo.className = 'logo';
rowLogo.src = seafraLogo;
rowLogo.alt = 'Seafra Logo';

//Menu Button
let mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'mobilemenubutton';

let menuButtonImage = document.createElement('img');
menuButtonImage.src = dropDownIcon;
menuButtonImage.alt = 'Click here to access dropdown menu in mobile';
menuButtonImage.setAttribute('data', 'dropdown-button');

rowAnchor.appendChild(rowLogo);
mobileMenuButton.appendChild(menuButtonImage);

topRow.appendChild(rowAnchor);
topRow.appendChild(mobileMenuButton);
content.append(topRow);

// Generating DropDown Menu

let menuArray = ['Home', 'Menu', 'Events', 'Contact', 'Dev Notes'];

let dropDown = document.createElement('div');
dropDown.className = 'dropdown';
dropDown.setAttribute('data', 'dropdown');

let dropDownMenu = document.createElement('ul');
dropDownMenu.className = 'dropdown-menu';

content.appendChild(dropDown);
dropDown.appendChild(dropDownMenu);

menuArray.forEach((item)  => {
    let dropDownItem = document.createElement('li');
    dropDownItem.className = 'dropdown-item';

    let firstAnchor = document.createElement('a');
    firstAnchor.innerHTML = item;
    firstAnchor.href = '#';

    let secondAnchor = document.createElement('a');
    secondAnchor.href = '#';

    let arrowImage = document.createElement('img');
    arrowImage.src = mobileArrow;

    dropDownItem.append(firstAnchor);
    dropDownItem.append(secondAnchor);
    secondAnchor.append(arrowImage);
    
    dropDownMenu.append(dropDownItem);
});

// Generating Center Box

let centerBox = document.createElement('div');
centerBox.className = 'centerbox';

let centerTop = document.createElement('h2');
centerTop.className = 'centertop';
centerTop.innerHTML = 'Explore and Discover'
let centerBottom = document.createElement('h1');
centerBottom.className = 'centerbottom';
centerBottom.innerHTML = 'The Seafra Seafood Collection'

centerBox.appendChild(centerTop);
centerBox.appendChild(centerBottom);
content.appendChild(centerBox);