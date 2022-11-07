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
    // var cityList= JSON.parse(localStorage.getItem('city'));
    // cityList.push(userInput)
    localStorage.setItem('city', userInput)
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
    var apiUrl = `${weatherApiUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}&units=imperial`
    fetch(apiUrl)
        .then(function (res) {
            return res.json()
                .then(function (data) {
                    console.log(data)
                    var city = data.city.name
                    console.log(city)
                    var temp = data.list[0].main.temp
                    console.log(temp)
                    var humidity = data.list[0].main.humidity
                    console.log(humidity)
                    var wind = data.list[0].wind.speed
                    console.log(wind)
                    var icon = data.list[0].weather[0].icon
                    console.log(icon)
                    var iconCode = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
                    if (!data) {
                        alert('Location not found');
                    } else {
                        //appendToHistory(data);
                        todaysWeather(data);
                        console.log(todaysWeather)
                    }
                })
                .catch(function (err) {
                    console.error(err);
                });
        })
}

var currentDay = function () {
    var today = moment().format("MMM Do YY");
    $('#date').text(today)
}

var todaysWeather = function (weatherStats) {
    document.getElementById('today').textContent = weatherStats.city.name
    var iconCode = document.createElement('img')
    var alertArea = document.getElementById('alert-area')

    iconCode.setAttribute('src','http://openweathermap.org/img/wn/' + weatherStats.list[0].weather[0].icon + '@2x.png');
    alertArea.append(iconCode)
    var temperature = document.createElement('div')
    temperature.textContent = weatherStats.list[0].main.temp + " F"
    alertArea.append(temperature)
    var wind = document.createElement('div')
    wind.textContent = weatherStats.list[0].wind.speed + "MPH"
    alertArea.append(wind)
    var humidity = document.createElement('div')
    humidity.textContent = weatherStats.list[0].main.humidity + "%"
    alertArea.append(humidity)
    for (let i = 0; i < 5; i++) {
        var element = weatherStats[i];
        var iconCode = document.createElement('img')
        var card = document.getElementById('card-'+(i+1))

        iconCode.setAttribute('src','http://openweathermap.org/img/wn/' + weatherStats.list[i].weather[0].icon + '@2x.png');
        card.append(iconCode)
        var temperature = document.createElement('div')
        temperature.textContent = weatherStats.list[i].main.temp + " F"
        card.append(temperature)
        var wind = document.createElement('div')
        wind.textContent = weatherStats.list[i].wind.speed + "MPH"
        card.append(wind)
        var humidity = document.createElement('div')
        humidity.textContent = weatherStats.list[i].main.humidity + "%"
        card.append(humidity)
    }

}

var appendToHistory = function () {
    if (fetchWeather.length === 0) {
        alertArea.textContent = "No Weather Found"
        return;
    }
    todaysWeather.textContent = fetchWeather
}

//need to parse 5 day forecast into separate boxes?
searchBtnEl.addEventListener('click', formSubmit);
function init() {
    var city = localStorage.getItem('city')
    console.log(city)
    var btnEl = document.createElement('button')
    btnEl.textContent = city
    $('#city-list').append(btnEl)

    btnEl.addEventListener('click',function(e){
       var city = this.textContent
       if (city) {
        getCity(city)
    }
    })

}
init();