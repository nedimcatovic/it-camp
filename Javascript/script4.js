// brojIteracija = 5;

// while (brojIteracija > 0){
//     console.log("PETLJAA")
//     brojIteracija--;
// }

//vezbanje sifre

// sifra=prompt('Unesite sifru')
// sifra = 'hajde udji';
// korSifra = "";

// while (korSifra !== sifra){
//     console.log("Uneli ste pogresnu sifru")
//     korSifra=prompt("Unesite lozinku")
// }

// console.log("Tacna sifra")

// broj = 42;
// korBroj = Number(prompt("Ubaci broj"));

// while (korBroj !== broj) {
//   console.log("Uneli ste tacan broj");
//   if (korBroj === broj) {
//     break;
//   }
//   if (korBroj === 0) {
//     break;
//   } else if (korBroj < broj) {
//     console.log("Unesite manji broj");
//   } else if (korBroj > broj) {
//     console.log("Unesite veci broj");
//   }
// }

// broj = 42;

// while (true) {
//   number = Number(prompt("Unesite broj:"));
//   if (number === 0) {
//     console.log("Uneli ste 0");
//     break;
//   } else if (number === broj) {
//     console.log("Uneli ste tacan broj");
//   }
//   if (number < broj) {
//     console.log("Uneli ste premali broj");
//   } else {
//     console.log("Uneli ste prevelik broj");
//   }
// }

number = Number(prompt("Izaberi broj 1(+) 2(-) 3(*) 4(/) 5(exit)"));
broj1 = Number(prompt("broj1"));
broj2 = Number(prompt("broj2"));

while (true) {
  if ((number = 1)) {
    rezultat = broj1 + broj2;
  } else if ((number = 2)) {
    rezultat = broj1 - broj2;
  } else if ((number = 3)) {
    rezultat = broj1 * broj2;
  } else if ((number = 4)) {
    rezultat = broj1 / broj2;
  }  if ((number = 5)) {
    break;
  }
}

console.log(rezultat);
