// declare all id in html
var search = document.getElementById('search-input')
var searchBtnEl = document.getElementById('search-btn')
var cityList = document.getElementById('city-list') //append from local storage
var todaysWeather = document.getElementById('today') 
var forecastList = document.getElementById('forecast')
var weatherApiUrl = "https://api.openweathermap.org"
var apiKey = '899885609b42fb1c311343820acf2670'
// search btn activate an eventlistener 
//validate city 
//fetch to grab the city 
searchBtnEl.addEventListener('click', function(e){
    e.preventDefault
    var userInput = search.value.trim()
    
    getCity(userInput);
    // search.value = ''
})
//city will be obj, long and lat are properties 
function getCity(userInput){
    var apiUrl = `${weatherApiUrl}/geo/1.0/direct?q=${userInput}&limit=5&appid=${apiKey}`;
    console.log(apiUrl)
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (!data[0]) {
        alert('Location not found');
      } else {
        //appendToHistory(userInput);
        getCity(data[0]);
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

function fetchWeather(location){
    var {lat, lon} = location
    var city = location.name
    var apiUrl = `${weatherApiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    console.log(location)
    console.log(city)
    console.log(apiUrl)
    fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
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
    });
}



// var apiURL = 

// getApi()

// function getApi()

// // fetch(geo) {