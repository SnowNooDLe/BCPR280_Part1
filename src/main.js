/* jshint esversion: 6 */
// Model
class Game {
    constructor () {
      this.count = 0
          // 0 ~ 99
      this.generatedNum = Math.floor(Math.random() * 100)
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
  
      // special method for Q1 and Q2
    compareNumbers (input, randomNum) {
      return null
    }
  
      // special method for Q3 and Q4
    readUsersResponse (input, randomNum) {
      return null
    }

    generateRandom(min, max) {
      return null
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
      console.log('Range min was : ' + this.min)
      console.log('Range max was : ' + this.max)
      if (input === 'Try Higher') {
        this.min = randomNum
              // random number between this.min ~ this.max
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        console.log('Range min is : ' + this.min)
        console.log('Range max is : ' + this.max)
        return this.generatedNum
      } else if (input === 'Try Lower') {
        this.max = randomNum
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
        console.log('Range min is : ' + this.min)
        console.log('Range max is : ' + this.max)
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
    this.triedCoolNumbers = []
    this.triedWarmNumbers = []
    this.triedHotNumbers = []
  }
    // Override
  readUsersResponse (input, randomNum) {
    let correctAnswer = ['COLD', 'COOL', 'WARM', 'HOT', 'Correct']
    if (!correctAnswer.includes(input)) {
      return 'You put wrong response, must be either "COLD", "COOL", "WARM", "HOT" or "Correct"'
    }
    if (this.max <= this.min) {
      return 'You are lying !!!!! I am so sad'
    }
    this.count++
    console.log('Range min was : ' + this.min)
    console.log('Range max was : ' + this.max)
    if (input === 'COLD') {
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
        this.min = Math.max(randomNum - 39, 0)
        this.max = Math.min(randomNum + 39, 99)
        this.coolStatus = 1
      }
      this.triedCoolNumbers.push(randomNum)
      this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      while (this.triedCoolNumbers.includes(this.generatedNum)){
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      }
      console.log('Range min is : ' + this.min)
      console.log('Range max is : ' + this.max)
      return this.generatedNum
    } else if (input === 'WARM') {
      if (this.warmStatus === 0){
        this.min = Math.max(randomNum - 19, 0)
        this.max = Math.min(randomNum + 19, 99)
        this.warmStatus = 1
      }
      this.triedWarmNumbers.push(randomNum)
      this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      while (this.triedWarmNumbers.includes(this.generatedNum)){
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      }
      console.log('Range min is : ' + this.min)
      console.log('Range max is : ' + this.max)
      return this.generatedNum
    } else if (input === 'HOT') {
      if (this.hotStatus === 0){
        this.min = Math.max(randomNum - 9, 0)
        this.max = Math.min(randomNum + 9, 99)
        this.hotStatus = 1
      }

      this.triedHotNumbers.push(randomNum)
      this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      if (this.triedHotNumbers.length == (this.max - this.min)){
        console.log("BREAKING")
        return "YOU LIED TO ME"
      }
      while (this.triedHotNumbers.includes(this.generatedNum)){
        this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
      }
      console.log('Program gueses is ' + randomNum)
      console.log('Range min is : ' + this.min)
      console.log('Range max is : ' + this.max)
      console.log('List : ' + this.triedHotNumbers)

      return this.generatedNum
    } else if (input === 'Correct') {
      this.count--
      return `I got it in ${this.count} trials ! WOOHOO !!!`
    } else {
      return 'Something is not right ! '
    }
  }
}
  
  // Controllers
  var viewModel = {
    el: '#appendixTwoOne',
    data: {
      game: new Q1(),
      randomNum: 0,
      count: 0,
      txtInput: '',
      result: '',
      intInput: 0,
      disabled: 0
    },
    methods: {
      compareNumbers: function () {
        if (this.disabled === 0) {
          this.randomNum = this.game.generateNumberByGame()
          console.log('User input is ' + this.txtInput)
          console.log('Generated number is ' + this.randomNum)
          this.intInput = this.game.convertToInteger(this.txtInput)
          this.result = this.game.compareNumbers(this.intInput, this.randomNum)
          this.count = this.game.getCountValue()
                  // When game is finished, Button will be disabled, need to be resetted
          if (this.result.startsWith('You')) {
            this.disabled = 1
          }
        }
      }
    }
  }
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  // create object for Question 1
  var question1 = new Vue(viewModel)
  
  // Controller for Q2
  viewModel2 = JSON.parse(JSON.stringify(viewModel))
  viewModel2.methods = {
    ...viewModel.methods
  }
  viewModel2.el = '#appendixTwoTwo'
  viewModel2.data.game = new Q2()
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  var question2 = new Vue(viewModel2)
  
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  // Controllers for Q3
  var firstGuess = new Q3()
  var viewModel3 = {
    el: '#appendixTwoThree',
    data: {
      game: firstGuess,
      count: firstGuess.getCountValue(),
      txtInput: '',
      result: firstGuess.generateNumberByGame(),
      randomGuess: firstGuess.generateNumberByGame(),
      disabled: 0
    },
    methods: {
      readUserInput: function () {
        if (this.disabled === 0) {
          console.log(this.randomGuess)
          this.result = this.game.readUsersResponse(this.txtInput, this.randomGuess)
          this.randomGuess = this.game.generateNumberByGame()
          this.count = this.game.getCountValue()
                  // When game is finished, Button will be disabled, need to be resetted
          if (this.txtInput === 'Correct' || this.result === 'YOU LIED TO ME') {
            this.disabled = 1
          }
        }
      }
    }
  }
  
  var question3 = new Vue(viewModel3)

  // Controller for Q4
  var firstGuess = new Q4()
  viewModel4 = JSON.parse(JSON.stringify(viewModel3))
  viewModel4.methods = {
    ...viewModel3.methods
  }
  viewModel4.el = '#appendixTwoFour'
  viewModel4.data.game = firstGuess
  // viewModel4.data.result = firstGuess.generateNumberByGame()
  // viewModel4.data.randomGuess = firstGuess.generateNumberByGame()
  // Testing purpose
  viewModel4.data.result = 2
  viewModel4.data.randomGuess = 2
  var question4 = new Vue(viewModel4)
  