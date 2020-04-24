//Chiedi all'utente di scommettere su pari o su dispari
var scelta = prompt('Pari o dispari?');
//Chiedi all'utente che numero vuole giocare
var numero_utente = parseInt(prompt('Scegli un numero da 1 a 5', 3))
//Randomizza il numero che giocherà il pc
var numero_pc = Math.floor((Math.random() * 5) + 1);

//True se la somma è pari
function pari() {
    return (numero_utente + numero_pc) % 2 == 0;
}
//Controllo che l'utente abbia inserito dei valori accettabili
if ((scelta == 'pari' || 'Pari' || 'PARI' || "p" || "P" || "1" || 'dispari' || 'Dispari' || 'DISPARI' || 'd' || 'D' || '2') && (numero_utente >= 1 && numero_utente <= 5)) {

    console.log('Hai scelto: ' + numero_utente);
    console.log('Il PC ha scelto: ' + numero_pc);

    //(Ha scelto pari && somma è pari) || (Ha scelto dispari && somma è dispari) ==> Vittoria
    if (((scelta == 'pari' || scelta == 'Pari' || scelta == 'PARI' || scelta == "p" || scelta == "P" || scelta == "1") && pari() == true) || ((scelta == 'dispari' || scelta == 'Dispari' || scelta == 'DISPARI' || scelta == 'd' || scelta == 'D' || scelta == '2') && pari() == false)) {

        console.log("Hai vinto!");

    }
    //In caso di sconfitta
    else {

        console.log('Hai perso!');
    }
}
//Messaggio di errore se uno dei due valori è errato
else {
    console.log('Errore! Hai inserito un valore non valido, ricarica la pagina per tentare di nuovo');
}
