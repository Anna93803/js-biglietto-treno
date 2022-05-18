

// Chiedere all'utente i km che vuole percorrere
let km = parseInt(prompt("Quanti kilometri vuoi percorerre?"));

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

// Manipolazione del DOM inserire i dati in HTML
const kmUtente = document.getElementById("kmUtente");
kmUtente.innerHTML = `Km: ${km}`;

const etaUtente = document.getElementById("etaUtente");
etaUtente.innerHTML = `Età: ${eta}`;

// Scrivere il prezzo finale con un massimo di due decimali
const prezzoBiglietto = document.getElementById("prezzo-biglietto");
prezzoBiglietto.innerHTML = `Il prezzo del tuo biglietto é: ${prezzo.toFixed(2)} €`;