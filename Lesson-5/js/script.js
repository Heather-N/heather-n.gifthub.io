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