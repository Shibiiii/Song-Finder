
////starting code for country name and some info
var countrycode= ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD',
'BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY',
'CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG',
'SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT',
'GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE',
'KI','KP','KR','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ',
'MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF',
'MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RE','RO','RU','RW','BL','SH','KN',
'LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','CS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK',
'SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','TM','TC','TV','UG','UA','AE',
'GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW'];


var key ='QwdO2U2cadDxeEeGOfufOg==I8Vg1CzH5prgOFij';
var countrynametext = document.querySelector('#countryname');
var citynametext = document.querySelector('#cityname');
var btn= document.querySelector('#search');

var datadiv3= document.querySelector(".datainfo3");
var seconddiv= document.querySelector(".datainfo2");




btn.addEventListener('click', function(event) {
    event.preventDefault();
    cleardata();
    var countryname = countrynametext.value; 
    var cityname=citynametext.value;

    if(countryname !="" && cityname=="")
    {
       gitcountryapi(countryname);
       getApiData(countryname);
       countrytime(countryname);
    }
    else if(countryname=="" && cityname!="")
    {
       gitcityapi(cityname);
       getApiData(cityname);
       countrytime(cityname);
    }
    else if(countryname !="" && cityname !="")
    {
       gitcountryapi(countryname);
       getApiData(countryname);
       countrytime(cityname);
    }

    //var countryInputVal = document.querySelector('#countryname').value;
    //var cityInputVal = document.querySelector('#cityname').value;

   // if (!countryInputVal) {
     //   console.error('Country needed to continue');
       // return;
    //}
    //if (!cityInputVal) {
    //console.error('City needed to continue');
      //  return;
    //}

});

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

    var country= document.createElement("h2");
    var city= document.createElement("h2");
    var capital= document.createElement("h2");
    var population= document.createElement("h2");
    //var currencycode = document.createElement("h2")
    //var currencyname = document.createElement("h2");
    
    city.textContent = "City Name : " + data[0].name;
    country.textContent = "Country Name : " + data[0].country;
    capital.textContent = "Cabital Name : " + data[0].is_capital;
    population.textContent = "Population : "+ (data[0].population)/1000000 + " million";
    //currencycode.textContent = "currency Code : " + data[0].currency.code;
    //currencyname.textContent = "currency Name : " + data[0].currency.name;

    seconddiv.appendChild(city);
    seconddiv.appendChild(country);
    seconddiv.appendChild(capital);
    seconddiv.appendChild(population);
     //seconddiv.appendChild(currencycode);
    //seconddiv.appendChild(currencyname);

    var countcode = data[0].country;
    countcode = countcode.slice(0, 2);
    for(var i=0;i<countrycode.length;i++)
    {
      if(countcode == countrycode[i])
      {
        var image= document.querySelector("img");
        image.setAttribute("src","./images/flags/"+ countcode +".png");
        i=countrycode;
      }
    }


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

    var country= document.createElement("h2");
    var capital= document.createElement("h2");
    var population= document.createElement("h2");
    var currencycode = document.createElement("h2")
    var currencyname = document.createElement("h2");
    
    country.textContent = "Country Name : " + data[0].name;
    capital.textContent = "Cabital Name : " + data[0].capital;
    population.textContent = "Population : "+ (data[0].population)/1000 + " million";
    currencycode.textContent = "currency Code : " + data[0].currency.code;
    currencyname.textContent = "currency Name : " + data[0].currency.name;

    seconddiv.appendChild(country);
    seconddiv.appendChild(capital);
    seconddiv.appendChild(population);
    seconddiv.appendChild(currencycode);
    seconddiv.appendChild(currencyname);

    var countcode = data[0].iso2;
    countcode = countcode.slice(0, 2);
    for(var i=0;i<countrycode.length;i++)
    {
      if(countcode == countrycode[i])
      {
        var image= document.querySelector("img");
        image.setAttribute("src","./images/flags/"+ countcode +".png");
        i=countrycode;
      }

    
    }

  });
}



//searchFormEl.addEventListener('submit', handleSearchFormSubmit);

//var cityName2 = document.querySelector('#cityname');
//var countryName2 = document.querySelector('#countryname');
//var btn = document.querySelector(".btn");
//var index = 1;

//while(JSON.parse(localStorage.getItem("index"+index))!== null)
//{
  //  var newbtn = document.createElement("button");

    //newbtn.setAttribute("class","btn");
    //newbtn.setAttribute("id","index"+index);
    //newbtn.textContent= JSON.parse(localStorage.getItem("index"+index));

    //divdata.appendChild(newbtn);

    //index++;
//}

//btn.addEventListener('click', function(event) {
  //  event.preventDefault();
    //var city = cityName.value;
    //getApiData(city);
//});

function getApiData(city) {
    var geocodingUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=a9f48eaca2ef1bc28989582adf1daa56';

    fetch(geocodingUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
      console.log(data);
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat +'&lon=' + data[0].lon +'&appid=a9f48eaca2ef1bc28989582adf1daa56&units=imperial';

        fetch(weatherUrl).then(function (response){
            return response.json();
        }).then(function(data) {
          console.log(data);
            for(var i=0; i<=5; i++) {
            var createText = document.createElement('h2');
            var da= data.list[i*8].main.humidity;
            var da2= data.list[i*8].main.temp;
            var da5= dayjs(data.list[i*8].dt_txt).format('DD/MM/YYYY');

            createText.textContent = "Date : " + da5 + "     Tempruture : "+da2 + "     Humidity : "+da  ;
            datadiv3.appendChild(createText);

            }
        });

    });
}

function cleardata()
{
  
    while (datadiv3.firstChild) 
    {
      datadiv3.removeChild(datadiv3.lastChild);
    }

    while (seconddiv.firstChild) 
    {
      seconddiv.removeChild(seconddiv.lastChild);
    }
}

function countrytime(city)
{

   var request2 = 'https://api.api-ninjas.com/v1/worldtime?city=' + city+ '&X-Api-Key=' + key;
   fetch(request2)
    .then(function (response) {
        return response.json();
    })
      .then(function (data) {
        console.log(data);
        var time= document.createElement("h2");
        var timedata= dayjs(data.datetime).format('HH:mm');
        
        time.textContent = "Time: " + timedata;

        seconddiv.appendChild(time);

    });
}









