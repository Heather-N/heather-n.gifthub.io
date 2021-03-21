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
            let fhevent1 = document.createElement('p');
            let fhevent2 = document.createElement('p');
            let fhevent3 = document.createElement('p');

            if (towns[i].name == "Fish Haven") {
                title.textContent = 'Upcoming Events';
                fhevent1.textContent = towns[i].events[0];
                fhevent2.textContent = towns[i].events[1];
                fhevent3.textContent = towns[i].events[2];

                card.appendChild(title);
                card.appendChild(fhevent1);
                card.appendChild(fhevent2);
                card.appendChild(fhevent3);

                document.querySelector('div.fh-events').appendChild(card);
            }
    }
    })