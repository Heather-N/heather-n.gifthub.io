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
            let presevent = document.createElement('p');
            let ssevent = document.createElement('p');
            let fsevent = document.createElement('p');

            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                //content
                town.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                founded.textContent = 'Founded in ' + towns[i].yearFounded;
                pop.textContent = 'Population of ' + towns[i].currentPopulation;
                rain.textContent = 'Annual Rain Fall of ' + towns[i].averageRainfall + 'in';
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);

                card.appendChild(town);
                card.appendChild(motto);
                card.appendChild(founded);
                card.appendChild(pop);
                card.appendChild(rain);
                card.appendChild(image);

                document.querySelector('div.towns').appendChild(card);
            }
        }
    })