mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/aaron-bond/cliaennuq010101r8589c2xm4', // style URL
    zoom: 10, // starting zoom
    center: [-115.17020709981152, 36.16092912022204]
});


$("#address-search-button").click(searchAddress);

function searchAddress() {
    geocode($("#address-search").val(), mapBoxKey).then(function (result) {
        mapCenterLocation = result;
        map.setCenter(mapCenterLocation);
        map.setZoom(10);
        marker.setLngLat(mapCenterLocation)
    });
}
var startMarker = map.getCenter()


var marker = new mapboxgl.Marker({
    draggable: true,
    color: "grey"
})
    .setLngLat(startMarker)
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    map.setCenter(lngLat)

}

marker.on('dragend', onDragEnd);

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

function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}