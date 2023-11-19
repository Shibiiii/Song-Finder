

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var languageInputVal = document.querySelector('#language-input').value;

    if (!searchInputVal) {
        console.error('Input needed to continue');
        return;
    }
    if (!languageInputVal) {
    console.error('Language needed to continue');
        return;
    }

    var queryString = './search-results.html?q=' + searchInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

var lyricTextEl = document.querySelector('#lyric-text');
var searchFormEl = document.querySelector('#search-form');

function getSearchParamters() {
    var searchParamters = document.location.search.split('&');

    var query = searchParamters[0].split('=').pop;
    searchApi(query);
}

function printLyrics(resultObj) {

    var resultCard = document.createElement('div');
    resultCard.classList.add('card');
}



