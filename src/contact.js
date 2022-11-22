// Initialize and add the map

export function generateContactPage() {
    let content = document.getElementById('content');
    
    let contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contactpagediv';
    
    //Info
    let infoDiv = document.createElement('div');
    infoDiv.id = 'contactinfodiv';
    infoDiv.innerText = 'wooooo';
    content.appendChild(infoDiv);


    //Contact Form
    let contactForm = document.createElement('form');
    contactForm.id = 'contactform';
    
    let inputFieldset = document.createElement('fieldset');
    inputFieldset.id = 'inputfieldset';

    let nameTextInput = document.createElement('input');
    nameTextInput.type = 'text';
    nameTextInput.id = 'nametextinput';
    nameTextInput.name = 'nametextinput';

    let nameTextLabel = document.createElement('label');
    nameTextLabel.for = nameTextInput.id;
    nameTextLabel.innerText = 'Full Name';

    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'emailinput';
    emailInput.name = 'emailinput';

    let emailLabel = document.createElement('label');
    emailLabel.for = emailInput.id;
    emailLabel.innerText = 'Email';

    let messageInput = document.createElement('textarea');
    // messageInput.type = 'text';
    messageInput.rows = '3';
    messageInput.cols = '20';
    messageInput.id = 'messageinput';
    messageInput.name = 'messageinput';

    let messageLabel = document.createElement('label');
    messageLabel.for = messageInput.id;
    messageLabel.innerText = 'Enter your message below';

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'contactsubmitbutton';
    submitButton.innerText = 'Submit';

    //Appending Contact Form together
    inputFieldset.append(nameTextLabel, nameTextInput, emailLabel, emailInput, messageLabel, messageInput);
    contactForm.append(inputFieldset, submitButton);

    //Google Maps
    let mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    
    contactPageDiv.append(infoDiv, contactForm, mapDiv);
        content.appendChild(contactPageDiv);
        initMap();    
}

function initMap() {
    // The location of Uluru
    const uluru = { lat: -37.863379, lng: 144.973158 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;