// QUESTO È UN ESEMPIO DI LISTA UTENTI POPOLATA DA UN ARRAY PRE-ESISTENTE

const users = ['Gian', 'Giorgio', 'Robes', 'Pierre']

// se avessi una lista di utenti scritta a mano, come riempirei quella <ul> con i nomi?
const ul = document.getElementById('users') // <ul></ul>
// ora devo creare un <li> per ogni elemento di users, e lo devo appendere alla ul
for (let i = 0; i < users.length; i++) {
  const newLi = document.createElement('li') // <li></li>
  newLi.innerText = users[i] // <li>Gian</li>
  // in realtà dovrei metterci le classi di BS
  newLi.classList.add('list-group-item') // <li class=list-group-item>Gian</li>
  // ultimo step: lo appendo alla ul "users"
  ul.appendChild(newLi)
}

// alternativa con il metodo .forEach()
// users.forEach(user => {
//     const newLi = document.createElement('li') // <li></li>
//     newLi.innerText = user
//     newLi.classList.add('list-group-item') // <li class=list-group-item>Gian</li>
//     ul.appendChild(newLi)
// })
