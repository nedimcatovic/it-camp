// for (let i = 0; i < 10; i++ ) {
//     console.log("Hello world", i);
// }

// for (let i = 6; i > 0; i--){
//     console.log(i);
// }

// for (let i = 0; i < 11; i++ ){
//     if (i !==7) { 
//     console.log (i);

//    }
// } 
// for (let i = 0; i < 11; i++ ){
//     if (i ===7) { 
//         continue
//    }
//    console.log (i);
// } 

// for (let i = 0; i < 11; i++ ){
//     if (i ===7) { 
//         break
//    }
//    console.log (i);
// } 

// for (let i = 0; i < 21; i+=2){
//     console.log(i);
// }

// numSum = 0;

// for (let i = 0; i < 21; i++){
//     if (i % 2 === 0){
//     numSum = numSum + i;
//     console.log("Nakon broja ", i, "Suma je", numSum);
//    }
// }

// for (let i = 0; i < 6; i++){
//     if (i > 2) {
//         console.log("python");
//     } else {
//         console.log(" je super")
//     }
// }

//domaci parnih i neparnih brojeva

uneseniBrojevi = Number(prompt("Unesi broj brojeva:"));
brojParnih = 0;
brojNeparnih = 0;

for (let i = 0; i < uneseniBrojevi; i++) {
    broj = Number(prompt("Unesite broj:"))
    if (broj % 2 === 0) {
        brojParnih = brojParnih + broj;
    } else {
        brojNeparnih = brojNeparnih + broj
    }
}

console.log("Zbir parnih:", brojParnih, "Zbir neparnih", brojNeparnih)
