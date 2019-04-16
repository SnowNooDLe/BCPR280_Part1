// Class for Iteration 4
class Q4 extends Game {
// Because computer starts guess as soon as we run the program, so override the count for Q3 & Q4
constructor () {
super()
this.count = 1
// to change fixedMin,MaxForHot once program reached HOT
this.coolStatus = 0
this.warmStatus = 0
this.hotStatus = 0
// each list
this.triedNumbers = []
this.triedHotNumbers = []
}
// Override
readUsersResponse (input, randomNum) {
// checking user input is one of items in correctAnswer
// otherwise tell user to put the right input value
let correctAnswer = ['COLD', 'COOL', 'WARM', 'HOT', 'Correct']
if (!correctAnswer.includes(input)) {
    return 'You put wrong response, must be either "COLD", "COOL", "WARM", "HOT" or "Correct"'
}
// as soon as program gets into this step, count of the number of guesses
this.count++
console.log('Range min was : ' + this.min)
console.log('Range max was : ' + this.max)

if (input === 'COLD') {
    // just in case come back to COLD from any other step, reset the number
    this.coolStatus = 0
    this.warmStatus = 0
    this.hotStatus = 0
    // based on my pseudocode
    this.min = Math.max(randomNum - 50, 0)
    this.max = Math.min(randomNum + 50, 99)
    // random number between this.min ~ this.max
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    
    console.log('Range min is : ' + this.min)
    console.log('Range max is : ' + this.max)
    
    return this.generatedNum
} else if (input === 'COOL') {
    if (this.coolStatus === 0){
    // Hence number range is 0 ~ 99
    this.min = Math.max(randomNum - 39, 0)
    this.max = Math.min(randomNum + 39, 99)
    this.coolStatus = 1
    // reset
    this.warmStatus = 0
    this.hotStatus = 0
    }
    
    this.triedNumbers.push(randomNum)
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    
    while (this.triedNumbers.includes(this.generatedNum)){
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }

    console.log('Range min is : ' + this.min)
    console.log('Range max is : ' + this.max)
    
    return this.generatedNum
} else if (input === 'WARM') {
    if (this.warmStatus === 0){
    // Hence number range is 0 ~ 99
    this.min = Math.max(randomNum - 19, 0)
    this.max = Math.min(randomNum + 19, 99)
    this.warmStatus = 1
    // reset
    this.coolStatus = 0
    this.hotStatus = 0
    }

    this.triedNumbers.push(randomNum)
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    
    while (this.triedNumbers.includes(this.generatedNum)){
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }

    console.log('Range min is : ' + this.min)
    console.log('Range max is : ' + this.max)

    return this.generatedNum
} else if (input === 'HOT') {
    // no need reset for HOT as it program will either get right answer or be disappointed to user as user lied to program
    if (this.hotStatus === 0){
    // Hence number range is 0 ~ 99
    this.min = Math.max(randomNum - 9, 0)
    this.max = Math.min(randomNum + 9, 99)
    this.hotStatus = 1
    }

    this.triedHotNumbers.push(randomNum)
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min

    if (this.triedHotNumbers.length == (this.max - this.min)){
    // Program tested every possibilities but didnt get 'Correct' response which user lied to program
    console.log("BREAKING")
    return "YOU LIED TO ME"
    }

    // Check whether randomly generated number is in the list
    // if not there, return it as it's a new guess else keep generating until get new one
    while (this.triedHotNumbers.includes(this.generatedNum)){
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }

    console.log('Program gueses is ' + randomNum)
    console.log('Range min is : ' + this.min)
    console.log('Range max is : ' + this.max)
    console.log('List : ' + this.triedHotNumbers)

    return this.generatedNum
} else if (input === 'Correct') {
    // When input is Correct, program no need to try more but our program will still count + 1
    // so - 1 manually
    this.count--
    return `I got it in ${this.count} trials ! WOOHOO !!!`
} else {
    // debugging purpose but shouldnt see this at any stage
    return 'Something is not right ! '
    }
}
}