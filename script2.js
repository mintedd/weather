// declare all id in html
var search = document.getElementById('search-input')
var searchBtnEl = document.getElementById('search-btn')
var cityList = document.getElementById('city-list') //append from local storage
var todaysWeather = document.getElementById('today')
var forecastList = document.getElementById('forecast')
var alertArea = document.getElementById('alert-area')
var weatherApiUrl = "https://api.openweathermap.org"
var apiKey = '899885609b42fb1c311343820acf2670'
// search btn activate an eventlistener 
var formSubmit = function (e) {
    e.preventDefault()
    var userInput = search.value.trim()

    if (userInput) {
        getCity(userInput)

        search.value = '';
        todaysWeather.textContent = '';
    }
    else {
        return
    }
    currentDay();
}

//validate city 
//fetch to grab the city 

//long and lat will become city
var getCity = function (userInput) {
    var apiUrl = `${weatherApiUrl}/geo/1.0/direct?q=${userInput}&limit=5&appid=${apiKey}`;
    console.log(apiUrl)
    fetch(apiUrl)
        .then(function (res) {
            return res.json()
                .then(function (data) {
                    if (!data[0]) {
                        alert('Location not found');
                    } else {
                        //appendToHistory(userInput);
                        fetchWeather(data[0]);
                    }
                })
                .catch(function (err) {
                    console.error(err);
                })
        });
}

var fetchWeather = function (data) {
    var { lat, lon } = data
    var city = data.city.name
    var temp = data.list[0].main.temp
    var humidity = data.list[0].main.humidity
    var wind = data.list[0].wind.speed
    var icon = data.list[0].weather[0].icon
    var iconCode = 'http://openweathermap.org/img/wn/' + icon + '2x.png' //  linkButtonEl.setAttribute('href', resultObj.url);
    var apiUrl = `${weatherApiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}&units=imperial`
    console.log(weather)
    console.log(apiUrl)
    fetch(apiUrl)
        .then(function (res) {
            console.log(res.json())
            return res.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert('Location not found');
            } else {
                //appendToHistory(location);
                todaysWeather(data[0]);
                console.log(todaysWeather)
            }
        })
        .catch(function (err) {
            console.error(err);
        });

}

function init() {
    var today = moment().format("MMM Do YY");
    document.getElementById('today').textContent(today)
    document.getElementById('today').append(today)
    console.log
}

// var appendToHistory = function (){

// }


// var todaysWeather = function (fetchWeather) { //need current forecast
//     if (fetchWeather.length === 0) {
//         alertArea.textContent = "No Weather Found"
//         return;
//     }
//     todaysWeather.textContent = fetchWeather

//     // for (let i = 0; i < .length; i++) {
//     //     var element = [i];

//     // }

//need to parse 5 day forecast into separate boxes?
searchBtnEl.addEventListener('click', formSubmit);
init();