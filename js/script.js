const label = 'Il prezzo del tuo biglietto è: '

/* - Chiedo all'utente il numero di chilometri che vuole percorrere*/

const kilometres = parseFloat (prompt ("Inserisci i chilometri che vuoi percorrere?"));
console.log('chilometri: ', kilometres)

/* - Chiedo all'utente la sua età tramite prompt e aggiungo il parsInt perchè voglio solo valori numerici.*/
const userAge = parseInt (prompt ("Inserisci la tua età?"));
console.log('età: ', userAge)

/* Controllo se l'utente ha inserito età e chilometri come valori numerici*/
if(isNaN (userAge) || isNaN (kilometres)) {
    alert("il valore deve essere numerico");
} else {
    
    /*Controllo se l'utente ha inserito età e chilometri maggiori di 0*/
    if ((userAge > 0) && (kilometres > 0)) {
        /* - Calcolo costo del biglietto in base ai chilometri inserimenti precedentemente dall'utente*/
        let ticketPrice = kilometres * 0.21;
            console.log('prezzo biglietto senza sconto: ', ticketPrice, 'euro')
                
        /* - **SE** l'utente risulta essere minorenne vado ad applicare un sconto del 20% al prezzo del biglietto*/
        if (userAge < 18) {
        ticketPrice = ticketPrice * 0.8;
        console.log('prezzo sconto under 18: ', ticketPrice, ' euro')
                
        /* - ** ALTRIMENTI SE** l'utente risulta essere over 65 vado ad applicare un sconto del 40% al prezzo del biglietto*/
        } else if (userAge >= 65) {
        ticketPrice = ticketPrice * 0.6;
        console.log('prezzo sconto over 65: ', ticketPrice, ' euro')
        }  
                
         /* - Restituisco l'output al cliente con massimo due decimali, per indicare i centesimi sul prezzo del biglieto.*/
        document.getElementById('price').innerHTML = label + ticketPrice.toFixed(2) + ' euro'; 
    }
    else{
        alert("il valore deve essere maggiore di 0");
    }   
}

