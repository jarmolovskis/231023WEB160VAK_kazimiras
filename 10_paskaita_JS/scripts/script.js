
// Iskviesti langa narsykles puslapyje su tam tikru tekstu
// alert("Tekstas iš JavaScripto failo");

console.log("Konsolės tekstas!");

document.write("Dokumento tekstas.");

console.log("Antras konsolės tekstas!");

document.write("Antras dokumento tekstas.");

let kintamojoPavadinimas = "Kažkoks tekstas";

console.log(kintamojoPavadinimas);

kintamojoPavadinimas = "Naujas tekstas";

console.log(kintamojoPavadinimas);

const KONSTANTOS_PAVADINIMAS = "Konstantos reikšmė";

console.log(KONSTANTOS_PAVADINIMAS);

// Deklaruotai konstantai negalim priskirti reikšmės, bus klaida.
// konstanta = "Nauja konstantos reikšmė";
// console.log(konstanta);

var senasKintamasis = "Seno kintamojo reikšmė";

console.log(senasKintamasis);

let tekstas = "Tekstas";
let skaicius = 45.8;
let loginis = true // false
let nieko = null;


let vardas = "Jonas";
let miestas = "Penevežio";
let hobis = "gyvūnus";
let amzius = 41;


console.log("Aš esu " + vardas + ". Man " + amzius + " metų. Aš esu iš " + miestas + ". Mėgstu " + hobis + ".");

console.log(`Aš esu ${vardas}. Man ${amzius} metų. Aš esu iš ${miestas}. Mėgstu ${hobis}.`);


let x = 15;
let y = 21;

console.log(x + y);


let ijungta = true;
let isjungta = false;

console.log(ijungta, isjungta);

let kintamasisBeReiksmes = null;

console.log(kintamasisBeReiksmes);


let kodas = 1234;

console.log(String(kodas) + 3);

let butas = "5";

console.log(Number(butas) + 6);

let on = 1;
console.log(Boolean(on));


// Aritmetiniai operatoriai

let a = 9;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);

console.log(a++);
console.log(b--);
console.log(++a);
console.log(--b);
console.log(a);
console.log(b);
// 9
// 5
// 11
// 3
// 11
// 3


// Priskirimo operatoriai

let k1 = 15;
let k2 = 10;

k2 += k1; // k2 = k2 + k1; k2 = 25
console.log(k2);

k2 -= k1; // k2 = k2 - k1; k2 = 10
console.log(k2);

k2 *= k1; // k2 = k2 * k1; k2 = 150
console.log(k2);

k2 /= k1; // k2 = k2 / k1; k2 = 10
console.log(k2);

k2 %= k1; // k2 = k2 % k1; k2 = 10
console.log(k2);


// Palyginimo operatoriai

console.log(9 == 8); // false
console.log(9 != 8); // true
console.log(9 === "9"); // false
console.log(9 !== "9"); // true
console.log(9 > 8); // true
console.log(9 >= 9); // true
console.log(9 < 8); // false
console.log(9 <= 9); // true

console.log("ABC" == "ABC"); // true
console.log("ABC" == "abc"); // false
console.log("A" == "Z"); // false


// Loginiai operatoriai

console.log(7 > 2 && 3 > 4); // false
console.log(7 > 2 || 3 > 4); // true

let k3 = true;
console.log(!k3); // false


// Suzinoti reiksmes tipa

let k4 = "Tekstas";
let k5 = 52;
let k6 = false;

console.log(typeof k4);
console.log(typeof k5);
console.log(typeof k6);


let masyvas = ["Dramblys", "Liūtas", "Šuo", "Zuikis"];

// Gali būt skirtingi duomenų tipai
//let masyvas = ["Dramblys", 58, false, null];

console.log(masyvas);

console.log(masyvas[2]);

masyvas[1] = "Begemotas";

console.log(masyvas);
console.log(masyvas.length);

masyvas.pop();

console.log(masyvas);

masyvas.push("Arklys");

console.log(masyvas);

masyvas.shift();

console.log(masyvas);

masyvas.unshift("Bebras");

console.log(masyvas);

console.log(masyvas.indexOf("Arklys"));