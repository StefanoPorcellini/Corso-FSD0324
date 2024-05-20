const costoChiamata:number = 0.20

interface iSmartphone {
    credito: number
    numeroChiamate?: number | undefined
}


class User implements iSmartphone{
    nome:string
    cognome:string
    constructor (
    _nome: string,
    _cognome: string,
    public credito: number, 
    public numeroChiamate?: number | undefined
    ){
        this.nome = _nome
        this.cognome = _cognome
    }
     ricarica(importo:number) {
        this.credito += importo
}}


const utente = new User('Mario', 'Rossi', 5, 15)

utente.ricarica(10)

console.log('Ricarica effettuata, nuovo credito residuo: € ', utente.credito);

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