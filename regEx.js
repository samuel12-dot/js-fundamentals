//Regular Expression (RegEx) define a search pattern that can be used to search for things in a string.

// Example 1
let myString = "Hello World!"
let Regex = /what/
let result = Regex.test(myString)
console.log(result)

//Example 2
let waldoIsHiding = "Somewhere Waldo is hiding in this text."
let waldoRegex = /Waldo/
let waldoResult = waldoRegex.test(waldoIsHiding)
console.log(waldoResult)

//Example 3 -- Piping
let petString = "James has a pet cat"
let petRegex = /dog|pig|hen/
let petResult = petRegex.test(petString)
console.log(petResult)

//Example 4 -- i flag used for ignoring case
let string = "freeCodeCamp"
let fccRegex = /freecodecamp/i //i help
let fccRegexResult = fccRegex.test(myString)
console.log(fccRegexResult)

//Example 5 -- extracting match result
let extractStr = "Extract the word 'coding' from this string."
let codingRegex = /coding/
let codingRegexResult = extractStr.match(codingRegex)
console.log(codingRegexResult)

//Example 6 -- using the g flag to find every single occurrence
let testStr = "Repeat, Repeat, Repeat"
let ourRegex = /Repeat/g
let ourResult = testStr.match(ourRegex)
console.log(ourResult)

//Example 7 -- using the g flag and i flag together
let twinkleStar = "Twinkle, twinkle, little star!"
let twinkleRegex = /twinkle/ig
let twinkleResult = twinkleStar.match(twinkleRegex)
console.log(twinkleResult)

//Example 8 -- using the wildcard period (.) to match strings
let humStr = "I'll hum a song!"
let hugStr = "Bear hug!"
let huRegex = /hu./
let humResult = humStr.match(huRegex)
let hugResult = humStr.match(huRegex)
console.log(humResult)
console.log(hugResult)

//Example 9 -- using the wildcard period (.) again
let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /.un/
let fun = unRegex.test(exampleStr)
console.log(fun)


//Matching single characters with multiple possibilities
// let bgRegex = /b[aiu]g/
// Example 10

let quoteSample = "Beware of bugs in the above code; I have only proved it correct once."
let vowelRegex = /[aeiou]/ig
let quoteResult = quoteSample.match(vowelRegex)
console.log(quoteResult)

//Match letters from the alphabet : the [a-z] used to match letters from alphabet a to z. rather than writing all
// Example 11

let alphabetSample = "The quick brown fox jumps over the lazy dog."
let alphabetRegex = /[a-z]/ig
let alphabetResult = alphabetSample.match(alphabetRegex)
console.log(alphabetResult)

//Match Numbers and Letters of the alphabet
// Example 12

let numAlpSample = "Blueberry 3.141592653s are delicious"
let myRegex = /[1-9a-z]/ig
let numResult = numAlpSample.match(myRegex)
console.log(numResult)

//Match Single Characters Not Specified i.e match single characters you do not want to match(negated character sets) we used the Caret(^). In this example we have matched all numbers and vowel sounds.
// Example 13
let negatedSample = "3 blind mice"
let negatedRegex = /[^0-9aeiou]/ig
let negatedResult = negatedSample.match(negatedRegex)
console.log(negatedResult)

//Match Character that occurs one or more time. To match a character that occur one or more than one times, we use the plus (+) character. In this example we have matched characters that occur one or more than one times
// Example 14
let difficultSpelling = "Mississippi"
let spellingRegex = /[s+]/ig
let spellingResult = difficultSpelling.match(spellingRegex)
console.log(spellingResult)

//Match Character that occurs zero or more times. To match a character that occur zero or more times, we use the star (*) character.
//Example 15
let soccerWorld = "gooooooal!"
let gPhrase = "gut feeling" // Returns g
let oPhrase = "over the moon" // Returns null
let goRegex = /go*/
let goResult = soccerWorld.match(goRegex)
console.log(goResult)


//Finding Characters with lazy matching. Greedy and Lazy Matching. A greedy match finds the longest possible path of a string that fit the regex patterns and returns it as a match. A lazy match finds the smallest possible part of a string and returns that.
// Note: Regex default to greedy match.
// Example 16
let stringT = "titanic"
let stringRegex = /t[a-z]*?i/ // Greedy matching. if we add a question mark(?) it default to lazy matching.
let resultStringRegex = stringT.match(stringRegex)
console.log(resultStringRegex)

//Example 17
let text = "<h1>Winter is coming!</h1>"
let textRegex = /<.*?>/
let textResult = text.match(textRegex)
console.log(textResult)

//Finding One or More Criminals in a Hunt
//Example 18
let crowd = "P1P2P3P4P5P6CCCP7P8P9"
let reCriminals = /C+/
let matchedCriminals = crowd.match(reCriminals)
console.log(matchedCriminals)

//Matching Beginning String Patterns: The caret(^) alone can be used to match the beginning of a string alone
//Example 19
let rickyAndCal = "Cal and Ricky both  like racing."
let calRegex = /^Cal/
let rickyResult = calRegex.test(rickyAndCal)
console.log(rickyResult)

//Matching Ending String Patterns>. The dollar($) alone can be used to match the ending of a string alone.
//Example 20
let caboose = "The last car on caboose a train is the"
let lastRegex = /caboose$/
let cabooseResult = lastRegex.test(caboose)
console.log(cabooseResult)

//Matching all letters and numbers. \w is a shorthand way of matching any letter, number or underscore. 
// Note: lowercase w(w) is used for getting numbers and letters
//Example 21
let quotesSample = "The five boxing wizards jump quickly"
let alphabetRegexV2 = /\w/g
let quotesResult = quoteSample.match(alphabetRegexV2).length
console.log(quotesResult)

//Matching Everything But Letters and Numbers. /W is a shorthand way for matching everything but letters and numbers. 
// Note: uppercase w(W) is used for getting everything but letters and numbers.
//Example 22
let quoteSampleTw0 = "The five boxing wizards jump quickly"
let alphabetRegexV2Two = /\W/g
let quotesResultTwo = quoteSample.match(alphabetRegexV2).length
console.log(quotesResultTwo)

//Match All Numbers. The shorthand way for matching all numbers is \d
//Example 23
//Note: lowercase d(d) is used for getting all numbers.
let numString = "Your sandwich will be $5.00"
let numRegex = /\d/g
let numResultOne = numString.match(numRegex).length
console.log(numResultOne)

//Matching Non-numbers. The shorthand way for matching all non-number is uppercase d(D)
//Example 24
//Note. uppercase d(D) is used for getting non-numbers
let numStringTwo = "Your sandwich will be $5.00"
let noNumRegex = /\D/g
let noNumResult = numStringTwo.match(noNumRegex).length
console.log(noNumResult)

//Restricting possible Usernames.
/* Three requirements for the username
1. If there are numbers, they must be at the end.
2. Letters can be lowercase and uppercase.
3. At least two characters long. Two-letter names can't have numbers. */

//Example 25
let username = "JackOfAllTrades"
let userCheck = /[A-Za-z]{2,}\d*$/g
let userResult = username.match(userCheck)
console.log(userResult)
                                        
                                               //Matching all Whitespaces.
//Matching all whitespaces. The shorthand space for matching all whitespaces is (\s). (\s) can be used to match a space, a character turn, a tab, a form field, and a newline character.

//Example 26
let sample = "Whitespaces is important in separating words"
let countWhiteSpace = /\s/g
let countResult = sample.match(countWhiteSpace)
console.log(countResult)


                                                //Matching all Non-Whitespace.
//Matching all Non-Whitespace. The shorthand space for matching all whitespaces is uppercase s(\S) (\S). (\S) can be used to match a non-whitespace.

//Example 27
let sampleSpace = "Whitespaces is important in separating words"
let countWhiteSpaceAgain = /\S/g
let sampleSpaceResult = sampleSpace.match(countWhiteSpaceAgain)
console.log(sampleSpaceResult)


                                                //Specify Upper and Lower Number of Matches
//Matching Upper and Lower Number of matches. We can specify the Upper and Lower number of matches using quantity specifier ({}). Quantity specifiers are used with curly brackets.

//Example 28
let ohStr = "Ohhh no"
let ohRegex = /Oh{3,6} no/
let ohResult = ohRegex.test(ohStr)
console.log(ohResult)

                                                //Specify only Lower Number of Matches
//Matching only Lower Number of matches. We can specify only the Lower number of matches using  the letter and quantity specifier ({}). Quantity specifiers are used with curly brackets. e.g /z{3,}/

//Example 29

let ohNumStr = "Hazzzzah"
let ohRegexNum = /z{2,6}/
let ohRegexNumResult = ohRegexNum.test(ohNumStr)
console.log(ohRegexNumResult)

                                                //Specify Exact Number of Matches
//Matching Exact Number of matches. We can use quantity specifiers to specify the exact number of matches instead of the lower and upper bound. Quantity specifiers are used with curly brackets. E.g if we want to search for Timmmmber with exactly four m. we can use "Tim{4}ber"

//Example 30
let timStr = "Timmmmber"
let timRegex = /Tim{4}ber/
let timResult = timRegex.test(timStr)
console.log(timResult)



                                                //Check for All or None
//We can specify the possible existence of an element using the question mark(?). It checks for zero or one of the preceding element.

//Example 31
let favWord = "favorite"
let favRegex = /favou?rite/
let favResult = favRegex.test(favWord)
console.log(favResult)

                                                //Positive and Negative Lookahead
//Lookahead in Javascript are patterns in javascript that tells javascript to lookahead in your strings to check for patterns further along. It can be useful when we want to search for multiple patterns over the same string. There are positive Lookaheads and negative Lookaheads. positive lookaheads are represented using (?=(letter)) and negative lookaheads are represented using (?!(letter))

//Note: A typical use of lookaheads is to check two or more patterns in one string.

//Example 32
let quit = "qu"
let noquit = "qt"

let quRegex = /q(?=u)/
let qRegex = /q(?!u)/
let qResult = noquit.match(qRegex)
console.log(qResult)

//Typical example of lookaheads. we will use lookaheads to match passwords that are greater than 5 characters and contains two consecutive digits.

let sampleWord = "stronaaut11"
let pwRegex = /(?=\w{5})(?=\D*\d{2})/
let pwResult = pwRegex.test(sampleWord)
console.log(pwResult)


                                        //Reuse Patterns Using Capture Groups
//We can group things we are searching for in a regex using parenthesis

//Example 1 
let repeatStr = "regex"
let repeatRegex = /(\w+)\s\1/
let repeatResult = repeatRegex.test(repeatStr) // Returns true
console.log(repeatResult)

//Example 2
let repeatNum = "12 12 12"
let regex = /^(\d+)\s\1\s\1$/
let repeatNumResult = regex.test(repeatNum)
console.log(repeatNumResult)


                                        //Use Capture Groups to Search and Replace
//We can search and replace text on a string using the replace function on a string.
//The input for replace is first the regex pattern you want to search for and the second is the string to replace the match and the function to do something.

let firstRegex = /(\w+)\s(w+)/
let firstResult = "Code Camp".replace(firstRegex, "$2 $1")
console.log(firstResult)

//Example 1
let wrongText = "The sky is silver."
let silverRegex = /silver/
let silverResult = wrongText.replace(silverRegex, "Yellow")
console.log(silverResult)

//Example 2
let huhText = "This sandwich is good"
let fixRegex = /good/
let replaceText = "okey-dokey"
let replaceResult = huhText.replace(fixRegex, replaceText)
console.log(replaceResult)

                                        //Remove Whitespace from start and end
let hello = "  Hello, World! "
let wsRegex = /^\s+|\s+$/g
let wsResult = hello.replace(wsRegex, '')
console.log(wsResult)
                                       //Matching all characters except from letters and numbers
//We use the [^a-zA-Z0-9] to match all characters except from letters and numbers.
//Example 1
let allCharacters = "How are, you. doing? let's go and, eat. if&you%"
let charactersRegex = /[^a-zA-Z0-9]/g
let charactersResult = allCharacters.test(charactersRegex)
console.log(charactersResult)