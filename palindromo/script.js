function isPalindrome(phrase) {
    //Rimuove gli spazi per poter analizzare le frasi
    phrase = phrase.replace(/\s+/g, '');
    //Converte la stringa dell'utente in un array
    var phrase_into_array = phrase.split('');
    //Inverte l'ordine dell'array e lo converte in una stringa
    var reverse_phrase = phrase_into_array.reverse().join('');

    //Stabilisce se la stringa invertita è uguale a quella iniziale
    if (reverse_phrase.toUpperCase() == phrase.toUpperCase()) {
        var palindrome = true;
    }
    else {
        palindrome = false;
    }
    return palindrome;
}

//Chiede all'utente la frase da analizzare
var user_phrase = prompt('Inserisci una frase per sapere se è palindroma', 'I topi non avevano nipoti');

//Tramite la funzione stabilisce se la frase dell'utente è palindroma o meno e logga un messaggio appropriato
if (isPalindrome(user_phrase) == true) {
    console.log('La frase è palindroma!');
}
else {
    console.log('La frase non è palindroma!');
}
