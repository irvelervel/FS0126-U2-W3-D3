// ...e se l'array degli utenti non lo scriviamo noi, ma dobbiamo recuperarlo da una API?
// Application Programming Interface
// le API sono come dei "ponti di collegamento" che i backend mettono a disposizione dei frontend

// recupereremo i nostri utenti ora da un'API chiamata JSON PLACEHOLDER

// per instaurare una HTTP REQUEST dalla nostra pagina utilizzeremo un metodo chiamato fetch()
// fetch() è ormai lo standard per questo tipo di operazioni nei browsers
// fetch() TORNA UNA PROMISE! con al suo interno la HTTP RESPONSE

// fetch() si utilizza così: servono 1/2 parametri per il suo funzionamento
// fetch(url, options)
// il parametro "url" è obbligatorio -> corrisponde all'indirizzo da contattare
// il parametro "options" è facoltativo -> serve per indicare delle opzioni avanzate

const getUsers = function () {
  // qui dentro farò la fetch
  fetch('https://jsonplaceholder.typicode.com/users', {
    // questo è un oggetto facoltativo di opzioni per la nostra HTTP REQUEST
    // method: 'GET', // -> è anche il DEFAULT
    // body: // sarebbe il JSON che voi inviate al server, ma con le operazioni GET non si manda
    // headers: {
    //     // Authorization: 'xxxxxxxxxxxx' // è una chiave per accedere ad un API, non serve con JSON PLACEHOLDER
    // }
  })
    .then((response) => {
      // qui definisco il finale POSITIVO della Promise
      // qui finisco se la Promise è RESOLVED, FULFILLED
      console.log('RESPONSE', response)
      // dentro response troverete tante utili informazioni, come lo status code (200 se è tutto ok), la proprietà "ok" che con un semplice booleano ci restituisce l'esito della Promise etc.
      // quello che però questo oggetto response NON contiene è il JSON della risposta :(
      // niente paura però! l'estrazione del JSON da questa response si può fare comodamente con un metodo
      // che si chiama response.json(). Il problema è questo metodo A SUA VOLTA è asincrono e torna una Promise 🫠

      //   quindi come si procede per la seconda? attenzione! il JSON sarà disponibile in questa response solamente
      // se la response ci ha tornato 200, o se più in generale la proprietà "ok" è TRUE!
      if (response.ok) {
        // proseguite a estrarre il JSON!
        // per essere sicuri che CI SIA un JSON da estrarre devo essere sicuro che la mia chiamata sia andata buon
        // fine, ovvero che la sua proprietà response.ok sia TRUE
        return response.json() // dovete ritornarlo, così come fetch ritorna una Promise!
      } else {
        // qui dentro ci finireste se siete riusciti a contattare il server ma non avete ottenuto una risposta ok
        // qui dovremmo gestire l'errore!
        // una mossa furba potrebbe essere quella di RICICLARE il blocco catch e di teletrasportarci nel blocco catch
        // come faccio da qui a teletrasportarmi nel blocco catch e gestire in un'UNICA volta l'errore?
        // sollevando a mano un errore!
        throw new Error('Risposta ricevuta, ma errore!', response.status)
      }
    })
    .then((data) => {
      // nel caso del doppio then, in cui il secondo aspetta l'esito di response.json() quello che ottenete
      // come parametro è il JSON già "parsato"!
      console.log('ARRAY DI UTENTI', data)
      // riferimento lista
      const ul = document.getElementById('users')
      data.forEach((utente) => {
        const li = document.createElement('li')
        li.classList.add('list-group-item')
        li.innerText = utente.name // prendo solo il nome
        ul.appendChild(li)
      })
    })
    .catch((error) => {
      // qui definisco il finale NEGATIVO della Promise
      // qui finisco se la Promise è REJECTED
      console.log('ERROR', error)
      // qui finite quando la vostra Promise NON RIESCE A CONTATTARE IL SERVER
    })
}

// avviamo getUsers all'avvio della pagina
getUsers()

// RECAP METODI HTTP
// GET -> voglio recuperare una risorsa esistente
// POST -> voglio creare una nuova risorsa (serve un BODY)
// PUT -> voglio modificare una risorsa esistente (serve un BODY)
// DELETE -> voglio eliminare una risorsa esistente
