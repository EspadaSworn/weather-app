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
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${511c4376976a27f45a735b245d107187}')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //   renderResponse(data);
    });

  //for forecast
  fetch('https://api.openweathermap.org/data/2.5/weather?appid=${511c4376976a27f45a735b245d107187}&q=${city}&units=imperial')
    .then(function (response) {
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

