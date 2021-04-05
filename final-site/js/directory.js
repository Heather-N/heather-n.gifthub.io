const requestURL = 'https://heather-n.github.io/final-site/json/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];

    for (i=0; i < business.length; i++) {
        //create elements
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p');
        let web = document.createElement('p');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let image = document.createElement('img');

        //add content
        h2.textContent = business[i].name;
        phone.textContent = 'Phone Number: ' + business[i].phone;
        address.textContent = 'Address: ' + business[i].address;
        website.setAttribute('href', business[i].site);
        website.textContent = business[i].site;
        image.setAttribute('src', business[i].logo);
        image.setAttribute('alt', business[i].desc);

        //add to page
        web.appendChild(website);
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(web);
        card.appendChild(address);
        card.appendChild(phone);

        document.querySelector('div.directory').appendChild(card);
    };
  });