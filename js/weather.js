




// map
mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/aaron-bond/cliaennuq010101r8589c2xm4', // style URL
    zoom: 10, // starting zoom
    center: [-115.17020709981152, 36.16092912022204]
});

// search (src: Johann)
$("#address-search-button").click(searchAddress);
$("#address-search-button").click(searchAddressR);

function searchAddress() {
    geocode($("#address-search").val(), mapBoxKey).then(function (result) {
        mapCenterLocation = result;
        map.setCenter(mapCenterLocation);
        map.setZoom(10);
        marker.setLngLat(mapCenterLocation)
        $.get("http://api.openweathermap.org/data/2.5/forecast?", {
            APPID: WM_KEY,
            lat: mapCenterLocation[1],
            lon: mapCenterLocation[0],
            units: "imperial"
        }).done(function(data) {
            console.log(data);
        });
    });
}
function searchAddressR() {
    let str = $("#address-search").val().replace(',','')
    let arr = str.split(" ")
    arr = rev(arr)
        mapCenterLocation = arr;
        map.setCenter(mapCenterLocation);
        map.setZoom(10);
        marker.setLngLat(mapCenterLocation)
        $.get("http://api.openweathermap.org/data/2.5/forecast?", {
            APPID: WM_KEY,
            lat: mapCenterLocation[1],
            lon: mapCenterLocation[0],
            units: "imperial"
        }).done(function(data) {
            console.log(data);
        });
}

// starting marker location
var startMarker = map.getCenter()

// marker
var marker = new mapboxgl.Marker({
    draggable: true,
    color: "grey"
})
    .setLngLat(startMarker)
    .addTo(map);

// on drag marker event
function onDragEnd() {
    const lngLat = marker.getLngLat();
    let lng = lngLat.lng
    let lat = lngLat.lat
    map.setCenter(lngLat);
    $.get("http://api.openweathermap.org/data/2.5/forecast?", {
        APPID: WM_KEY,
        lat: lat,
        lon: lng,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
    });
}

marker.on('dragend', onDragEnd);

// geocode search
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

// reverse geocode search
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates[0] + "," + coordinates[1] + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

function rev(x){
    return x.reverse()
}