// let niz = [1, 20 ,18, 200, 500, 68, 53, 57, 23, 4]
// console.log(niz)
// min = niz[0];
// max = niz[0];

// for(i= 0; i <= niz.length; i++){
//     if (niz[i] >= max){
//         max = niz[i];
//     } if (niz [i] <= min){
//         min = niz[i]
//     }
// }

// let elements = [70, 2, 3, 4, 5, 6];
// console.log(elements.unshift(11));
// console.log(elements);

//unshift dodaje element na pocetku niza

//pop uklanja poslednji element niza
//shift uklanja prvi element niza

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(0, 3));

//slice uzima elemente od do definisanog broja
//slice ne menja postojeci niz

// console.log(animals);

//splice menja niza i dodaje i oduzima elemente

// const months = ["Jan", "March", "April", "May"];
// console.log(months);
// months.splice(1, 0, "Feb");
// console.log(months);

//funkcije

// let elements = [70, 2, 3, 4, 5, 6];
// let pom = elements.shift();
// console.log(pom);
// console.log(elements);

// function doSmth() {
//   console.log("Hello everyone");
// }

// doSmth();

// for (let i = 0; i < 5; i++) {
//   doSmth();
// }

//pisi brojeve dok nisu deljivi sa 3 i 5

let broj = Number(prompt("Unesi broj"));
let niz = [];

while (true) {
  broj = Number(prompt("Unesi broj"));
  if (broj % 3 === 0 && broj % 5 === 0) {
    break;
  }
  niz.push(broj);
}


console.log(niz);
