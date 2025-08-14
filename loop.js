//For loops

const quote = "The quick brown fox jumps over the lazy dog".split(' ')

const arr = Array()

for(let counter = 0; counter < 5; counter++) {
    if(arr.length <= 3) {
        arr.unshift(counter)
    }
    console.log(arr)
}

for(let num = 1; num < 20; ++num) {

    //For loops in and if statement
    if(num % 2 == 0 && num % 3 == 0){
        arr.push('FizzBuzz')
    }
    else if(num % 2 == 0) {
        arr.push('Fizz')
    }
    else if(num % 3 == 0) {
        arr.push('Buzz')
    }
    else {
        arr.push(num)
    }

    //Ternary operator
/*     num % 3 == 0 && num % 2 == 0 ? arr.push('FizzBuzz'):
    num % 3 == 0 ? arr.push('Buzz') :
    num % 2 == 0 ? arr.push('Fizz') :
    arr.push(num) */
}

console.log(arr)

//Do-while loop
let number = 10
do {
    console.log("Added number", number)
    number--
}while(number > 0)

//While loop