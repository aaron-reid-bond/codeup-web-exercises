// map
mapboxgl.accessToken = mapBoxKey;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/aaron-bond/cliaennuq010101r8589c2xm4', // style URL
    zoom: 10, // starting zoom
    center: [-115.17020709981152, 36.16092912022204]
});

// Pulls the weather info for the start location
geocode("las Vegas", mapBoxKey).then(function (result) {
    mapCenterLoc = result;
    map.setCenter(result);
    $.get("http://api.openweathermap.org/data/2.5/forecast?", {
        APPID: WM_KEY,
        lat: result[1],
        lon: result[0],
        units: "imperial"
    }).done(function(data) {
        dataSplit1 = []
        dataSplit2 = []
        dataSplit3 = []
        dataSplit4 = []
        dataSplit5 = []
        weatherData(data);
        weatherCard($('#day1'), dataSplit1)
        weatherCard($('#day2'), dataSplit2)
        weatherCard($('#day3'), dataSplit3)
        weatherCard($('#day4'), dataSplit4)
        weatherCard($('#day5'), dataSplit5)
    });
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
            dataSplit1 = []
            dataSplit2 = []
            dataSplit3 = []
            dataSplit4 = []
            dataSplit5 = []
            weatherData(data);
            weatherCard($('#day1'), dataSplit1)
            weatherCard($('#day2'), dataSplit2)
            weatherCard($('#day3'), dataSplit3)
            weatherCard($('#day4'), dataSplit4)
            weatherCard($('#day5'), dataSplit5)
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
            dataSplit1 = []
            dataSplit2 = []
            dataSplit3 = []
            dataSplit4 = []
            dataSplit5 = []
            weatherData(data);
            weatherCard($('#day1'), dataSplit1)
            weatherCard($('#day2'), dataSplit2)
            weatherCard($('#day3'), dataSplit3)
            weatherCard($('#day4'), dataSplit4)
            weatherCard($('#day5'), dataSplit5)
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
        dataSplit1 = []
        dataSplit2 = []
        dataSplit3 = []
        dataSplit4 = []
        dataSplit5 = []
        weatherData(data);
        weatherCard($('#day1'), dataSplit1)
        weatherCard($('#day2'), dataSplit2)
        weatherCard($('#day3'), dataSplit3)
        weatherCard($('#day4'), dataSplit4)
        weatherCard($('#day5'), dataSplit5)
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

// thakes the array made in a prior function and reverses the order
function rev(x){
    return x.reverse()
}

// lets' are splitting the array of lists into blocks of 8 by the function of weatherData

let dataSplit1 =[]
let dataSplit2 =[]
let dataSplit3 =[]
let dataSplit4 =[]
let dataSplit5 =[]


function weatherData(data) {
    const dataList = data.list
    dataList.forEach(function(el, i) {
        if(i >= 0 && i <= 7){
            dataSplit1.push(el)
        }else if(i >= 8 && i <= 15) {
            dataSplit2.push(el)
        }else if(i >= 16 && i <= 23) {
            dataSplit3.push(el)
        }else if(i >= 24 && i <= 31) {
            dataSplit4.push(el)
        }else if(i >= 32 && i <= 39) {
            dataSplit5.push(el)
        }
    })
    console.log(dataSplit1);
    console.log(dataSplit2);
    console.log(dataSplit3);
    console.log(dataSplit4);
    console.log(dataSplit5);
}

// weatherCard will take the Vars from above individually and pass the into the html card
function weatherCard(location, arr) {
    let d = parseFloat(arr[0].dt) * 1000;
    let date = new Date(+d);
    let day = date.toDateString().split(' ')[0]
    let dayName = ""
    let tempMax = 0
    let tempMin = 100
    let humidity = []
    let humT = 0
    let windDeg = []
    let wDegT = 0
    let windGust = []
    let wGustT = 0
    let windSpeed = []
    let wSpeedT = 0
    let weatherIcon =`https://openweathermap.org/img/wn/${arr[5].weather[0].icon}@2x.png`

    $('#day1').html()
    $('#day2').html()
    $('#day3').html()
    $('#day4').html()
    $('#day5').html()

    // gets proper day
    if(day === "Mon") {
        dayName = "Monday";
    }else if(day === "Tue") {
        dayName = "Tuesday"
    }else if(day === "Wed") {
        dayName = "Wednesday"
    }else if(day === "Thu") {
        dayName = "Thursday"
    }else if(day === "Fri") {
        dayName = "Friday"
    }else if(day === "Sat") {
        dayName = "Saturday"
    }else if(day === "Sun") {
        dayName = "Sunday"
    }

    // gets averages for each item
    arr.forEach(function (el) {
        humidity.push(el.main.humidity)
        humT = average(humidity)
        windDeg.push(el.wind.deg)
        wDegT = average(windDeg)
        windGust.push(el.wind.gust)
        wGustT = average(windGust)
        windSpeed.push(el.wind.speed)
        wSpeedT = average(windSpeed)
    })

    //averages an arr
    function average(array) {
        return Math.round(array.reduce((x,y) => x+y)/array.length)
    }

    //  this forEach loop gets the absolute max and min for temp
    arr.forEach(function (el){
        if(el.main.temp_max >= tempMax){
            tempMax = Math.round(el.main.temp_max)
        }
        if(el.main.temp_min <= tempMin){
            tempMin = Math.round(el.main.temp_min)
        }
    })

    // Builds the html
    location.html(`<div class="card text-center text-light bg-transparent m-0 w-100" style="width: 18rem;">` +
                    `<div class="card-body p-0">` +
                    `<h4 class="card-title">${dayName}</h4>` +
                    `<h1 class="card-title text-start float-start mb-0 mt-2 pt-1">${tempMax}&#176;<span class="fs-6">${tempMin}&#176;</span></h1>` +
                    `<img src="${weatherIcon}" alt="">` +
                    `<p class="card-text">Humidity: ${humT}<br>Wind Direction: ${wDegT} Deg<br>Wind speed: ${wSpeedT} mph<br>Wind gust: ${wGustT} mph</p>` +
                    `</div>`+
                  `</div>`)
}