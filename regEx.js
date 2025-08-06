//Regular Expression (RegEx) define a search pattern that can be used to search for things in a string.

// Example 1
/* let myString = "Hello World!"
let myRegex = /what/
let result = myRegex.test(myString)
console.log(result) */

//Example 2
/* let waldoIsHiding = "Somewhere Waldo is hiding in this text."
let waldoRegex = /Waldo/
let waldoResult = waldoRegex.test(waldoIsHiding)
console.log(waldoResult) */

//Example 3 -- Piping
/* let petString = "James has a pet cat"
let petRegex = /dog|pig|hen/
let petResult = petRegex.test(petString)
console.log(petResult) */

//Example 4 -- i flag used for ignoring case
/* let myString = "freeCodeCamp"
let fccRegex = /freecodecamp/i //i help
let fccRegexResult = fccRegex.test(myString)
console.log(fccRegexResult) */

//Example 5 -- extracting match result
/* let extractStr = "Extract the word 'coding' from this string."
let codingRegex = /coding/
let codingRegexResult = extractStr.match(codingRegex)
console.log(codingRegexResult) */

//Example 6 -- using the g flag to find every single occurrence
/* let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
let ourResult = testStr.match(ourRegex)
console.log(ourResult) */

//Example 7 -- using the g flag and i flag together
/* let twinkleStar = "Twinkle, twinkle, little star!"
let twinkleRegex = /twinkle/ig
let twinkleResult = twinkleStar.match(twinkleRegex)
console.log(twinkleResult) */

//Example 8 -- using the wildcard period (.) to match strings
/* let humStr = "I'll hum a song!"
let hugStr = "Bear hug!"
let huRegex = /hu./
let humResult = humStr.match(huRegex)
let hugResult = humStr.match(huRegex)
console.log(humResult)
console.log(hugResult) */

//Example 9 -- using the wildcard period (.) again
/* let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /.un/
let result = unRegex.test(exampleStr)
console.log(result) */


//Matching single characters with multiple possibilities
// let bgRegex = /b[aiu]g/
// Example 10
/* 
let quoteSample = "Beware of bugs in the above code; I have only proved it correct once."
let vowelRegex = /[aeiou]/ig
let result = quoteSample.match(vowelRegex)
console.log(result) */

//Match letters from the alphabet : the [a-z] used to match letters from alphabet a to z. rather than writing all
// Example 11
/* 
let alphabetSample = "The quick brown fox jumps over the lazy dog."
let alphabetRegex = /[a-z]/ig
let alphabetResult = alphabetSample.match(alphabetRegex)
console.log(alphabetResult) */

//Match Numbers and Letters of the alphabet
// Example 12
/*
let numAlpSample = "Blueberry 3.141592653s are delicious"
let myRegex = /[1-9a-z]/ig
let result = numAlpSample.match(myRegex)
console.log(result) */

//Match Single Characters Not Specified i.e match single characters you do not want to match(negated character sets) we used the Caret(^). In this example we have matched all numbers and vowel sounds.
// Example 13
/* let negatedSample = "3 blind mice"
let negatedRegex = /[^0-9aeiou]/ig
let result = negatedSample.match(negatedRegex)
console.log(result) */

//Match Character that occurs one or more time. To match a character that occur one or more than one times, we use the plus (+) character. In thi example we have matched characters that occur one or more than one times
// Example 14
/* let difficultSpelling = "Mississippi"
let spellingRegex = /[s+]/ig
let spellingResult = difficultSpelling.match(spellingRegex)
console.log(spellingResult) */

//Match Character that occurs zero or more times. To match a character that occur zero or more times, we use the star (*) character.
//Example 15
/* let soccerWorld = "gooooooal!"
let gPhrase = "gut feeling" // Returns g
let oPhrase = "over the moon" // Returns null
let goRegex = /go*/
/* let result = soccerWorld.match(goRegex)
console.log(result) */


//Finding Characters with lazy matching. Greedy and Lazy Matching. A greedy match finds the longest possible path of a string that fit the regex patterns and returns it as a match. A lazy match finds the smallest possible part of a string and returns that.
// Note: Regex default to greedy match.
// Example 16
/* let string = "titanic"
let stringRegex = /t[a-z]*?i/ // Greedy matching. if we add a question mark(?) it default to lazy matching.
let resultStringRegex = string.match(stringRegex)
console.log(resultStringRegex) */

//Example 17
/* let text = "<h1>Winter is coming!</h1>"
let myRegex = /<.*?>/
let result = text.match(myRegex)
console.log(result) */

//Finding One or More Criminals in a Hunt
//Example 18
let crowd = "P1P2P3P4P5P6CCCP7P8P9"

let reCriminals = /C+/
let matchedCriminals = crowd.match(reCriminals)
console.log(matchedCriminals)

//Matching Beginning String Pattersns