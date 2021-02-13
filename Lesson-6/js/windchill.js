
let t = parseInt(document.getElementById('temp'));
let s = parseInt(document.getElementById('windspeed'));
let c = 35.74 + (0.6215 * t) - (35.75 * (math.pow(s, 0.16))) + ((0.4275 * t) * (math.pow(s, 0.16)));
document.getElementById('windchill').innerHTML = c;