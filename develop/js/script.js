

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

    var queryString = './search-results.html?q=' + countryInputVal + '&city=' + cityInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

var cityName = document.querySelector('#cityname');
var countryName = document.querySelector('#countryname');
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
    startNewSearch();
    var city = cityName.value;
    saveCityName(city);
    getApiData(city);
}
);

function getApiData(city) {
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city +'&appid=a9f48eaca2ef1bc28989582adf1daa56';

    fetch(requestUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        var secondUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat +'&lon=' + data[0].lon + '&appid=a9f48eaca2ef1bc28989582adf1daa56&units=imperial';

        fetch(secondUrl).then(function (response){
            return response.json();
        }).then(function(data) {
            for(var i=0; i<=1; i++) {
            var forecast = document.querySelector('#info2' + (i+2));
            var createText = document.createElement('p');
            var tempData = data.list[i*8].main.temp;

            createText.innerHTML = tempData + forecast;
            }
        })

    })
}



