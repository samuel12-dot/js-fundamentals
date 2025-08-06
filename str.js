let quote = "The quick brown fox jumps over the lazy dog"

console.log(quote)
// Property of a string : length
let quoteLength = quote.length
console.log("The length of quote is :", quoteLength)
/* String methods
1. indexOf and lastIndexOf
2. slice and substring
3. toUpperCase and toLowerCase
4. split and concat */

// indexOf is used for getting the position of a particular character

let firstChar = quote[0]
let lastChar = quote[42]
// console.log("First Character is:", firstChar + "The Last Character is: ", lastChar)

/* const lazyIndex = quote.indexOf('lazy')
console.log(lazyIndex) */

/* const hIndex = quote.indexOf('h')
console.log(hIndex) */

/* const x1 =quote.indexOf('x')
const x2 =quote.lastIndexOf('x')

console.log(x1, x2) */

/* const noSpace = quote.split(" ")
console.log(noSpace) */

const letterE = quote.split("e")
console.log(letterE)

//toUpperCase
const upper = quote.toUpperCase()
console.log(upper)

//toLowerCase
const lower = quote.toLowerCase()
console.log(lower)

//split
const noSpace = quote.split(' ', 5)
console.log(noSpace)

//concat

//startsWith
const begin = quote.startsWith('A')
console.log(begin)
//endsWith