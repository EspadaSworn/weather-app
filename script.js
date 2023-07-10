// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//function getData(weather){
//  var requestData= document.querySelector('.testResult');
//  var city = document.createElement('h2');
//  city.textContent=weather.name;
//  requestData.appent(city);
//  var details=document.createElement('p');
//  details.append('Temp'+ weather.main.temp+ 'F');

//for current weather
//var search = document.getElementByClassName('search');
var citySearched = [];
var input = document.getElementById('search-bar');
input.addEventListener('keydown', function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(input.value);
    getData(input.value);
    //('current-date').temp.textContent = weather.main.speed;
  }
});



function getData(query) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?appid=511c4376976a27f45a735b245d107187&q=${query}&units=imperial`)
    .then(function (response) { 
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      if (citySearched.includes(data.name) === false) {
        citySearched.push(data.name);
        localStorage.setItem('city', JSON.stringify(citySearched));
      }
      
      renderResponse(data);

                  var weatherSymbol = data.weather[0].icon;
            var symbolUrl = `https://openweathermap.org/img/wn/` + weatherSymbol + `@2x.png`;
            var today = dayjs();
            var city = document.getElementById('currentCity');
             city.innerHTML = (data.name + '' + ' (' + today.format('MM/DD/YYYY') + ')' + '<img src="' + symbolUrl + '">');

            var temp = document.getElementById('currentTemp');
            temp.textContent = 'Temperature: ' + data.main.temp + ' °F';

            var wind = document.getElementById('currentWind');
            wind.textContent = 'Wind: ' + data.wind.speed + ' MPH';

            var humidity = document.getElementById('currentHumidity');
            humidity.textContent = 'Humidity: ' + data.main.humidity + ' %';



            var lat = data.coord.lat;
            var lon = data.coord.lon;
            console.log('lat: ' + lat + ' lon:' + lon);
            secondApi(lat, lon);
    });

  //for forecast
 fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=511c4376976a27f45a735b245d107187`)
  .then(function (response) { //how to replace {city} with value
      return response.json();
    })
    .then(function (data) {
       console.log(data);
       //   renderResponse(data);
       console.log(input)
     });
}//}
//Hint: The forecast data is every 3 hours for 5 days, so you will have a list of 40 forecasts. Your requirement is to give 5 days of forecast data.
// How can you make a for loop that will "jump over" indexes that you aren't interested in?

function renderResponse() {
  if (localStorage.getItem('city')){
    citySearched = JSON.parse(localStorage.getItem('city'));
  }

  var cityList = document.getElementById('city-list');  //create a list of cities searched

  //  cityList.innerHTML = '';

  for (var i = 0; i < citySearched.length; i++) {
    var cityHistoryBtn = document.createElement('button');
    cityHistoryBtn.classList.add('btn', 'btn-secondary', 'btn-block', 'mb-1');
  }}

  renderResponse();