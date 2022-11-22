// Initialize and add the map

export function generateContactPage() {
    let content = document.getElementById('content');
    
    let contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contactpagediv';
    let infoDiv = document.createElement('div');
    infoDiv.id = 'contactinfodiv';
    infoDiv.innerText = 'wooooo';
    content.appendChild(infoDiv);

    let mapDiv = document.createElement('div');
    mapDiv.id = 'map';
    
    contactPageDiv.append(infoDiv, mapDiv);
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