
let skaicius = 0;
let herbas = 0;

for (let x = 0; x < 10000; x++) {

    let random = Math.random();

    // console.log(random);

    if (random < 0.5) {
        skaicius++;
    } else {
        herbas++;
    }
}

console.log(`Iskrito skaicius: ${skaicius}`);
console.log(`Iskrito herbas: ${herbas}`);

// console.log("Iskrito herbas: " + herbas);

// WHILE

let metimai = 0;
let iskritoSkaicius = false;

while (!iskritoSkaicius) {
    metimai++;

    // let random = Math.random();

    // if (random < 0.5) {
    //     iskritoSkaicius = true;
    // }

    iskritoSkaicius = Math.random() < 0.5;
}

console.log(`Ismetėm monetą ${metimai} kartą/-ų, kol iškrito skaičius`);


let vienosEilesZvaigzdutes = "";
for (let a = 0; a < 5; a++) {
    vienosEilesZvaigzdutes += "*";
    console.log(vienosEilesZvaigzdutes);
}

console.log("----------");


for (let a = 4; a >= 0; a--) {

    vienosEilesZvaigzdutes = "";

    for (let b = 0; b <= a; b++) {
        vienosEilesZvaigzdutes += "*";
    }

    console.log(vienosEilesZvaigzdutes);
}

// *****
// ****
// ***
// **
// *

// for (let a = 4; a >= 0; a--) {
//     console.log(a);
// }

// isorinis ciklas:
// a = 4
// a = 3
// a = 2
// a = 1
// a = 0

// for (let b = 0; b <= a; b++) {
//     vienosEilesZvaigzdutes += "*";
// }

// vidinis ciklas:
// jeigu a = 4
// iretaciju skaicius - 5

// jeigu a = 3
// iretaciju skaicius - 4

// jeigu a = 2
// iretaciju skaicius - 3

// ...

let masyvas = ["raudona", "zalia", "melyna"];

for (let x = 0; x < masyvas.length; x++) {
    console.log(masyvas[x]);
}

masyvas.forEach(
    function (value, index, array) {
        console.log(value);
        console.log(index);
        console.log(array);
    }
);

for (let spalva of masyvas) {
    console.log(spalva);
}


// FUNKCIJOS

function pasisveikinimas(vardas, oras = "debesuota") {
    console.log(`Sveiki ${vardas}!`);
    console.log(`Šiandien yra ${oras}.`);
}

// pasisveikinimas("Kazimiras");

let k1 = "Jonas";
let k2 = "saulėta";
pasisveikinimas(k1, k2);


function suma(a, b) {
    return a + b;
}

let k3 = suma(15, 87);
console.log(k3);

// prideti menesio ir dienos patikrinima
// "2023-05-09"
// new Date("2023-05-09");
function arPilnametis(gimimoData) {

    let dabartiniaiMetai = new Date().getFullYear();

    if (dabartiniaiMetai - gimimoData < 20) {
        return false;
    }

    return true;
}

let manoAmzius = prompt("Iveskite savo gimimo data:");

if (arPilnametis(manoAmzius)) {
    console.log("Jūs esate pilnametis");
} else {
    console.log("Jūs esate nepilnametis");
}