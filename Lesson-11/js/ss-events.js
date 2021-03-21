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
            let ssevent1 = document.createElement('p');
            let ssevent2 = document.createElement('p');
            let ssevent3 = document.createElement('p');

            if (towns[i].name == "Soda Springs") {
                title.textContent = 'Upcoming Events';
                ssevent1.textContent = towns[i].events[0];
                ssevent2.textContent = towns[i].events[1];
                ssevent3.textContent = towns[i].events[2];

                card.appendChild(title);
                card.appendChild(ssevent1);
                card.appendChild(ssevent2);
                card.appendChild(ssevent3);

                document.querySelector('div.ss-events').appendChild(card);
            }
    }
    })