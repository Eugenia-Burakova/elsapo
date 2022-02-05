// (function () {
    function initMap() {
        const elsapoCoordinates = { lat: 40.7596544, lng: -73.9785171 };
        const map = new google.maps.Map(document.getElementById("map"), {
            center: elsapoCoordinates,
            zoom: 18,
        });
  
        const contentString =
            '<div id="content">' +
            '<h1 class="firstHeading">ELSAPO</h1>' +
            "<p>45 Rockefeller Plaza, New York, NY 10111</p>" +
            "<p>USA</p>" +
            "</div>";
  
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
  
        const marker = new google.maps.Marker({
            position: elsapoCoordinates,
            map,
            title: "ELSAPO",
        });
  
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
            });
        });
  
        marker = infowindow.open({
            anchor: marker,
            map,
        });
    }
// })();