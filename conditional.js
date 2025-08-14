let score = -1
let comment = ''

let displayRemark = score > 0 && score <= 100 ? score >= 70 ? 'Excellent' : score >= 50 ? 'Credit' : score >= 40 ? 'Pass' : 'Sorry Try again next time' : 'Invalid number'

/* if(score > 0 && score <= 100) {
    if (score >= 70) {
        comment = 'Excellent'
    }
    else if (score >= 50) {
        comment = 'Credit'
    }
    else if (score >= 40) {
        comment = 'Pass'
    }
    else {
        comment = 'Sorry, Try again next time'
    }
}
else {
    comment = 'Invalid score'
} */

//console.log('Remark', comment)

let displayNumber = 50 > 90 ? 'Valid' : 'Invalid!' 


/* let number = 50 > 90
if(number) {
    comment = 'Valid number'
}
else {
    comment = 'Invalid'
} */

console.log('Remark', displayRemark)

console.log("Valid number", displayNumber)

//Switch statement
let weather = 'sunny'

switch(weather) {
    case 'rain':
        comment = 'Take your umbrella and raincoat'
        break;
    case 'sunny':
        comment = 'Wear your sunglasses and a cap'
        break;
    case 'snowy':
        comment ='Take your shield'
        break;
    default:
        comment = ''
        break
}

console.log(comment)