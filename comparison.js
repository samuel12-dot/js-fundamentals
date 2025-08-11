//Comparison Operators

//1. Greater than operator(>)
//2. Less than operator(<)
//3. Greater than or equal to operator(>=)
//4. Less than or equal to operator(<=)

const result = 75

const isPromoted = result > 70

const isDemoted = result < 50

const toReseat = result > 50 && result < 70

console.log(isPromoted)
console.log(isDemoted)
console.log(toReseat)
//Comparison operators
console.log(5 == 2 + 3)// Equal to
console.log('5' == 2 + 3) //Equal to also
console.log('5' === 2 + 3) // strict equality = false
console.log( 5 === 5)// strict equality = true
console.log( 5 !== '5')// strict inequality



                                //Truthy and Falsy
console.log(!!result)
console.log(!!0)// all numbers return truthy except from zero.
console.log("an empty string is", !!'')//empty string gives false.
console.log("a non empty string is", !!'volts')//a non empty string gives true
console.log("Is this a number", isNaN('12n'))
console.log("Are these equal?", 'franc' == 'franc')
console.log("Are these equal?", ' ' == ' ')
console.log("Are these equal?", []==[])
console.log("Are these equal", [1]==[1] ? 'yes' : 'no')
console.log("What is result status?", result >= 50 ? 'Promoted' : 'Repeat')
console.log("What is overall status?", result >= 70 ? 'Promoted' : result > 50 && result < 70 ? 'Reseat' : 'Repeat')
console.log("What is result grade?", result >= 70 ? 'A' : result >= 60 ? 'B' : result >= 50 ? 'C' : result >= 40 ? 'D' : 'F')

console.log((13).toString(2))
console.log((255).toString(16))
console.log((255).toString(8))
console.log(parseInt('110110100', 2))
console.log(parseInt('346', 8))
console.log(parseInt('cc', 16))
console.log(parseInt('ff', 16))