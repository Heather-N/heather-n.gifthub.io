const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d4bbab983f15105c9250449493f70b92"

fetch(apiURL)
  .then((response) => 
    response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
  });