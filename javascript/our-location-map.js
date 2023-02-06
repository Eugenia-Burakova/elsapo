//first map
// function initMap() {
//     const elsapoCoordinates = { lat: 40.7596544, lng: -73.9785171 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: elsapoCoordinates,
//         zoom: 18,
//     });
  
//     const contentString =
//         '<div id="content">' +
//         '<h1 class="firstHeadingOfLocation">ELSAPO</h1>' +
//         "<p>45 Rockefeller Plaza, New York, NY 10111</p>" +
//         "<p>USA</p>" +
//         "</div>";
  
//     const infowindow = new google.maps.InfoWindow({
//         content: contentString,
//     });
  
//     let marker = new google.maps.Marker({
//         position: elsapoCoordinates,
//         map,
//         title: "ELSAPO",
//     });
  
//     marker.addListener("click", () => {
//         infowindow.open({
//             anchor: marker,
//             map,
//         });
//     });
  
//     marker = infowindow.open({
//         anchor: marker,
//         map,
//     });
// }


//second map
function initMap() {
    const elsapoCoordinates = { lat: 40.733744440225315, lng: -74.17103362510088 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: elsapoCoordinates,
    });
    
    const marker = new google.maps.Marker({
      position: elsapoCoordinates,
      map: map,
    });
}
window.initMap = initMap;