//Exercise One
const story = "There was once an employee named Dwight. Dwigt was not very smart, but he was loyal. I could have promoted dwight but I did not."

const regex = /Dwigh?t/gi
const result = story.replace(regex, "Samuel")
console.log(result)

//Exercise Two
const pets = [
    "cat: Smith, Meowsalot",
    "young dog: Jones, Barksalot",
    "rabbit: Doe, Fluffy"
]