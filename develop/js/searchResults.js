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