function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

function currentDate() {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
}

function topBanner() {
    var d = new Date();
    var n = d.getDay();

    if (n == 5) {
        document.getElementById('pancakes').style.display = "block";
    }
    else {
        document.getElementById('pancakes').style.display = 'none';
    }
}


//Storm Severity Label
function adjustRating(severity) {
    document.getElementById("rating").innerHTML = severity;
}


//Homepage Town Info
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table (jsonObject);
        const towns = jsonObject['towns'];
        for (let i=0; i < towns.length; i++) {
            //create new elements
            let card = document.createElement('section');
            let town = document.createElement('h2');
            let motto = document.createElement('h5');
            let founded = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            //content
            town.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            founded.textContent = 'Founded in ' + towns[i].yearFounded;
            pop.textContent = 'Population of ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall of ' + towns[i].averageRainFall + ' in';
        }
    })