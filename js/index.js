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

while (userLastName === null || userLastName.trim() === '') {
    userLastName = prompt('Per favore inserisci un valore valido').toLowerCase();
}

userLastName = userLastName.trim();

//INSERIMENTO COGNOME IN ARRAY
console.log(lastName.push(userLastName));

//ORDINE ALFABETICO
console.log('Lista ordinata:', lastName.sort());

//DETERMINARE POSIZIONE COGNOMEUTENTE
var posUser = lastName.indexOf(userLastName) + 1;
console.log('Posizione', posUser);

//STAMPA ARRAY SU HTML 
var items = '';
for (var i = 0; i < lastName.length; i++) {
    // console.log( lastName[i] );

    items += '<li>' + lastName[i] + "  " + ((i)+ 1) + '</li>';
}

document.getElementById('lista-cognomi').innerHTML = items;
