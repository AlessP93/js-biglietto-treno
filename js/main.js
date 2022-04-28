// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const numeroKm = Number(prompt("Ciao, quanti Km vuoi percorrere?"));
const etàUtente = Number(prompt("Quanti anni hai?"));
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzo = numeroKm * 0.21;
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
let sconto;
if (etàUtente < 18) {
    sconto = prezzo * 0.2;
} else if (etàUtente > 64) {
    sconto = prezzo * 0.4;
} else {
    sconto = 0;
}
 
const prezzoRidotto = prezzo - sconto;
console.log("Il miglior prezzo è " + prezzoRidotto)

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
document.getElementById("title").innerHTML = `Il prezzo scontato è ${prezzoRidotto}`