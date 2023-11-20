

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var countryInputVal = document.querySelector('#countryname').value;
    var cityInputVal = document.querySelector('#cityname').value;

    if (!countryInputVal) {
        console.error('Country needed to continue');
        return;
    }
    if (!cityInputVal) {
    console.error('City needed to continue');
        return;
    }

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

var cityName = document.querySelector('#cityname');
var countryName = document.querySelector('#countryname');
var btn = document.querySelector(".btn");
var index = 1;

while(JSON.parse(localStorage.getItem("index"+index))!== null)
{
    var newbtn = document.createElement("button");

    newbtn.setAttribute("class","btn");
    newbtn.setAttribute("id","index"+index);
    newbtn.textContent= JSON.parse(localStorage.getItem("index"+index));

    divdata.appendChild(newbtn);

    index++;
}

btn.addEventListener('click', function(event) {
    event.preventDefault();
    var city = cityName.value;
    getApiData(city);
});

function getApiData(city) {
    var geocodingUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=a9f48eaca2ef1bc28989582adf1daa56';

    fetch(geocodingUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat +'&lon=' + data[0].lon +'&appid=a9f48eaca2ef1bc28989582adf1daa56&units=imperial';

        fetch(weatherUrl).then(function (response){
            return response.json();
        }).then(function(data) {
            for(var i=0; i<=1; i++) {
            var forecast = document.querySelector('#data-display' + (i+2));
            var createText = document.createElement('p');
            var tempData = data.list[i*8].main.temp;

            createText.textContent = tempData + forecast;
            }
        })
console.log(city);
console.log(data);
console.log(weatherUrl);
    })
}









