// DECLARE VARIABLES
var btnEl = $("#btn");
var locationInput = $("#locationInput");
var resultContent = $("#resultContent");
var history = $("#searchHistory");
// GET API
// "locationInput" changed to cityName
function getApi(cityName) {
  console.log(cityName);
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=ea9aff33f304d2afc7927cf8a56cae75";
  // fetching is successful.
  // need to leave space for user input eg:
  // var location = locationInput;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayForecast(data);
    }); 
}
// DYNAMIC DISPLAY
function displayForecast(data) {
  var weatherArray = data.list;
  // must dynamically generate elements to pull from API and place in .container div
  //// use for loop

  for (let i = 4; i < weatherArray.length; i += 8) {
    console.log(weatherArray[i]);
    var date = $("<h4>");
    var temp = $("<p>");
    var humidity = $("<p>");
    var windSpeed = $("<p>");

    // info to pull: the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

    date.text(weatherArray[i].dt_txt.slice(0, 10));
    temp.text(
      "Temperature: " + weatherArray[i].main.temp.toString().slice(0, 2) + "f"
    );
    humidity.text("Humidity: " + weatherArray[i].main.humidity + "%");
    windSpeed.text("Wind Speed: " + weatherArray[i].wind.speed + "mph");

    resultContent.append(date, temp, humidity, windSpeed);
  }
}

// SEARCH HISTORY
function getLocalStorage() {
  // var searchHistory = $("<li>");
  // var x = localStorage.getItem("location");
  localStorage.setItem("location", locationInput.val());

  document.getElementById("searchHistory").innerHTML = localStorage.getItem(
    "location"
  );
}

// must have text input clear and logged on somewhere on the page

//  button on click for btnEl
btnEl.on("click", function () {
  locationInput.value = " ";

  // value of locationInput goes to getApi
  getApi(locationInput.val());
  // saves to local storage
  getLocalStorage();
});
