//forecast
const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d4bbab983f15105c9250449493f70b92";

fetch(url)
    .then ((response) =>
        response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const sixList = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        
        let i = 0;
        //console.log(sixList);
        //Using '${i +1}' as shown by Brother Blazzard
        sixList.forEach(x => {
            
            let d = new Date(sixList[i].dt_txt);
            document.getElementById(`dayofweek${i + 1}`).textContent = dayofWeek[d.getDay()];
        
            let image = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
            let description = x.weather[0].description;
            document.getElementById(`icon${i + 1}`).setAttribute('src', image);
            document.getElementById(`icon${i + 1}`).setAttribute('alt', description);

            document.getElementById(`forecast${i + 1}`).textContent = Math.round(x.main.temp);

            i++;
            
        })
        

        //let d = new Date(jsObject.list[].dt_txt);
        //document.getElementById('dayofweek${day+1}').textContent = dayofweek[d.getDay()];
        //document.getElementById('forecast${day+1}').textContent = jsObject.list[].main.temp;
    })