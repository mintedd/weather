# weather
Webpage takes user city search input and grabs the 5 day forecast from a weather api. 
For the weather api to register the city it needed to first run through a geolocation api that got the latitude and longitude of a city to then give the name back as a property. Additionally I took the user input city to store in local storage so that next time the user didn't need to research but could just click on the button in the saved search history. 


## User Story
```
AS A user
I WANT to search for a city
SO THAT I CAN see the 5 day weather forecast
```
## Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

[website](https://mintedd.github.io/weather/)
![alt](Screen%20Shot%202022-11-07%20at%2011.19.00%20PM.png)