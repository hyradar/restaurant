


export function generateDevNotesPage() {
    let content = document.getElementById('content');
    
    //Title Card
    let devTitle = document.createElement('h1');
    let devTitleCard = document.createElement('div');
    devTitle.className = 'title';
    devTitle.innerHTML = 'Dev Notes';
    devTitleCard.className = 'titlecard';
    
    devTitleCard.appendChild(devTitle);
    content.appendChild(devTitleCard);

    //Contact Page 
    let devPageDiv = document.createElement('div');
    devPageDiv.id = 'devnotespagediv';
    content.appendChild(devPageDiv);
    
}