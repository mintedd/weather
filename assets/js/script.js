// fetch('http://api.openweathermap.org/geo/1.0/direct?q=&appid={899885609b42fb1c311343820acf2670}'),{
//     //q = parameters  {city name} {state code}  {country code}
//     //method:GET?
// }
// .then()
//first api is for weather
//second api is for turn long and lat into city 
//how to get the icons for weather
//stores this city into local storage 

// declarations
var searchBtnEl = $(".btn")

function currentDay(){
   var today = moment().format("MMM Do YY");
    $('#today').text(today) 
}



searchBtnEl.on('click', function(e){
    e.preventDefault
    var userInput = $('#search-input').val() 
    localStorage.setItem('city', userInput) //user input is saving 
    init(userInput);

})
// searchBtnEl.addEventListener('click', function(e){
//     prompt("its working");
// })

function init(userInput) {
    var city = localStorage.getItem(userInput)
    console.log(userInput)
    console.log(city)
    if (userInput === city)
    $('#city-list').append(city)
}
init();