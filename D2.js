/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n1 = 3
let n2=5 
if(n1> n2){
  console.log('il numero più grande è'+ n1)
  }
else if(n2>n1) { console.log('il numero più grande è' + n2)}  
  else { console.log('i due numeri sono uguali')}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let x = 7
if(x!=5) {
   console.log('not equal')}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let y = 95
if(y % 5===0){ 
  console.log('divisibile per 5')
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let a = 4;
let b = -12;

if (a == 8) {
    console.log('è uguale a 8');
} else if (a - b === 8) {
    console.log('fa 8');
} else if (a + b === -8) {
    console.log('la loro operazione è uguale a -8');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 40
let shippingCost = 10
let amountToPay= totalShoppingCart
if(totalShoppingCart<50){ amountToPay+=shippingCost}
console.log('importo da pagare =' + amountToPay)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = 100
totalShoppingCart2 = totalShoppingCart2*0.8
let shippingCost2 =10
let amountToPay2 = totalShoppingCart2 

if(totalShoppingCart2<50){ amountToPay2 += shippingCost2}
console.log(amountToPay2)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let z1 = 6
let z2 = 2
let z3 = 3

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2)
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2)
    } else {
      console.log(z1, z2, z3)
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1)
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1)
    } else {
      console.log(z2, z1, z3)
    }
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let v = 'ciao'
if(typeof v=== 'number'){ console.log(false)}
else { console.log(true)}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



let h = 12
if(h%2=== 0){ console.log('il numero è pari')}
else { console.log('il numero è dispari')}

/////////////////
  
  let val = 7
   if (val < 5){
    console.log("Meno di 5")}
     else if(val < 10) {
        console.log("Meno di 10")
    } else {
      console.log("Uguale a 10 o maggiore")
    }

/////
  ///Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
///

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city= 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName 
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const wer = []
wer.push(1)
wer.push(2)
wer.push(3)
wer.push(4)
wer.push(5)
wer.push(6)
wer.push(7)
wer.push(8)
wer.push(9)
wer.push(10)
console.log(wer)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
wer[9]= 100
console.log(wer)
/* SCRIVI QUI LA TUA RISPOSTA */
