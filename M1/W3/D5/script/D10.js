/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20
console.log('JS Basic:\n\nEsercizio A: \nLa variabile "sum" è uguale a: ' + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.round(Math.random() * 20)
console.log('Esercizio B: \nLa variabile "random" è uguale a: ' + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: 'Stefano',
  surname: 'Porcellini',
  age: 44
};
console.log('Esercizio C:');
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log('Esercizio D:');
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS"];
console.log('Esercizio E');
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("JS")
console.log('Esercizio F');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop("JS")
console.log('Esercizio G');
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let dado = Math.floor(Math.random() * 6 + 1);
  return dado;
};
console.log('\nFunzioni');
console.log('Esercizio 1\nLanciando il dado hai ottenuto: ' + dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let dado1 = Math.floor(Math.random() * 6 + 1);
let dado2 = Math.floor(Math.random() * 6 + 1);
function whoIsBigger (a, b) {
  if (a>b) {
    let r1='Il numero maggiore è ' + a;
    return r1
  } else if (a<b) {
    let r2='il numero maggiore è ' + b;
    return r2
  } else {r3='i numeri ' + a +' e ' + b + ' sono uguali'; return r3}
};
console.log('Esercizio 2\nLanciando il primo dado hai ottenuto: ' + dado1 + '\nLanciando il secondo dado hai ottenuto: ' + dado2 + '\n' + whoIsBigger(dado1, dado2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string) {
  let stringArray = string.split(' ');
  return stringArray;
};
console.log('Esercizio 3\nData la frase "I love coding", essa sarà suddivisa nel seguente array: ' + splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(string, boolean) {
  if (boolean === true) {
    return string.slice(1);
  } else {return string.slice(0, -1)}
};
let testo="prova123prova"
console.log('Esercizio 4\nData la stringa "' + testo + '", se il risultato sarà vero otterremo: "' + deleteOne(testo, true) + '";\n' + 'altrimenti otterremo: "' + deleteOne(testo, false) + '"');

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string) {
  let onlyLetters = string.replace(/[0-9]/g,'')
  return onlyLetters
};
testo2 = "I have 4 dogs"
console.log('Esercizio 5\n Data la stringa "' + testo2 + '", il risultato della funzione sarà: "' + onlyLetters(testo2) + '"');
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let email = 'pippo@.com'
function isThisAnEmail(sting){
  let chkMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (chkMail.test(sting)) {return "Email valida"}
  else {return 'Attenzione! Email non valida'}
};
console.log('Esercizio 6\n' + isThisAnEmail(email));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt () {
  let days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Gioved', 'Venerdì', 'Sabato'];
  const data = new Date();
  const today = data.getDay();
 return days[today];
};
console.log('Esercizio 7\nOggi è: ' + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const numLanci = random;
function rollTheDices(number) {
  let values = [];
  let sum = 0;
  for (let i=0; i < number; i++) {
    let numDice = dice();
    values.push(numDice);
    sum += numDice;
  }
  const risultatiLancioDado = {values, sum};
  return risultatiLancioDado
};
console.log('Esercizio 8\nLanciando '+numLanci+' volte il dado, i risultati dei lanci saranno:');
console.log(rollTheDices(numLanci));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays (date) {
  let today = new Date;
  let resultMsecond = today - date;
    let result = Math.floor(resultMsecond / (1000*60*60*24))
  return result
};
let dataDaInserire = new Date('2024-4-1')
console.log('Esercizio 9\nI giorni trascorsi dalla data ' + dataDaInserire + ' sono: ' + howManyDays(dataDaInserire));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
let oggi = new Date;
myBirthDay = new Date(1979, 11, 7)
function isTodayMyBirthday(date) {
  if (date === oggi) {return "Oggi è il mio compleanno"}
    else {return "Oggi non è il mio compleanno"} 
};
console.log('Esercizio 10:\n' + isTodayMyBirthday(myBirthDay));

// Arrays & Oggetti
console.log('\nArrays & Oggetti\n');
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(objName, sting) {
objName
};
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(array){
  let newest = array[0]
  array.forEach(function(elementoArray) {
    if (elementoArray.Year > newest.Year) {
      newest = elementoArray;
    };
  });
  return newest
};

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(array) {
  return array.length;
};

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(array){
  const moviesYears = [];
  array.forEach(function(elementoArray) {
    moviesYears.push(elementoArray.Year)});
    return moviesYears
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(array) {
  olderFilm = array.filter(function(film) {return film.Year < 2000});
  return olderFilm;
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(array) {
  allTheYears = array.reduce((incremento, movie) => {return incremento + parseInt(movie.Year)}, 0);
   return allTheYears;
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(string) {
  let filmSearch = string.toLowerCase();
  let findTitle = movies.filter(function(film){
    let titoloFilm = film.Title.toLowerCase();
    return titoloFilm.includes(filmSearch);
  });
  return findTitle;
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide (string) {
  let match = [];
  let unmatch = [];
  let serchResult = {match, unmatch};
  let titleMatch = searchByTitle(string);
  for (i=0; i<titleMatch.length; i++) {
    match.push(titleMatch[i]);
  };
  let titleUnMatch = movies.filter(function(elemento){
      return !titleMatch.includes(elemento)
    });
    for (i=0; i<titleUnMatch.length; i++) {
     unmatch.push(titleUnMatch[i])
  };
  return serchResult
};
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex (n) {
  let moviesCopy = Array.of(movies);
for (i=1; i<moviesCopy.length; i++) {
  if (moviesCopy[i] === n) {
    moviesCopy.splice(n, 1);}
  return moviesCopy;}
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let contenitore = document.getElementById('container')
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let tag = document.querySelectorAll('td')
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function tdPrint() {
    allTd=document.querySelectorAll('td');
    allTd.forEach((td) => console.log(td);)
};
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function redLink(){
  link=document.querySelectorAll('a');
  link.forEach((a) => a.style.backgroundColor = 'red')
};
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addList (){
  lista = document.getElementById('myList');
  elementoLista = document.createElement('li');
  lista.appendChild(elementoLista;)
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function removeList() {
    let lista=document.getElementById('myList');
    if (lista.firstChild) {
      lista.removeChild(lista.firstChild)
    }
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function newClass () {
  tr = document.querySelectorAll('tr');
  tr.classlist.add('test')
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

console.log('Esercizio 12\n')
console.log(newestMovie(movies));
console.log('Esercizio 13\nIl numero totale dei film è ' + countMovies(movies));
console.log('Esercizio 14\nIl nuovo array con solo gli anni di uscita è:');
console.log(onlyTheYears(movies));
console.log('Esercizio 15\nL\'array con l\'elenco dei film usciti lo scorso millennio è:');
console.log(onlyInLastMillennium(movies));
console.log('Esercizio 16\nIl totale della somma degli anni dei film è di ' + sumAllTheYears(movies));
console.log('Esercizio 17\nL\'array filtrato con la parola "Avengers" è:');
console.log(searchByTitle('Avengers'));
console.log('Esercizio 18\nL\'oggetto richiesto è:');
console.log(searchAndDivide('Avengers'));
console.log('Esercizio 19\nL\'array modificato eliminando l\'index n3 è:')
console.log(removeIndex(3))