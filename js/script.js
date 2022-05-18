

// Chiedere all'utente i km che vuole percorrere
let km = parseInt(prompt("Quanti km vuoi percorerre?"));

// Chiedere all'utente l'età
let eta = parseInt(prompt("Quanti anni hai?"));

// Il prezzo del biglietto è definito in base ai km(0.21€)
let prezzo = km * 0.21;

// Va applicato uno sconto del 20% per i minorenni
// Va applicato uno sconto del 40% per gli over 65
if( eta < 18 ) {
    prezzo =  prezzo - prezzo * (20 / 100);
} else if( eta >= 65) {
    prezzo = prezzo - prezzo * (40 / 100);
} else {
    prezzo;
}

// Scrivere il prezzo finale con un massimo di due decimali
const prezzoBiglietto = document.getElementById("prezzo-biglietto");

prezzoBiglietto.innerHTML = `${prezzo.toFixed(2)} €`;