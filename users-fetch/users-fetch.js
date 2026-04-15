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
}

// avviamo getUsers all'avvio della pagina
getUsers()

// RECAP METODI HTTP
// GET -> voglio recuperare una risorsa esistente
// POST -> voglio creare una nuova risorsa (serve un BODY)
// PUT -> voglio modificare una risorsa esistente (serve un BODY)
// DELETE -> voglio eliminare una risorsa esistente
