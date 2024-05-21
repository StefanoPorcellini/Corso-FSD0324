"use strict";
const costoChiamata = 0.20;
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(importo) {
        this.credito += importo;
    }
    chiamata(minuti) {
        this.credito -= minuti * costoChiamata;
        this.numeroChiamate += minuti;
        console.log('Chiamata conclusa. Durata chiamata: ' + minuti + ' minuti. ', 'Costo chiamata: € ' + (minuti * costoChiamata) + '. Nuovo credito residuo: € ', this.credito);
    }
    chiama404() {
        console.log('Ciamata al 404. Credito residuo: € ', this.credito);
    }
    creditoInsufficiente() {
        if (this.credito < 0.2) {
            console.log('ATTENZIONE! Credito Insufficiente');
        }
    }
}
const utente = new User('Mario', 'Rossi');
console.log('utente', utente);
utente.ricarica(10);
console.log('Ricarica effettuata, nuovo credito residuo: € ', utente.credito);
utente.chiamata(5);
utente.chiama404();
// let chiamata = function (minuti:number):number{
//     credito -= minuti*costoChiamata
//     console.log('Chiamata conclusa, costo chiamata: € ' + (minuti*costoChiamata) + '. Nuovo credito residuo: € ', credito);    
// }
// let chiama404 = function ():number{
//     console.log('Credito residuo: € '), credito;    
// }
