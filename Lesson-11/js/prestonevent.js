const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table (jsonObject);
        const towns = jsonObject['towns'];

        for (let i=0; i < towns.length; i++) {
            let card = document.createElement('section');
            let title = document.createElement('h4');
            let presevent1 = document.createElement('p');
            let presevent2 = document.createElement('p');
            let presevent3 = document.createElement('p');

            if (towns[i].name == "Preston") {
                title.textContent = 'Upcoming Events';
                presevent1.textContent = towns[i].events[0];
                presevent2.textContent = towns[i].events[1];
                presevent3.textContent = towns[i].events[2];

                card.appendChild(title);
                card.appendChild(presevent1);
                card.appendChild(presevent2);
                card.appendChild(presevent3);

                document.querySelector('div.preston-events').appendChild(card);
            }
    }
    })