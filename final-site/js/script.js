function toggleMenu() {
    //console.log(document.getElementById('primaryNav').classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

let cards = document.getElementsByClassName('cards');
let names = document.getElementsByClassName('name');
let web = document.getElementsByClassName('webadd');
let address = document.getElementsByClassName('locale');
let phone = document.getElementsByClassName('number');
let image = document.getElementsByClassName('pic');

function listView() {
    document.querySelector('.directory').style.gridTemplateColumns = '1fr';

    for (i=0; i < cards.length; i++) {
        cards[i].style.display = 'grid';
        cards[i].style.gridTemplateColumns = '1fr 1fr';
        cards[i].style.gridTemplateRows = '1fr';
        cards[i].style.alignItems = 'center';
        cards[i].style.padding = '1em';
        image[i].style.gridColumns = '1/2';
        image[i].style.gridRow = '1/5';
        names[i].style.gridColumn = '2/3';
        names[i].style.gridRow = '1/2';
        web[i].style.gridColumn = '2/3';
        web[i].style.gridRow = '2/3';
        address[i].style.gridColumn = '2/3';
        address[i].style.gridRow = '3/4';
        phone[i].style.gridColumn = '2/3';
        phone[i].style.gridRow = '4/5';
    }
}

function gridView() {
    document.querySelector('.directory').style = 'null';

    for (i=0; i < cards.length; i++) {
        cards[i].style = 'null';
    }
}