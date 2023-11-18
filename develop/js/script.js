
// Test fetch requests commented out
// async function getApiTranslate() {

//     const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
//     const options = {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         'Accept-Encoding': 'application/gzip',
//         'X-RapidAPI-Key': '82efe9f845msh0cad063e477d0d4p1761a8jsn1d472168cc42',
//         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//       },
//       body: new URLSearchParams({
//         q: 'Hello, world!',
//         format: 'html',
//         target: 'es',
//         source: 'en'
//       })
//     };
    
//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   console.log(getApiTranslate());

  // async function getApiLyrics() {
  //   const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=from%20the%20start&per_page=1&page=1&text_format=html';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '82efe9f845msh0cad063e477d0d4p1761a8jsn1d472168cc42',
  //       'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  //     }
  //   };
    
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // console.log(getApiLyrics());

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

  
}



