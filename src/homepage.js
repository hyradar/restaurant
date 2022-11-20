
export function generateHomePage() {

    // Generating Center Box
    let content = document.getElementById('content');
    let centerBox = document.createElement('div');
    centerBox.className = 'centerbox';
    
    let centerTop = document.createElement('h1');
    centerTop.className = 'centertop';
    centerTop.innerHTML = 'Explore and Discover'
    
    let centerBottomDiv = document.createElement('div');
    let centerBottomText = document.createElement('h2');
    let centerBottomBlue = document.createElement('h2');

    centerBottomDiv.className = 'centerbottomdiv';
    centerBottomText.className = 'centerbottomtext';
    centerBottomText.innerHTML = 'The Seafra Seafood Collection';
    centerBottomBlue.className = 'centerbottomblue';
    centerBottomBlue.innerHTML = 'The Seafra Seafood Collection';
    
    centerBottomDiv.appendChild(centerBottomText);
    centerBottomDiv.appendChild(centerBottomBlue);

    centerBox.appendChild(centerTop);
    centerBox.appendChild(centerBottomDiv);
    content.appendChild(centerBox);
    content.appendChild(centerBox);
    content.appendChild(centerBox);
    content.appendChild(centerBox);
}

