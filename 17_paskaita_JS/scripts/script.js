// jQuery pavyzdys

$("h2").text("Testuoju");


let image = document.getElementById("besikeiciantis-paveikslelis");
// let button = document.getElementById("paveikslelio-mygtukas");

image.addEventListener("click", function() {

    let randomNumber = Math.random() * 1000;
    let randomId = Math.floor(randomNumber);

    // console.log(randomId);

    image.setAttribute("src", `https://picsum.photos/id/${randomId}/500/300`);
    // console.log("Paveikslelis pasikeite.");
});


let myForm = document.getElementById("my-form");
let greetingElement = document.getElementById("greeting");

myForm.addEventListener("submit", function(event) {

    // Nutraukia iprasta formos pateikimo eiga, t.y. perkrauna puslapį kuriame randamės.
    event.preventDefault();

    console.log(event);

    console.log(myForm.elements);

    // Issaugokime input laukelio firstName ivestą reikšmę į kintamajį.
    let firstNameValue = myForm.elements[0].value;

    console.log(firstNameValue);

    greetingElement.textContent = `Sveiki sugrįžę ${firstNameValue}!`;
});



let headers = {
    headers: {
        Accept: "application/json"
    }
};

async function getJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", headers)
    let jokeData = await response.json();
    
    greetingElement.textContent = jokeData.joke;
    // console.log(jokeData.joke);
}

getJoke();



let productList = document.getElementById("product-list");

fetch('https://fakestoreapi.com/products')
    .then(function(atsakymas) {
        return atsakymas.json();
    })
    .then(function (json) {

        json.forEach(function (product) {
            
            let productImg = document.createElement("img");
            productImg.setAttribute("src", product.image);
            productImg.style.width = "200px";

            let productTitle = document.createElement("h3");
            productTitle.textContent = product.title;

            let listItem = document.createElement("li");
            listItem.append(productImg);
            listItem.append(productTitle);

            productList.append(listItem);

            console.log(product);
        });
    })