// For Spotify
// client id = ebd0b6e8892a413c9969598cb0b48b4d
// client secret = 6f53037bb38e4c949cb39d4ae391a788
// redirect URI = http://localhost/

// For Youtube
// Api key = AIzaSyAMIfQahCTVQNvVZvcFzUEI9E_Atky5qyI

function getApi() {
  var requestUrl = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&order=viewCount&q=skateboarding+dog&type=video&videoDefinition=high';
  fetch(requestUrl, {
    mode: 'no-cors'
  })
    .then(function (response) {
      return response.json();
})
};
console.log(getApi());



