// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const input_a = document.getElementById('mt_a');
const input_b = document.getElementById('mt_b');
const resultaat = document.getElementById('mt_out');
const a = input_a.value;
const b = input_b.value;

function plusFunctie(a, b) {
    return Number(a) + Number(b);
}
function minFunctie(a, b) {
    return Number(a) - Number(b);
}
function maalFunctie(a, b) {
    return Number(a) * Number(b);
}
function deelFunctie(a, b) {
    if (Number(b) == 0){
        return "Delen door 0 kan niet !"
    }else {}
    const value = Number(a) / Number(b)
    return value.toFixed(6)
}

function berekenEnToon(functie) {
    const a = input_a.value;
    const b = input_b.value;

    if (isNaN(Number(a)) || isNaN(Number(b))) {
        resultaat.className = 'alert alert-warning mt-3 mb-0';
        resultaat.textContent = '⚠️ Ongeldige invoer';
        return;
    }

    const waarde = functie(a, b);
    resultaat.className = 'alert alert-success mt-3 mb-0';
    resultaat.textContent = `✅ Resultaat: ${waarde}`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mt_add")?.addEventListener("click", () => berekenEnToon(plusFunctie));
    document.getElementById("mt_sub")?.addEventListener("click", () => berekenEnToon(minFunctie));
    document.getElementById("mt_mul")?.addEventListener("click", () => berekenEnToon(maalFunctie));
    document.getElementById("mt_div")?.addEventListener("click", () => berekenEnToon(deelFunctie));
});