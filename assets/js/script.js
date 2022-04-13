var dayOne = document.getElementById("dayOne");
var dayTwo = document.getElementById("dayTwo");
var dayThree = document.getElementById("dayThree");
var dayFour = document.getElementById("dayFour");
var dayFive = document.getElementById("dayFive");

var city = document.getElementById("summaryCity");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");

var uvIndex = document.getElementById("uvIndex");





function addEventListeners() {

    locationSearch.addEventListener('submit', function(event) {
        event.preventDefault();
window.alert("search button clicked")

    });
}
















function init() {
    addEventListeners():
}







function renderWeather() {

http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=295f6bd4f18e43d6b3b9627ef087838d



document.getElementById('summaryCity').innerHTML = `<h2>${citySearch}</h2>
document.getElementById('summaryData').innerHTML = `
             <dl>
             <dt>temp:</dt>
             <dd>73.32</dd>
             <dt>Wind:</dt>
             <dd>9.53 MPH</dd>
             <dt>Humidity</dt>
             <dd>46% </dd>
             <dt>UV Index</dt>
             <dd class="uvIdx">002</dd>
           </dl>
`;
        