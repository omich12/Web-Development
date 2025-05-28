// ## Basic Calculation

let x = 6;
let y = 2;

let sum = x + y;
let diff = x - y;
let prod = x * y;

console.log('Sum: ', sum);
console.log('Difference: ', diff);
console.log('Product: ', prod);

console.log("==============================")

// ## If Else Condition

if (x > y) {
    console.log(x + ' is greater than ' + y);
}
else {
    console.log(y + ' is greater than ' + x);
}

console.log("==============================")

// // Class assignment 
// // if year is 2082 print the message
// // this is current year else print this is passed year or this is upcoming year.

let year = 2022;

if (year == 2082) {
    console.log("Current year.");
}

else if (year < 2082) {
    console.log("Passed year.")
}

else {
    console.log("Upcoming year.")
}

console.log("==============================")

// ## Loops

for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

console.log("==============================")

// ## Template literal 

for (let i = 1; i <= 10; i++) {
    let n = 2 * i;
    console.log(`2 x ${i}  =  ${n}`);
}

console.log("==============================")

// ## Extra

let num = 10;

if (num % 2 == 0) {
    console.log(`${num} is even number`)
}

console.log("==============================")

// ## Using Prompt

// let day = prompt("What day is today?")

// console.log(`Today is ${day}`)

// console.log("==============================")

// let n = prompt("Enter a number")

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`)
// }

// console.log("==============================")

// ## Take number from 1 to 20 and print only odd number

let n;
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        continue;

    }

    console.log("The odd number is " + i);

}

console.log("==============================")

// ## Function and Add

// function sum(a, b) {
//     return a+b;
// }

// let value = sum(4, 5)

// console.log(`The sum is: ${value}`)

// console.log("==============================")

// ## Function and Product

// function product(x,y)
// {
//     return x*y;
// }

// let v = product(2,4)
// console.log(`Product is: ${v}`)

// console.log("==============================")

// Function Extra

function s(a, b = 0) {
    console.log(a + b)
}
s(4, 9)

console.log("==============================")

// Function and Loop

function table(z) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${z} x ${i} = ${z * i}`);
    }
}

table(2);

console.log("==============================")

// Array

let newArray = ['Ram', 'Hari', 'Sita']
console.table(newArray);
console.log(newArray)
console.log(newArray[2])

newArray.push('Ram Bahadur')
console.table(newArray)

// newArray.pop()
// newArray.pop()

// newArray.shift()
// newArray.unshift('kiyo')

// console.table(newArray)

