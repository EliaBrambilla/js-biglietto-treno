/* SCOMPOSIZIONE RAGIONAMENTO
   - chiedo età all'utente (1 var)
   - chiedo quanti km deve fare (2 var)
   - se età normale paga per i km che deve fare (3 var)
   - se minore di 18 anni applico 20% di sconto (4 var)
   - se maggiore di 85 anni applico 40% di sconto (5 var)
   - comunico il prezzo del biglietto (totale)
*/

/* VARIABILI */
/* variabile prompt età */
var eta = parseInt(prompt("Dimmi la tua età"));
console.log(eta);

/* variabile prompt km da fare */
var km = parseInt(prompt("Dimmi quanti km devi fare"));
console.log(km);

/* variabile prezzo per km */
var prezzoTicket = km * 0.21;
console.log(prezzoTicket);

/* variabile sconto 20% minori 18 anni */
var sconto20 = prezzoTicket * 0.2;

/* variabile sconto 40% maggiori 65 anni */
var sconto40 = prezzoTicket * 0.4;

/* CONDIZIONI */
/* età minore di 18 anni */
if (eta < 18) {
var prezzoTicket = prezzoTicket - sconto20;

/* età maggiore di 65 anni */
} else if (eta > 65) {
var prezzoTicket = prezzoTicket - sconto40;

/* età normale */
} else {
var prezzoTicket = prezzoTicket;
}

/* CALCOLO FINALE */
/* prezzo totale biglietto */
document.getElementById("ticket").innerHTML = "Il prezzo del tuo biglietto è: " +  prezzoTicket.toFixed(2) + " euro";