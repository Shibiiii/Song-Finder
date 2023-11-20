


////starting code for country name and some info

var key ='QwdO2U2cadDxeEeGOfufOg==I8Vg1CzH5prgOFij';
var countrynametext = document.querySelector('#countryname');
var citynametext = document.querySelector('#cityname');
var btn= document.querySelector('#search');


btn.addEventListener('click', function(event) {
    event.preventDefault();
    var countryname = countrynametext.value; 
    var cityname=citynametext.value;


    console.log(countryname);
    console.log(cityname);

    if(countryname !="" && cityname=="")
    {
       gitcountryapi(countryname);
       console.log("helooooo2");
    }
    else if(countryname=="" && cityname!="")
    {
       gitcityapi(cityname);
       console.log("helooooo3");
    }
    else if(countryname !="" && cityname !="")
    {
       gitcountryapi(countryname);
       console.log("helooooo4");
    }

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
);

//cityname

function gitcityapi(cityname)
{
  console.log("city name : " + cityname);

    var request2 = 'https://api.api-ninjas.com/v1/city?name=' + cityname + '&X-Api-Key=' + key;
  fetch(request2)
  .then(function (response) {
    return response.json();
  })
   .then(function (data) {
    console.log(data);

    var seconddiv= document.querySelector(".datainfo2")
    var country= document.createElement("h2");
    var city= document.createElement("h2");
    var capital= document.createElement("h2");
    var population= document.createElement("h2");
    //var currencycode = document.createElement("h2")
    //var currencyname = document.createElement("h2");
    
    city.textContent = "City Name : " + data[0].name;
    country.textContent = "Country Name : " + data[0].name;
    capital.textContent = "Cabital Name : " + data[0].is_capital;
    population.textContent = "Population : "+ (data[0].population)/1000000 + "million";
    //currencycode.textContent = "currency Code : " + data[0].currency.code;
    //currencyname.textContent = "currency Name : " + data[0].currency.name;

    seconddiv.appendChild(country);
    seconddiv.appendChild(capital);
    seconddiv.appendChild(population);
    //seconddiv.appendChild(currencycode);
    //seconddiv.appendChild(currencyname);

  });


}

//countrynmae

function gitcountryapi(countryname)
{
  console.log("country name : " + countryname);
    var request2 = 'https://api.api-ninjas.com/v1/country?name=' + countryname+ '&X-Api-Key=' + key;
  fetch(request2)
  .then(function (response) {
    return response.json();
  })
   .then(function (data) {
    console.log(data);

    var seconddiv= document.querySelector(".datainfo2")
    var country= document.createElement("h2");
    var capital= document.createElement("h2");
    var population= document.createElement("h2");
    var currencycode = document.createElement("h2")
    var currencyname = document.createElement("h2");
    
    country.textContent = "Country Name : " + data[0].name;
    capital.textContent = "Cabital Name : " + data[0].capital;
    population.textContent = "Population : "+ (data[0].population)/1000 + "million";
    currencycode.textContent = "currency Code : " + data[0].currency.code;
    currencyname.textContent = "currency Name : " + data[0].currency.name;

    seconddiv.appendChild(country);
    seconddiv.appendChild(capital);
    seconddiv.appendChild(population);
    seconddiv.appendChild(currencycode);
    seconddiv.appendChild(currencyname);
  });
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










