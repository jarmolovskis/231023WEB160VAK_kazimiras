
let kIsorinis = "Isorinis Tekstas";

function funkcija() {

    // Galime, bet bloga praktika, painu.
    console.log(kIsorinis);

    let kVidinis = "Vidinis Tekstas";
}

// Negalime naudoti.
// console.log(kVidinis);

// funkcija();


// Neribotas parametru skaicius
function daugParametru(...parametrai) {
    suma = 0;

    parametrai.forEach(function (value) {
        suma += value;
    })

    console.log(suma);
}

daugParametru(1, 5, 6, 8, 9, 15, 31, 100);



function pasisveikinimas() {
    console.log("Sveiki!");
}

// Alternatyvus fukcijos aprasymas (arrow funkctions)
let pasisveikinimas2 = () => {
    console.log("Sveiki!");
}

pasisveikinimas2();


function pliusDu(x) {
    return x + 2;
}

console.log(pliusDu(5));

// Alternatyva pliusDu funkcijos aprasymui
// return tokiu atveju nerasom, grazins mums x + 2
const pliusDu2 = (x) => x + 2;

let grazintaReiksme = pliusDu2(10);
console.log(grazintaReiksme);


const pliusDu3 = x => x + 2;
console.log(pliusDu3(16));


// let knygosPavadinimas = "Ziedu Valdovas";
// let knygosAutorius = "J. R. R. Tolkien";

// let knygosMasyvas = ["Ziedu Valdovas", "J. R. R. Tolkien"];
// console.log(knygosMasyvas[0], knygosMasyvas[1]);


// OBJEKTAS

// Sukurimas
let knyga = {
    // Ypatybės
    pavadinimas: "Žiedų Valdovas",
    autorius: "J. R. R. Tolkien",
    // Metodas
    pristatymas: function(leidejas = "Vaga") {
        console.log(`Leidejas: ${leidejas}.`);
        console.log(`${this.autorius} knyga - ${this.pavadinimas}.`);
    }
};

// Ypatybių naudojimas
console.log(knyga.pavadinimas);
console.log(knyga["autorius"]);

// Metodo iškvietimas
knyga.pristatymas();

// Pridėti naują ypatybę metai
knyga.metai = 1987;

// Pakeisti ypatybės pavadinimas reikšmę
knyga.pavadinimas = "Hobitas";

delete knyga.autorius;

console.log(knyga);

if ("autorius" in knyga) {
    console.log(`Knygos objektas turi ypatybę autorius - ${knyga.autorius}`);
}

if ("pavadinimas" in knyga) {
    console.log(`Knygos objektas turi ypatybę pavadinimas - ${knyga.pavadinimas}`);
}

function Filmas(pavadinimas, rezisierius, metai) {
    this.pavadinimas = pavadinimas;
    this.rezisierius = rezisierius;
    this.metai = metai;
    this.pristatymas = function() {
        console.log(`${this.rezisierius} filmas - ${this.pavadinimas}.`);
    }
}

let indianaJones = new Filmas("Indiana Jones", "Steven Spielberg", 2000);
let avatar = new Filmas("Avatar", "James Cameron", 2010);

console.log(indianaJones);
console.log(avatar);

indianaJones.pristatymas();
avatar.pristatymas();


// PAPILDOMA

let tekstas = "Kažkoks tekstas";

console.log(tekstas.toUpperCase());
console.log(tekstas.toLowerCase());

let daugNereikalinguTarpu = "   tekstas tekstas tekstas          ";
console.log(daugNereikalinguTarpu.trim());


let zodis = "Lietuva";

console.log(zodis[3]);
console.log(zodis.indexOf('v'));

console.log(zodis.slice(zodis.indexOf('t'), zodis.indexOf('v')));


let sakinys = "Pavyzdinis sakinys su keliais keliais keliais žodžiais.";
let naujasSakinys = sakinys.replace("keliais", "penkiais");
let naujasSakinys2 = sakinys.replaceAll("keliais", "penkiais");

console.log(naujasSakinys);
console.log(naujasSakinys2);
console.log(naujasSakinys2.length);



console.log(Math.floor(1.8)); // 1
console.log(Math.round(1.8)); // 2

console.log(parseInt(1.568));
console.log(parseInt("1.456"));


let skaiciuMasyvas = [1, 5, 9, 16, 20, 4, 6, 7];

let naujasSkaiciuMasyvas = skaiciuMasyvas.map(function(skaicius) {
    return skaicius * 10;
});

// Alternatyva su arrow function
// let naujasSkaiciuMasyvas = skaiciuMasyvas.map(skaicius => skaicius * 10);

console.log(naujasSkaiciuMasyvas);


let filmai = [
    new Filmas("Filmas 1", "Rezisierius 1", 1996),
    new Filmas("Filmas 2", "Rezisierius 2", 1998),
    new Filmas("Filmas 3", "Rezisierius 3", 1991),
    new Filmas("Filmas 4", "Rezisierius 4", 2001),
    new Filmas("Filmas 5", "Rezisierius 5", 2008),
];

let naujasFilmuMasyvas = filmai.filter(function(filmas) {
    return filmas.metai >= 2000;
});

// Alternatyva su arrow function
// let naujasFilmuMasyvas = filmai.filter(filmas => filmas.metai >= 2000);

console.log(naujasFilmuMasyvas);






