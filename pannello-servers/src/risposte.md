1.
Non si modifica direttamente l'oggetto ricevuto perché l'architettura prevede un flusso di dati unidirezionale, in cui i dati scendono dall'alto ma non possono essere alterati dai componenti figli. Il dato risiede originariamente nel file dei dati esterni dati.js, e la sua modifica richiede una gestione centralizzata dello stato

2.
Non ci può essere disallineamento perché entrambe le componenti utilizzano la stessa funzione pura statoServer sugli stessi dati di origine.Il risultato restituito sarà sempre identico sia per la visualizzazione della scheda sia per il conteggio 

3.
Passare solo la stringa dello stato a BadgeStato permette di mantenere il componente focalizzato su un unico compito (la visualizzazione grafica), rendendolo indipendente dalla complessità dell'oggetto server. In questo modo il codice risulta più pulito e facilmente riutilizzabile in contesti differenti