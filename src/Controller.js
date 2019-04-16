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
viewModel4.data.result = firstGuess.generateNumberByGame()
viewModel4.data.randomGuess = firstGuess.generateNumberByGame()
var question4 = new Vue(viewModel4)