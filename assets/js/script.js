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
  var url = `${baseURL}geo/1.0/direct?q={citySearch}&limit=1&appid=${apiKey}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
//baseUrl + data/2.5/weather?lat={lat}&lon={lon}&appid= + apiKey;

//baseUrl + data/2.5/forecast?id=524901&appid= + apiKey;

document.getElementById("summaryCity").innerHTML = `<h2>${searchLocation}</h2>`;
document.getElementById("summaryData").innerHTML = `
             <dl>
                <dt>temp:</dt>
             <dd>88.88</dd>
             <dt>Wind:</dt>
             <dd>88.88 MPH</dd>
             <dt>Humidity</dt>
             <dd>88% </dd>
             <dt>UV Index</dt>
             <dd class="uvIdx">88</dd>
           </dl>
`;

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
