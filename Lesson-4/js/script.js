function toggleMenu() {
    
    document.getElementById("primaryNav").classList.toggle("hide");
}
function currentDate() {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
}