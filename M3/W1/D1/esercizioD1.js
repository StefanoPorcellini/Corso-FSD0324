"use strict";
const costoChiamata = 0.20;
class User {
    constructor(_nome, _cognome, credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(importo = 10) {
        this.credito = importo + this.credito;
        console.log('Ricarica effettuata, nuovo credito residuo: € ', this.credito);
    }
}
const utente = new User('Mario', 'Rossi', 5, 15);
console.log('utente', utente);
// let ricarica = function (creditoUtente:number | any, importo:number) {
//     creditoUtente.credito += importo
//     console.log('Ricarica effettuata, nuovo credito residuo: € ', creditoUtente.credito);
// }
// let chiamata = function (minuti:number):number{
//     credito -= minuti*costoChiamata
//     console.log('Chiamata conclusa, costo chiamata: € ' + (minuti*costoChiamata) + '. Nuovo credito residuo: € ', credito);    
// }
// let chiama404 = function ():number{
//     console.log('Credito residuo: € '), credito;    
// }
