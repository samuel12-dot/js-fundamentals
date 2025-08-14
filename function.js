//Function declaration - Named function

//No parameter
function handleGreeting() {
    return `Hello, good morning!`
}

console.log(handleGreeting())

//With parameter
function getDetails(name = 'dear', age = 0) {
    return `Your name is ${name}, you were born in ${new Date().getFullYear() - age}`
}

console.log(getDetails('Alinko', 50))
console.log(getDetails('Anabel', ))
console.log(getDetails())

//Function expression

//No parameter
const handleAddition = function(){
    return 3 + 7
}

console.log(handleAddition(5, 8))

//With a parameter
const handleAdditions = function(x, y){
    return 3 + 7
}

console.log(handleAdditions(5, 8))

//Arrow function
const handleSub = (x,y) => {
    return x - y
}
console.log(handleSub(50, 19))

//No parameter
const multiply = () => 2 * 6
console.log(multiply())

//With parameter
const multiplies = (num) => {
    2 * num
}
console.log(multiplies(3))


const randMult = (num) => {
    let rand = Math.random()*50
    return parseInt(num * rand)
}
console.log(randMult(10))

setTimeout(function(){
    console.log('We are here in 5 seconds')
})

//Immediately invoked function expression(IIFE)
/* (function callMyname(){
    console.log('Hi francis')
}) */


//Constructor functions

function Student(name, school, matricNo, state){
    this.name = name
    this.school = school
    this.matricNo = matricNo
    this.state = state
    this.intro = function(){
        return `Hello my name is ${this.name}. I am from this ${state}.`
    }
}

const user1 = new Student('Francis',' Nile',' 20231602',' Lagos')