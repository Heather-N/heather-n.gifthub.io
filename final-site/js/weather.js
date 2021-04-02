const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.1652&lon=111.6108&exclude=minutely,hourly&units=imperial&appid=d4bbab983f15105c9250449493f70b92";

fetch(apiURL)
    .then((response) => 
        response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('temp').textContent = Math.round(jsObject.current.temp);
        document.getElementById('desc').textContent = jsObject.current.weather[0].main;
        document.getElementById('humid').textContent = jsObject.current.humidity;

        //let image = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png';
        //let description = jsObject.current.weather[0].description;
        //document.getElementById('icon').setAttribute('src', image);
        //document.getElementById('icon').setAttribute('alt', description);

        let dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (i=0; i<3; i++) {
            let d = new Date(jsObject.daily[i].dt);
            document.getElementById(`day${i + 1}`).textContent = dayofWeek[d.getDay()];

            document.getElementById(`forecast${i + 1}`).textContent = Math.round(jsObject.daily[i].temp.day);
        }
    })
