// console.log(document.
// console.log(document.getElementById("fruits-title").innerText)
const places = document.getElementsByClassName("im-places");
console.log(places)
for (const place of places) {

 console.log(place.innerText);
}
// getElementByTagName:

const fruits = document.getElementById("fruits");

for (const fruit of fruits) {
 console.log(fruit);
}

// quarilSelectorAll

const someLi = document.querySelectorAll('.fruits-container li');
console.log(someLi)