

let divai = document.getElementsByTagName("div");

let paragrafai = document.getElementsByTagName("p");

// visus kartu
// for (let x = 0; x < 5; x++){

//     console.log(divai[x], paragrafai[x]);
//     }

// atskirai divaiir atskirai paragrafai
for (let x = 0; x < 5; x++){

    console.log(divai[x]);
    }

for (let y = 0; y < 5; y++){

        console.log(paragrafai[y]);
        }

divai[2].classList.add("klase1");
paragrafai[4].classList.add("klase2");

// let elementaiSuKlase = document.getElementsByClassName("klase1");

// elementaiSuKlase.concat(document.getElementsByClassName("klase2"));

// let elementaiSuKlase = document.getElementsByClassName("klase1").concat(document.getElementsByClassName("klase2"));

// let divuSuKlaseHTMLCollection = document.getElementsByClassName("klase1");
// let paragrafuSuKlaseHTMLCollection = document.getElementsByClassName("klase2");

// let divaiSuKlaseMasyvas = Array.from(divuSuKlaseHTMLCollection);
// let paragrafaiSuKlaseMasyvas = Array.from(paragrafuSuKlaseHTMLCollection);

// let elementaiSuKlase = divaiSuKlaseMasyvas.concat(paragrafaiSuKlaseMasyvas);

let elementaiSuKlase = document.querySelectorAll(".klase1, .klase2");

console.log(elementaiSuKlase);

// for (let x = 0; x < 2; x++){

//     console.log(elementaiSuKlase[x]);
//     }
    
// ar galima sukurti nauja elementa is dvieju skirtingas klases turinciu elementu?