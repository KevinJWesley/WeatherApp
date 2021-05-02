// DECLARE VARIABLES
var btnEl = $("#btn");
var cityInput = $("#cityInput");

function getApi() {
  var requestUrl =
    // fetching is successful.
    // need to leave space for user input eg:
    // var location = user inputfield
    //  "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=ea9aff33f304d2afc7927cf8a56cae75"
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput +
    "&appid=ea9aff33f304d2afc7927cf8a56cae75";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// must dynamically generate elements to pull from API and place in .container div
//// use for loop
// info to pull: city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//  button on click for btnEl
btnEl.on("click", function () {
  getApi();
});
