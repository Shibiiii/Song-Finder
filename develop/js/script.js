

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var countryInputVal = document.querySelector('#countryname').value;
    var cityInputVal = document.querySelector('#cityname').value;

    if (!countryInputValInputVal) {
        console.error('Country needed to continue');
        return;
    }
    if (!cityInputValInputVal) {
    console.error('City needed to continue');
        return;
    }

    var queryString = './search-results.html?q=' + countryInputVal + '&city=' + cityInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

var cityName = document.querySelector('#cityname');
var countryName = document.querySelector('#countryname');

btn.addEventListener('click', function(event) {
    event.preventDefault();
    
}
)



