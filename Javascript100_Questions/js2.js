// // Resverse a string 

// function ResverseString(str) {
//     return str.split('').reverse().join('');

// }
// console.log(ResverseString("hello"));


// // // Resverse a string 

// function ResverseString(str) {
//     return str.split('').reverse().join();

// }
// console.log(ResverseString("Hello"));

// // fizzBuzz

// // Print numbers from 1 to n.
// // For multiples of 3, print "Fizz" instead.
// // For multiples of 5, print "Buzz" instead.
// // For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//     let output = '';

//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);


// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     if (i % 5 === 0) {
//         console.log("Buzz");

//     } else {
//         console.log("FizzBuzz");
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 100; i++) {


//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Yahoo");
//     } else if (i % 3 === 0) {
//         console.log("Baaba");
//     }
// }
// ////////////////////////////////////////////////////////////////////////////////////////////

// // Challenge 3: Find the Factorial

// function Factorial() {


// }


// ////////////////////////////////////////////////////////////////////////////////////////////

// // Remove Duplicates from an Array 

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// // Example
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// ////////////////////////////////////////////////////////////////////////////////////////////

// // new challnges \

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////

// // Closures in Js

// function x() {
//     var a = 7;
//     function Y() {
//         console.log(a);
//     }
//     Y();

// }
// x();

// // 2

// function init() {
//     var name = "sudha";
//     function displayName() {
//         console.log(init);
//     }
//     displayName();
// }
// init();

// // Scoping with let and const

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;

// }
// console.log(x);


// ////////////////////////////////////////////////////////////////////////////////////////////


// if (Math.random() > 0.5) {
//     const x = 2;
// } else {
//     const x = 4;
//     s

// }
// console.log(x);


// ////////////////////////////////////////////////////////////////////////////////////////////

// // closures in js 

// function makefun() {
//     const name = "Bhagwan";

//     function displayGame() {
//         console.log(name);

//     }
//     return displayGame();
// }

// const myfun = makefun();
// myfun();

// /////////////////////////////////////////////////////////////////////////////////////////////////////

// // Array Destruction 

// let book = ["Adavnce Js", 200, 150, [2023, "ikkar"]];

// // let name = book[1];
// // let price = book[1];
// // let pages = book[2]; 

// let [name, price = 150, pages, [year, surname]] = book;
// console.log(year);

/////////////////////////////////////////////////////////////////////

// Students according to their scores 
const grade = 56;


if (grade <= 100 && grade >= 80) {
    console.log("you got A score..");
} else if (grade <= 89 && grade >= 70) {
    console.log("You got B score..")

} else if (grade <= 69 && grade >= 60) {
    console.log("You got C score..")
} else if (grade <= 59 && grade >= 50) {
    console.log("You got D score ..")
} else {
    console.log(" You are fail in exam ..")
};

// 

let array1 = [12, 12, 45, 654, 45, 45, 6645, 5];

let maxNumber = Math.max(...array1);

console.log(maxNumber);


// 

let array12 = [12, 12, 45, 654, 45, 45, 6645, 5];

let maxNumber2 = array1[0];

for (let i = 1; i < array12.length; i++) {
  if (array1[i] > maxNumber2) {
    maxNumber2 = array1[i];
  }
}

console.log(maxNumber2);

