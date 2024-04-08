/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
let x = 10;
let y = 20;
if (x > y) {console.log("il numero x è maggiore del numero y");}
else {console.log("il numero y è maggiore del numero x")};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("Esercizio 2");
let num1 = 7;
if (num1 !== 5) {console.log("not equal");};


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: usa l'operatore modulo)
*/

console.log("Esercizio 3");
let num2 = 15
if (num2%5 === 0) {console.log("la variabile \"num2\" è divisibile per 5");}
else {console.log("La variabile \"num2\" non è divisibile per 5")};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8
  oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("Esercizio 4");
if ((x===8)||(y===8)) {console.log("il valore di x o di y è uguale a 8");}
else if (x+y==8) {console.log("la somma di x + y è uguale a 8");}
else if (x-y==8) {console.log("la differenza tra x e y è uguale a 8");}
else if (y-x==8) {console.log("la differenza tra y e x è uguale a 8");}
else console.log("Nessuna delle condizioni è soddisfatta");


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("Esercizio 5");
let totalShoppingCart = 55
const SHIPPING = 10
if (totalShoppingCart < 50) {
  totalShoppingCart = totalShoppingCart + SHIPPING
  console.log("Il costo totale è di " + totalShoppingCart + ", comprese le spese di spedizione che ammontano a " + SHIPPING);
}
else  console.log("Il costo totale è di " + totalShoppingCart + " (spese di spedizione incluse)");


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("Esercizio 6");
totalShoppingCart = totalShoppingCart * 0.8;
if (totalShoppingCart < 50) 
  {
    totalShoppingCart = totalShoppingCart + SHIPPING
    console.log("Il costo totale è di " + totalShoppingCart + " (sconto Black Friday del 20% incluso), comprese le spese di spedizione che ammontano a " + SHIPPING);
  }
else  console.log("Il costo totale è di " + totalShoppingCart + " (sconto Black Friday del 20% e spese di spedizione incluse)");


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 7");
let a=15;
let b=5;
let c=7;
console.log("Dati i valori di: a=" + a + "; b=" + b + "; c=" + c + "; l'ordine in base al loro valore è il seguente:");
if ((a<b)&&(b<c)) {console.log("a, b, c");}
else if ((a<c)&&(c<b)) {console.log("a, c, b");}
else if ((b<a)&&(a<c)) {console.log("b, a, c");}
else if ((b<c)&&(c<a)) {console.log("b, c, a");}
else if ((c<a)&&(a<b)) {console.log("c, a, b");}
else {console.log("c, b, a")};

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 8");
let prova = "pippo";
console.log("La tipologia della variabile \"prova\" è: " + typeof prova);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 9");
if (num2%2 == 0) {console.log("la variabile \"num2\" è pari, infatti il suo valore è " + num2);}
else console.log("la variabile \"num2\" è dispari, infatti il suo valore è " + num2);


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 10");
let val = 7;
  if ((val < 10) && (val>=5)) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 11");
me.city = "Toronto";
console.log("L'oggetto \"me\" è costituito dai seguenti dati:");
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 12");
delete me.lastName;
console.log("L'oggetto \"me\" è stato modificato con i seguenti dati:");
console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 13");
me.skills.pop();
console.log("L'\"array\" skills nell'oggetto \"me\" è stato modificato con i seguenti dati:");
console.log(me.skills);


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 14");
const arrayNumbers = [];
console.log("L'\"array\" \"arrayNumber\" è vuoto, infatti i suoi dati sono:");
console.log(arrayNumbers);
arrayNumbers.push (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("L'\"array\" \"arrayNumber\" che era vuoto adesso ha i seguenti valori:");
console.log(arrayNumbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio 15");
arrayNumbers[arrayNumbers.length - 1] = 100
console.log("L'\"array\" \"arrayNumber\" adesso ha i seguenti valori:");
console.log(arrayNumbers);