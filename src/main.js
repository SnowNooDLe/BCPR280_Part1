/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
// Used this Model for first four iterations
class Game {
  constructor () {
    this.count = 0
          // 0 ~ 99
    this.generatedNum = Math.floor(Math.random() * 100)
    // debug purpose for Q4
      // this.generatedNum = 1
          // special attributes for Q3 and Q4
    this.min = 0
    this.max = 99
  }

  generateNumberByGame () {
    return this.generatedNum
  }

  getCountValue () {
    return this.count
  }

      // Added while Q2 as I could see duplication process
      // convert string int int as we are receiving as String
  convertToInteger (value) {
    return parseInt(value)
  }
  }

// Class for Iteration 1
class Q1 extends Game {
    // Override
  compareNumbers (input, randomNum) {
        // Added after Test#4, Test#6
        // checking input is valid integer or not
    if (!Number.isInteger(input)) {
      return 'Invalid Try, please put integer value in to guess'
    }
    if (input > 99 || input < 0) {
      return 'Randomly generated number is between 0 and 99'
    }
    this.count++
    if (input < randomNum) {
      return 'Try Higher'
    } else if (input > randomNum) {
      return 'Try Lower'
    } else if (input === randomNum) {
      return `You got it in ${this.count} trials!`
    } else {
            // something gone wrong
      return 'Something is not right !'
    }
  }
}

// Class for Iteration 2
class Q2 extends Game {
    // Override
  compareNumbers (input, randomNum) {
        // checking input is valid integer or not reuse from Q1
    if (!Number.isInteger(input)) {
      return 'Invalid Try, please put integer value in to guess'
    }
    if (input > 99 || input < 0) {
      return 'Randomly generated number is between 0 and 99'
    }
        // as we are talking the range from target number, absolute number is perfect to use
    let difference = Math.abs(input - randomNum)

    this.count++
    if (difference >= 40) {
      return 'COLD'
    } else if (difference >= 20 && difference <= 39) {
      return 'COOL'
    } else if (difference >= 10 && difference <= 19) {
      return 'WARM'
    } else if (difference >= 1 && difference <= 9) {
      return 'HOT'
    } else if (difference === 0) {
      return `You got it in ${this.count} trials!`
    } else {
      return 'Something is not right !'
    }
  }
}

// Class for Iteration 3
class Q3 extends Game {
    // Because computer starts guess as soon as we run the program, so override the count for Q3 & Q4
  constructor () {
    super()
    this.count = 1
  }
    // Override
  readUsersResponse (input, randomNum) {
    let correctAnswer = ['Try Higher', 'Try Lower', 'Correct']

    if (!correctAnswer.includes(input)) {
      return 'You put wrong response, must be either "Try Higher", "Try Lower" or "Correct"'
    }

    if (this.max <= this.min) {
      return 'You are lying !!!!! I am so sad'
    }

    this.count++

    if (input === 'Try Higher') {
      this.min = randomNum
      // random number between this.min ~ this.max
      this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      return this.generatedNum
    } else if (input === 'Try Lower') {
      this.max = randomNum
      this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      return this.generatedNum
    } else if (input === 'Correct') {
      this.count--
      return `I got it in ${this.count} trials ! WOOHOO !!!`
    } else {
      return 'Something is not right ! '
    }
  }
}

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
  
    whenResponseIsCold (randomNum) {
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
  
    whenResponseIsCool (randomNum) {
      if (this.coolStatus === 0) {
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
  
      while (this.triedNumbers.includes(this.generatedNum)) {
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      }
  
      return this.generatedNum
    }
  
    whenResponseIsWarm (randomNum) {
      if (this.warmStatus === 0) {
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
  
      while (this.triedNumbers.includes(this.generatedNum)) {
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      }
  
      return this.generatedNum
    }
  
    whenResponseIsHot (randomNum) {
      // no need reset for HOT as it program will either get right answer or be disappointed to user as user lied to program
      if (this.hotStatus === 0) {
          // Hence number range is 0 ~ 99
        this.min = Math.max(randomNum - 9, 0)
        this.max = Math.min(randomNum + 9, 99)
        this.hotStatus = 1
      }
      this.triedHotNumbers.push(randomNum)
      this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  
      if (this.triedHotNumbers.length === (this.max - this.min) + 1) {
          // Program tested every possibilities but didnt get 'Correct' response which user lied to program
        return 'YOU LIED TO ME'
      }
      // Check whether randomly generated number is in the list
      // if not there, return it as it's a new guess else keep generating until get new one
      while (this.triedHotNumbers.includes(this.generatedNum)) {
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
