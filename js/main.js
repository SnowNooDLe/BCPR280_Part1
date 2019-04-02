// Model
class Game {
    
    count = 0
    generatedNum = Math.floor(Math.random() * 100)
    userInput = 0
    constructor () {
    }

    generateNumberByGame(){
        return this.generatedNum
    }

    getCountValue(){
        return this.count
    }
}

// Class for Q1
class Q1 extends Game {
    compareNumbersQ1(input, randomNum){
        // Added after Test#4, Test#6
        // checking input is valid integer or not
        this.userInput = parseInt(input)
        if (!Number.isInteger(this.userInput)){
            return "Invalid Try, please put integer value in to guess"
        }
        if (this.userInput > 99 || this.userInput < 0){
            return "Randomly generated number is between 0 and 99"
        }
        this.count++
        if (this.userInput < randomNum){
            return "Try Higher"
        } else if (this.userInput > randomNum){
            return "Try Lower"
        } else if (this.userInput == randomNum){
            return `You got it in ${this.count} trials!`
        }  else{
            // something gone wrong
            return "Something is not right !"
        }
    }
}


// Controller
var question1 = new Vue({
    el:'#appendixTwoOne', 
    data: {
        game: new Q1(),
        randomNum: 0,
        count: 0,
        txtInput: '',
        result: ''
    },
    methods: {
        compareNumbers: function () {
            this.randomNum = this.game.generateNumberByGame()
            console.log("User input is " + this.txtInput)
            console.log("Generated number is " + this.randomNum)
            this.result = this.game.compareNumbersQ1(this.txtInput, this.randomNum)
            this.count = this.game.getCountValue()
        }
    }
});







