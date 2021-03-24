/**
 * 1. chiedi all’utente il cognome
 * 2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
 * 3. stampa la lista ordinata alfabeticamente
 * 4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc...
 *   (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), 
 *   del nuovo utente inserito sopra all'interno dell'array, 
 *   dopo l'ordinamento alfabetico
 */


//CREAZIONE ARRAY
var lastName = [
    'bianchi',
     'neri', 
     'rossi', 
     'verdi', 
     'gialli'
    ];
console.log(lastName)


//RICHIESTA COGNOME CON "CONTROLLO TESTO"
var userLastName = prompt('Scrivi il tuo cognome').toLowerCase();

//INSERIMENTO COGNOME IN ARRAY
console.log(lastName.push(userLastName));

//STAMPA ARRAY SU HTML IN ORDINE ALFABETICO
console.log(lastName.sort());

var items = '';
for (var i = 0; i < lastName.length; i++) {
    // console.log( lastName[i] );

    items += '<li>' + lastName[i] + "  " + ((i)+ 1) + '</li>';
}

document.getElementById('lista-cognomi').innerHTML = items;

console.log(lastName.length(userLastName));

