const label = 'Il prezzo del tuo biglietto è: '

/* - Chiedo all'utente il numero di chilometri che vuole percorrere*/
const kilometres = parseFloat (prompt ("Inserisci i chilometri che vuoi percorrere?"));

/* - Chiedo all'utente la sua età*/
const userAge = parseInt (prompt ("Inserisci la tua età?"));

/* Controllo se l'utente ha inserito età e chilometri come valori numerici*/
if(isNaN (userAge) || isNaN (kilometres)) {
    alert("Età e km devono essere numeri");
} else {
    
    /*Controllo se l'utente ha inserito età e chilometri maggiori di 0*/
    if ((userAge > 0) && (kilometres > 0)) {

        /* - Calcolo costo del biglietto in base ai chilometri inseriti precedentemente dall'utente*/
        let ticketPrice = kilometres * 0.21;
                
        /* SE l'utente risulta essere minorenne vado ad applicare un sconto del 20% al prezzo del biglietto*/
        if (userAge < 18) {
        ticketPrice = ticketPrice * 0.8;
                
        /* ALTRIMENTI SE l'utente risulta essere over 65 vado ad applicare un sconto del 40% al prezzo del biglietto*/
        } else if (userAge >= 65) {
        ticketPrice = ticketPrice * 0.6;
        }  
                
         /* - Restituisco l'output al cliente con massimo due decimali, per indicare i centesimi sul prezzo del biglietto.*/
        document.getElementById('price').innerHTML = label + ticketPrice.toFixed(2) + ' euro'; 
    }
    else{
        alert("Età e km devono essere maggiori di 0");
    }   
}

