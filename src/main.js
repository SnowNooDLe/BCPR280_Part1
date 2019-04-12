/*jshint esversion: 6 */
// Model
class Game {
    constructor () {
        this.count = 0
        // 0 ~ 99
        this.generatedNum = Math.floor(Math.random() * 100)
        this.userInput = 0
        // special attributes for Q3 and Q4
        this.min = 0
        this.max = 99
    }

    generateNumberByGame (){
        return this.generatedNum
    }

    getCountValue (){
        return this.count
    }

    // Added while Q2 as I could see duplication process
    // convert string int int as we are receiving as String
    convertToInteger (value){
        return parseInt(value)
    }

    // special method for Q1 and Q2
    compareNumbers (input, randomNum){
        return null
    }

    // special method for Q3 and Q4
    readUsersResponse (input, randomNum){
        return null
    }
}

// Class for Q1
class Q1 extends Game {
    // Override
    compareNumbers (input, randomNum) {
        // Added after Test#4, Test#6
        // checking input is valid integer or not
        if (!Number.isInteger (input)) {
            return 'Invalid Try, please put integer value in to guess'
        }
        if (input > 99 || input < 0) {
            return 'Randomly generated number is between 0 and 99'
        }
        this.count++
        if (input < randomNum){
            return 'Try Higher'
        } else if (input > randomNum){
            return 'Try Lower'
        } else if (input === randomNum){
            return `You got it in ${this.count} trials!`
        }  else{
            // something gone wrong
            return 'Something is not right !'
        }
    }
}

// Class for Q2
class Q2 extends Game {
    // Override
    compareNumbers (input, randomNum){
        // checking input is valid integer or not reuse from Q1
        if (!Number.isInteger (input)){
            return 'Invalid Try, please put integer value in to guess'
        }
        if (input > 99 || input < 0){
            return 'Randomly generated number is between 0 and 99'
        }
        // as we are talking the range from target number, absolute number is perfect to use
        let difference = Math.abs (input - randomNum)
        
        this.count++
        if (difference >= 40){
            return 'COLD'
        } else if (difference >= 20 && difference <= 39){
            return 'COOL'
        } else if (difference >= 10 && difference <= 19){
            return 'WARM'
        } else if (difference >= 1 && difference <= 9){
            return 'HOT'
        } else if (difference === 0){
            return `You got it in ${this.count} trials!`
        } 
        else{
            return 'Something is not right !'
        }
    }
}

// Class for Q3
class Q3 extends Game {
    // Override
    readUsersResponse (input, randomNum) {
        let correctAnswer = ['Try Higher', 'Try Lower', 'Correct']
        if (!correctAnswer.includes(input)){
            return 'You put wrong response, must be either "Try Higher", "Try Lower" or "Correct" '
        }
        if (this.max <= this.min){
            return 'you are lying !!!!! I am so sad'
        }
        this.count++
        console.log('Range min is : ' + this.min)
        console.log('Range max is : ' + this.max)
        if (input === 'Try Higher'){
            this.min = randomNum
            // random number between this.min ~ this.max
            this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
            return this.generatedNum
        } else if (input === 'Try Lower'){
            this.max = randomNum
            this.generatedNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
            return this.generatedNum
        } else if (input === 'Correct'){
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
            if (this.disabled === 0){
                this.randomNum = this.game.generateNumberByGame ()
                console.log('User input is ' + this.txtInput)
                console.log('Generated number is ' + this.randomNum)
                this.intInput = this.game.convertToInteger (this.txtInput)
                this.result = this.game.compareNumbers (this.intInput, this.randomNum)
                this.count = this.game.getCountValue ()
                // When game is finished, Button will be disabled, need to be resetted
                if (this.result.startsWith ('You')){
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

// Controllers for Q3, Q4
var viewModel3 = {
    el: '#appendixTwoThree',
    data: {
        game: new Q3(),
        count: 1,
        txtInput: '',
        result: '',
        randomGuess: Math.floor(Math.random() * 100),
        disabled: 0
    },
    methods: {
        readUserInput: function () {
            if (this.disabled === 0){
                this.result = this.game.readUsersResponse (this.txtInput, this.randomGuess)
                this.randomGuess = this.game.generateNumberByGame ()
                this.count = this.game.getCountValue () + 1
                // When game is finished, Button will be disabled, need to be resetted
                if (this.txtInput === 'Correct'){
                    this.disabled = 1
                }
            }
            
        }
    }
}

var question3 = new Vue(viewModel3)