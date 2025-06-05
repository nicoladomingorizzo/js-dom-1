/* Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
*/

let lampWhiteEl = document.querySelector('img');
// console.log(lampWhite)
let bntEl = document.querySelector('button');

let titleEl = document.getElementById('title');

let body = document.getElementById('body');

bntEl.addEventListener('click',
    function changeColor() {
        if (lampWhiteEl.src.includes('white')) {
            lampWhiteEl.src = './img-9/yellow_lamp_good.png';
            bntEl.innerHTML = 'Spegni la lampadina';
            bntEl.classList.toggle('btn-outline-danger');
            bntEl.classList.toggle('btn-outline-success');
            titleEl.innerHTML = "LA LAMPADINA &Egrave; ACCESA";
            body.classList.toggle('bg-white');
            body.classList.toggle('bg-black');
            titleEl.classList.toggle('text-white');
            titleEl.classList.toggle('text-black');
        } else if (lampWhiteEl.src.includes('yellow')) {
            lampWhiteEl.src = './img-9/white_lamp_good.png';
            bntEl.innerHTML = 'Accendi la lampadina';
            bntEl.classList.toggle('btn-outline-danger');
            bntEl.classList.toggle('btn-outline-success');
            titleEl.innerHTML = "LA LAMPADINA &Egrave; SPENTA";
            body.classList.toggle('bg-white');
            body.classList.toggle('bg-black');
            titleEl.classList.toggle('text-white');
            titleEl.classList.toggle('text-black');
        }
    }
)