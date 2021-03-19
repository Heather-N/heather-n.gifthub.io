const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=d4bbab983f15105c9250449493f70b92";

fetch(apiURL)
    .then((response) => 
        response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('fh-temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('fh-des').textContent = jsObject.weather[0].main;
        document.getElementById('fh-windspeed').textContent = Math.round(jsObject.wind.speed);
        document.getElementById('fh-humid').textContent = jsObject.main.humidity;

        //calculate windchill
        let t = jsObject.main.temp;
        let s = jsObject.wind.speed;
        let x = 0.6215 * t;
        let y = Math.pow(s, 0.16);
        let z = 0.4275 * t;
        let a = 35.75 * y;
        let b = 0.4275 * t;
        let c = 35.74 + x - a + b * y;
        let result = Math.round(c);
        document.getElementById('fh-windchill').innerHTML = result;
    })
