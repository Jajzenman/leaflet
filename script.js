let poemMap;

// Initialize the map
poemMap = L.map('map');

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);
poemMap.setView([40.7128, -74.0060], 16);

// Example marker
const timeSquare = L.marker([40.7580, -73.9855]).addTo(poemMap)
    .bindPopup('A poetic marker!')
    .openPopup();