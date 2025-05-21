let x = 6;
let y = 2;

let sum = x + y;
let diff = x - y;
let prod = x * y;

console.log('sum', sum);
console.log('difference', diff);
console.log('product', prod);

if (x > y) {
    console.log(x + ' is greater than ' + y);
}
else {
    console.log(y + ' is greater than ' + x);
}

// class assignment 
// if year is 2082 print the message
// this is current year else print this is passed year or this is upcoming year.

let year = 2022;

if (year == 2082) {
    console.log("This is current year.");
}

else if (year < 2082) {
    console.log("This is passed year.")
}

else {
    console.log("This is upcoming year.")
}


// Loops

for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

// template literal 

console.log("==============================")

for (let i = 1; i <= 10; i++) {
    let n = 2 * i;
    console.log(`2 x ${i}  =  ${n}`);
}

console.log("==============================")

let num = 10;

if (num % 2 == 0) {
    console.log(`${num} is even number`)
}


console.log("==============================")

// let day = prompt("What day is today")

// console.log(`Today is ${day}`)

console.log("==============================")
console.log("==============================")

// let n = prompt("Enter a number")

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`)
// }


// Take number from 1 to 20 and print only odd number

let n;
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        continue;

    }

    console.log("The odd number is " + i );

}
