

// Chiedere all'utente i km che vuole percorrere
let km = parseInt(prompt("Quanti km vuoi percorerre?"));

if(km != '' && isNaN(km)) {
    alert("L'inserimento dei Kilometri deve essere di SOLI numeri!!");
    km = parseInt(prompt("Quanti km vuoi percorerre?"));
}else if (km <= 10) { 
    alert("Minimo km inseribili 11");
    km = parseInt(prompt("Quanti km vuoi percorerre?"));
}else if (km > 3000) {
    alert("Massimo km inseribili è 3000");
    km = parseInt(prompt("Quanti km vuoi percorerre?"));
}

// Chiedere all'utente l'età
let eta = parseInt(prompt("Quanti anni hai?"));

if(eta <= 6) {
    alert("Sino a 6 anni non è necessario il biglietto!!");
    eta = parseInt(prompt("Quanti anni hai?"));
}

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