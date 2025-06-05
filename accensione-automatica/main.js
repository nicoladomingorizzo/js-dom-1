

let lampWhiteEl = document.querySelector('img');
// console.log(lampWhite)
let pEl = document.querySelector('p');

let titleEl = document.getElementById('title');

let body = document.getElementById('body');

const { latitude, longitude } = { latitude: 43.0656, longitude: 12.4822 }; // Coordinate di Perugia
const date = new Date();
const { sunset } = sunriseSunset.getSunriseSunset(date, latitude, longitude);

if (sunset == sunset) {
    lampWhiteEl.src = './img-9/yellow_lamp_good.png';
    p.innerHTML = 'LA LAMPADINA &Egrave; ACCESA';
    titleEl.innerHTML = "LA LAMPADINA SI SPEGNE AUTOMATICAMENTE ALL'ALBA";
    body.classList.toggle('bg-white');
    body.classList.toggle('bg-black');
    titleEl.classList.toggle('text-white');
    titleEl.classList.toggle('text-black');
} else if (sunset != sunset) {
    lampWhiteEl.src = './img-9/white_lamp_good.png';
    bntEl.innerHTML = 'LA LAMPADINA &Egrave; SPENTA';
    titleEl.innerHTML = "LA LAMPADINA SI ACCENDE AUTOMATICAMENTE AL TRAMONTO";
    body.classList.toggle('bg-white');
    body.classList.toggle('bg-black');
    titleEl.classList.toggle('text-white');
    titleEl.classList.toggle('text-black');
}