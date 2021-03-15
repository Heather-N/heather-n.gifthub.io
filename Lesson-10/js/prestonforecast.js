//forecast
const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d4bbab983f15105c9250449493f70b92";

fetch(url)
    .then ((response) =>
        response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const sixList = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));
        let d = new Date(sixList[0].dt_txt);
        document.getElementById('dayofweek1').textContent = dayofWeek[d.getDay()];
        document.getElementById('dayofweek2').textContent = dayofWeek[d.getDay() + 1];
        document.getElementById('dayofweek3').textContent = dayofWeek[d.getDay() + 2];
        document.getElementById('dayofweek4').textContent = dayofWeek[d.getDay() + 3];
        document.getElementById('dayofweek5').textContent = dayofWeek[d.getDay() + 4];

        console.log(sixList);
        sixList.forEach(x => {
            i = 0;
            
            document.getElementById(`forecast${i + 1}`).textContent = Math.round(x.main.temp);

            i++;
        })
        for (i=0; i < 5; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                day++;
                
                let date = d.getDay();
                
            }
        }
        

        //let d = new Date(jsObject.list[].dt_txt);
        //document.getElementById('dayofweek${day+1}').textContent = dayofweek[d.getDay()];
        //document.getElementById('forecast${day+1}').textContent = jsObject.list[].main.temp;
    })