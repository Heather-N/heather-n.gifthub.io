//forecast
const url = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=d4bbab983f15105c9250449493f70b92";

fetch(url)
    .then ((response) =>
        response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        let dayofWeek = [Sun, Mon, Tue, Wed, Thur, Fri, Sat];

        let d = new Date(jsObject.list[])
        document.getElementById('dayofweek${day+1}').textContent = dayofweek[d.getDay()];
    })