
// let pinigai = prompt("Iveskite pinigu skaiciu:");
let pinigai = 2000;

// If else salyga su keliais scenarijais
if (pinigai > 3000) {
    console.log("Jums uztenka atostogoms Maljorkoje.");
} else if (pinigai > 1500) {
    console.log("Jums uztenka atostomos Palangoje.");
} else if (pinigai > 800) {
    console.log("Jums uztenka atostomos Turkijoje.");
} else {
    console.log("Jums neuztenka atostomos. :`(");
}

//If salyga su vienu scenarijumi
if (100 > 50) {
    console.log("Simtas yra daugiau uz penkiasdesimt");
}

console.log("Toliau rasom JS.");

// Switchas su keliais scenarijais
switch (Number(pinigai)) {
    case 3000:
        console.log("Jus turite 3000 pinigu");
        console.log("Jus esate turtingas!");
        break;
    case 2000:
        console.log("Jus turite 2000 pinigu.");
        break;
    default:
        console.log("Jusu pinigu suma yra nei 3000, nei 2000.");
}


// let diena = prompt("Iveskite dienos pavadinima:");
let diena = "penktadienis";

// Switchas su pora scenariju. Tokiais atvejais dazniau naudojamas if'as.
switch (diena === "penktadienis") {
    case true:
        console.log("Su savaitgaliu!");
        break;
    default:
        console.log("Ne penktadienis");
}


let maistas = "obuolys";

if (maistas === "bananas" || maistas === "obuolys") {

    console.log("Vaisius");
}


// CIKLAI

// FOR CIKLAS

for (let x = 1; x <= 10; x++) {

    console.log(x);
}

// x = 0
// true
// 0
// x++
// x = 1
// true
// 1
// x++
// x = 2
// true
// 2
// x++
// ....
// x = 10
// false
// Nutruksta ciklas kai x < 10 nebera tiesa.


for (let x = 10; x >= 1; x--) {

    console.log(x);
}


for (let x = 3; x <= 100; x += 3) {

    console.log(x);
}

// 3, 6, 9, 12, 15, 18 ... 99

for (let x = 1; x <= 100; x++) {
    if (x % 7 === 0) {
        console.log(x);
    }
}