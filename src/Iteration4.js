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
// this.triedHotNumbers = [0,2,4,5,6,7,8,9,10]
}

whenResponseIsCold (randomNum){
    // just in case come back to COLD from any other step, reset the number
    this.coolStatus = 0
    this.warmStatus = 0
    this.hotStatus = 0
    // based on my pseudocode
    this.min = Math.max(randomNum - 50, 0)
    this.max = Math.min(randomNum + 50, 99)
    // random number between this.min ~ this.max
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    
    return this.generatedNum
}

whenResponseIsCool (randomNum){
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
    
    return this.generatedNum
}

whenResponseIsWarm (randomNum) {
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

    return this.generatedNum
}

whenResponseIsHot(randomNum){
    // no need reset for HOT as it program will either get right answer or be disappointed to user as user lied to program
    if (this.hotStatus === 0){
        // Hence number range is 0 ~ 99
        // console.log("Status is : " + this.hotStatus)
        this.min = Math.max(randomNum - 9, 0)
        this.max = Math.min(randomNum + 9, 99)
        this.hotStatus = 1
    }
    this.triedHotNumbers.push(randomNum)
    this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min

    if (this.triedHotNumbers.length == (this.max - this.min) + 1){
        // Program tested every possibilities but didnt get 'Correct' response which user lied to program
        return "YOU LIED TO ME"
    }
    // Check whether randomly generated number is in the list
    // if not there, return it as it's a new guess else keep generating until get new one
    while (this.triedHotNumbers.includes(this.generatedNum)){
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    }
    return this.generatedNum
}

readUsersResponse (input, randomNum) {
// checking user input is one of items in correctAnswer
// otherwise tell user to put the right input value
let correctAnswer = ['COLD', 'COOL', 'WARM', 'HOT', 'Correct']
if (!correctAnswer.includes(input)) {
    return 'You put wrong response, must be either "COLD", "COOL", "WARM", "HOT" or "Correct"'
}
// as soon as program gets into this step, count of the number of guesses
this.count++

if (input === 'COLD') {
    return this.whenResponseIsCold(randomNum)
} else if (input === 'COOL') {
    return this.whenResponseIsCool(randomNum)
} else if (input === 'WARM') {
    return this.whenResponseIsWarm(randomNum)
} else if (input === 'HOT') {
    return this.whenResponseIsHot(randomNum)
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