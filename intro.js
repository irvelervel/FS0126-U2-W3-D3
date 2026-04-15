// Oggi per la prima volta cominceremo ad esplorare la possibilità di creare delle pagine in cui i contenuti saranno -VERAMENTE- dinamici, come ad es. informazioni meteo, risultati partite, feed amici su instagram etc.

// Queste informazioni verranno recuperate attraverso la comunicazione tra NOI ("client") e l'ESTERNO ("server") tramite protocollo HTTP. Questa comunicazione avviene tramite un CLIENT che, attraverso una
// "HTTP REQUEST" va a contattare un SERVER; il SERVER, se riceve correttamente la nostra richiesta,
// può decidere di rispondere con una "HTTP RESPONSE". Questa response potrebbe veicolare i dati di cui la mia pagina ha bisogno.

// Il problema di tutto questo giro è che il dialogo REQUEST<->RESPONSE non è un'operazione ISTANTANEA.
// non è un'operazione SINCRONA.

const x = 'Stefano'
console.log(x)
// in JS l'assegnazione di una variabile è un'operazione SINCRONA!
// alla riga 11 la variabile x, cascasse il mondo, esiste!

// Quasi tutto quello che abbiamo trattato fin'adesso apparteneva al reame delle operazioni SINCRONE, cioè ogni riga veniva "completata" prima di passare alla riga successiva; quando si dialoga con l'esterno e con il protocollo HTTP questo non avviene, a causa del delay tra REQUEST<->RESPONSE.

// JS, nell'esecuzione delle sue operazioni segue un modello di EVENT LOOP: le operazione vengono eseguite una alla volta secondo una metodologia I/O NON-BLOCCANTE ("non-blocking").

// Quindi noi lanceremo le nostre HTTP REQUEST per ottenere dei dati dall'esterno, a cui sperabilmente corrisponderanno delle HTTP RESPONSE (dal server) ma non sappiamo se e in quanto tempo!
// Dobbiamo istruire JS a creare una struttura in grado di ASPETTARE il termine di questa operazione asincrona, senza freezare tutto il resto e in grado di AVVISARCI se e quando la response è arrivata!

// La metodologia più MODERNA per la gestione delle operazioni asincrone in JS è un oggetto che si chiama
// "PROMISE". Una Promise è una "promessa": una promessa che la mia operazione asincrona PRIMA O POI
// FINIRÀ (con un risultato positivo/negativo, in un tot tempo...).
// Il risultato della Promise può contenere notizie "buone" o "cattive"; noi dovremo per OGNI PROMISE
// definire i due "finali del film": dovremo definire cosa fare in caso di "Promise FULFILLED", oppure
// anche cosa fare in caso di "Promise REJECTED". Lo stato di "attesa" tra il lancio della Promise e
// uno dei due finali viene detto "Promise PENDING". Questi sono i 3 stadi di OGNI PROMISE.
// Per capire in quale finale siamo capitati, se in quello buono o in quello cattivo una Promise ci
// fornisce DUE blocchi di codice: uno, denominato "then" -> se finite nel blocco then, siete nel finale
// buono :)
// esiste per ogni Promise anche un altro blocco, denominato "catch" -> se finite qui dentro, siete nel
// finale brutto :(
