/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
 * per i multipli di 3 stampi “Fizz” al posto del numero
 * per i multipli di 5 stampi Buzz.
 * per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
 */

// Creo referenza
var numeroLista = document.getElementById('elenco-numeri');
// Variabile vuota
var daStampare = '';

// Ciclo per generare numeri
for (var i = 1; i <= 100; i++) {
    var numero = i;

    if (i % 3 === 0 && i % 5 === 0) {
        daStampare += '<li>FizzBuzz</li>';
    } else if (i % 3 === 0) {
        daStampare += '<li>Fizz</li>';
    } else if (i % 5 === 0) {
        daStampare += '<li>Buzz</li>';
    } else {
        daStampare += '<li>' + numero + '</li>';
    }
}

// Assegno contenuto agli oggetti della lista
numeroLista.innerHTML = daStampare;