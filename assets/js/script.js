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

function addEventListeners() {
  locationSearch.addEventListener("submit", function (event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches("searchBtn")) {
      console.log("search button clicked");
      console.log(searchLocation);
      renderWeather();
    }
  });
}

function init() {
  addEventListeners();
}

function renderWeather() {
  //api.openweathermap.org/data/2.5/forecast?id=524901&appid=295f6bd4f18e43d6b3b9627ef087838d

  document.getElementById("summaryCity").innerHTML = `<h2>${citySearch}</h2>`;
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
}
