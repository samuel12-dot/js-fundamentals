//Question one

function calculateGrade(num) {
    if(num > 0 && num <= 100) {
        if(num >= 70) {
            return 'A'
        }
        else if(num >= 60) {
            return 'B'
        }
        else if(num >= 50) {
            return 'C'
        }
        else if(num >= 45) {
            return 'D'
        }
        else if(num > 45){
            return 'F'
        }
    }
    else {
        return 'You have enterd an Invalid Number'
    }
}

console.log(calculateGrade(50))