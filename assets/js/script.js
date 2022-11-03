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
    $('#current-day').text(today) 
}

// $(".btn").on('click', function())
searchBtnEl.addEventListener('click', function(){
    alert("its working");
})