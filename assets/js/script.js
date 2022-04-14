var dayOne = document.getElementById("dayOne");
var dayTwo = document.getElementById("dayTwo");
var dayThree = document.getElementById("dayThree");
var dayFour = document.getElementById("dayFour");
var dayFive = document.getElementById("dayFive");

var locationSearch = document.getElementById("locationSearch");
var searchButton = document.getElementById("searchBtn");

var city = document.getElementById("summaryCity");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uvIndex = document.getElementById("uvIndex");

var searchLocation = locationSearch.textContent;

var baseURL = "http://api.openweathermap.org/";
var apiKey = "295f6bd4f18e43d6b3b9627ef087838d";

function renderWeather() {
  console.log("RENDERWEATHER CALLED");
  var url = `${baseURL}geo/1.0/direct?q=${locationSearch.value}&limit=1&appid=${apiKey}`;
  console.log(url);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var cityObject = data[0];
      var lat = cityObject.lat;
      var lon = cityObject.lon;
      var cityName = cityObject.name;
      console.log(data);
      console.log(lat);
      console.log(lon);
      console.log(cityName);

      var currentWeatherUrl = `${baseURL}data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      fetch(currentWeatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          //   var weatherObject = data[0];
          var tempCurrent = data.current.temp;
          var windSpeed = data.current.wind_speed;
          var humidityLevel = data.current.humidity;
          var uv = data.current.uvi;
          var icon = data.current.weather[0].icon;

          //   city.textContent = cityName;   **CLEANER WAY TO DISPLAY MAIN CARD? HTML ELEMENTS??
          //   temp.textContent = tempCurrent;
          //   wind.textContent = windSeed;
          //   humidity.textContent = humidityLevel;
          //   uvIndex.textContent = uv;

          document.getElementById(
            "summaryCity"
          ).innerHTML = `<h2>${cityName}</h2>`;
          document.getElementById("summaryData").innerHTML = `
          <dl>
          <dt>temp:</dt>
       <dd>${tempCurrent}</dd>
       <dt>Wind:</dt>
       <dd>${windSpeed}</dd>
       <dt>Humidity</dt>
       <dd>${humidityLevel}</dd>
       <dt>UV Index</dt>
       <dd class="uvIdx">${uv}</dd>
     </dl>

       <h2 class="summaryIcon">${icon} ICON <h2>`;
        });
      populate5day();
    });

  function populate5day(data) {
    console.log("POPULATE % DAY CALLED");

    data.forEach(function (daily) {
      console.log(`day${i} card run`);
      var fiveDayTemp = daily.temp;
      var fiveDayWind = daily.wind;
      var fiveDayHumidity = daily.humidity;
      var fiveDayIcon = daily.weather[0].icon;

      document.getElementById(`day${i}`).innerHTML = `
    <h2>${fiveDayIcon} ICON <h2>

    <dl>
    <dt>temp:</dt>
 <dd>${fiveDaytemp}</dd>
 <dt>Wind:</dt>
 <dd>${fiveDayWind}</dd>
 <dt>Humidity</dt>
 <dd>${fiveDayHumidity}</dd>
</dl>
`;
    });
  }
}

//baseUrl + data/2.5/forecast?id=524901&appid= + apiKey;

function handleFormSubmit(event) {
  event.preventDefault();

  console.log("search button clicked");
  console.log(document.getElementById(`locationSearch`).value);
  console.log(locationSearch.value);
  renderWeather();
}

function addEventListeners() {
  document.addEventListener("submit", handleFormSubmit);
  console.log();
}

function init() {
  addEventListeners();
}

init();
