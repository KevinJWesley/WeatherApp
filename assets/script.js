function getApi() {
  var requestUrl =
    //   WHY IS OPENWEATHER API SHOWING 404
    // CHECK CONSOLE, GOOGLE IT!
    "api.openweathermap.org/data/2.5/weather?q=denver&appid=ea9aff33f304d2afc7927cf8a56cae75";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getApi();
