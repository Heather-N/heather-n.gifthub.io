function windChill(){
    let t = parseInt(document.getElementById('temp').innerHTML);
    let s = parseInt(document.getElementById('windspeed').innerHTML);
    let x = 0.6215 * t;
    let y = Math.pow(s, 0.16);
    let z = 0.4275 * t;
    let a = 35.75 * y;
    let b = 0.4275 * t;
    let c = 35.74 + x - a + b * y;
    let result = Math.round(c);
    document.getElementById('windchill').innerHTML = result;
}

/* let result = Math.round(35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + ((0.4275 * t) * (Math.pow(s, 0.16)))); 
separated is easiest to understand*/

//storing this: const sixList = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'));