mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/aaron-bond/cliaennuq010101r8589c2xm4', // style URL
    zoom: 10, // starting zoom
    center: [-115.17020709981152, 36.16092912022204],
});


var marker = new mapboxgl.Marker({
    draggable: true,
    color: "grey"
})
    .setLngLat([-115.17020709981152, 36.16092912022204])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    map.setCenter(lngLat)

}

marker.on('dragend', onDragEnd);