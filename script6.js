// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(arr[i][j]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   let red = "";
//   for (let j = 0; j < 3; j++) {
//     red = red + arr[i][j] + " ";
//   }
//   console.log(red);
// }

// console.log(arr[arr.lenght - 1]);

// console.log(arr[0][1]);
// console.log(arr[1][0]);

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// o = ["th", "st", "nd", "rd"];

// for (let i = 0; i < color.length; i++) {
//   if (i === 0) {
//     console.log(i + 1, o[1], "choice is", color[i]);
//   } else if (i === 1) {
//     console.log(i + 1, o[2], "choice is", color[i]);
//   } else if (i === 2) {
//     console.log(i + 1, o[3], "choice is", color[i]);
//   } else {
//     console.log(i + 1, o[0], "choice is", color[i]);
//   }
// }

// array1 = [1, 0, 2, 3, 4];
// array2 = [5, 8, 2, 4, 10, 13];
// let rezultat;

// array3 = [];

// for (i = 0; i < array1.lenght; i++) {
//   rezultat = array1[0] + array2[0];
//   array3.push(rezultat);
// }
// console.log(array3);

// mat = [
//   [34, 56, 2],
//   [78, 45, 23],
//   [65, 32, 87],
// ];

// for (let i = 0; i < mat.length; i++) {
//   red = " ";
//   for (let j = 0; j < mat[i].length; j++) {
//     if (i === j) {
//       red += mat[i][j] + " ";
//     } else {
//       red += "    ";
//     }
//   }
//   console.log(red);
// }

// mat = [
//   [34, 56, 23],
//   [78, 45, 23],
//   [65, 32, 87],
// ];

// for (let i = 0; i < mat.length; i++) {
//   red = " ";
//   for (let j = 0; j < mat[i].length; j++) {
//     if (i + j === mat[i].length - 1) {
//       red += mat[i][j] + " ";
//     } else {
//       red += "   ";
//     }
//   }
//   console.log(red);
// }

// arr = [];
// arr1 = [];
// arr2 = [];

// for (let i = 1; i < 101; i++) {
//   if (i % 2 === 1) {
//     arr.push(i);
//   }
//   if (i % 2 === 0 || i % 5 === 0) {
//     arr1.push(i);
//   }
//   if (i % 3 === 0) {
//     arr2.push(i * i);
//   }
// }

// console.log(arr);
// console.log(arr1);
// console.log(arr2);

let arr = [42, 23, 55, 49, 58, 99, 88, 90];

max1 = arr[0];
max2 = arr[0];

for (i = 0; i < arr.length; i++) {
  if (arr[i] > max1) {
    max1 = arr[i];
  }
  if (arr[i] < max1) {
    max2 = arr[i];
  }
}

console.log(max1);
console.log(max2);

//nadji unikatan broj u nizu 1, 1, 2, 2, 3, 3, 4, 5, 5
// nadji drugi najmanji broj