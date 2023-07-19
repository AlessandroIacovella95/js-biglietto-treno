# Calcolo del prezzo del biglietto del treno

## Traccia
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento

- Chiedo all'utente il numero di chilometri che vuole percorrere tramite prompt e aggiungo parseFloat
- Chiedo all'utente la sua età tramite prompt e aggiungo il parsInt perchè voglio solo valori numerici.
- Controllo se l'utente ha inserito valori numerici ad età e chilometri
- Calcolo costo del biglietto in base ai chilometri inserimenti precedentemente dall'utente
- **SE** l'utente risulta essere minorenne vado ad applicare un sconto del 20% al prezzo del biglietto **ALTRIMENTI SE** l'utente ha un età >= a 65 anni vado ad applicare uno sconto del 40% al prezzo del biglietto
- Restituisco l'output al cliente con massimo due decimali, per indicare i centesimi sul prezzo del biglieto.
