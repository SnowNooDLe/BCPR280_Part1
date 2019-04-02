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

    // Added while Q2 as I could see duplication process
    // convert string int int as we are receiving as String
    convertToInteger(value){
        return parseInt(value)
    }
}

// Class for Q1
class Q1 extends Game {
    compareNumbersQ1(input, randomNum){
        // Added after Test#4, Test#6
        // checking input is valid integer or not
        if (!Number.isInteger(input)){
            return "Invalid Try, please put integer value in to guess"
        }
        if (input > 99 || input < 0){
            return "Randomly generated number is between 0 and 99"
        }
        this.count++
        if (input < randomNum){
            return "Try Higher"
        } else if (input > randomNum){
            return "Try Lower"
        } else if (input == randomNum){
            return `You got it in ${this.count} trials!`
        }  else{
            // something gone wrong
            return "Something is not right !"
        }
    }
}
// Controller for Q1
var question1 = new Vue({
    el:'#appendixTwoOne', 
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
            if (this.disabled == 0){
                this.randomNum = this.game.generateNumberByGame()
                console.log("User input is " + this.txtInput)
                console.log("Generated number is " + this.randomNum)
                this.intInput = this.game.convertToInteger(this.txtInput)
                this.result = this.game.compareNumbersQ1(this.intInput, this.randomNum)
                this.count = this.game.getCountValue()
                // When game is finished, Button will be disabled, need to be resetted
                if (this.result.startsWith("You")){
                    this.disabled = 1
                }
            }
            
        },
        // Starting new game
        resetGames: function () {
            console.log("It is pressed So I am resetting")
            this.disabled = 0
            this.game = new Q1()
            this.randomNum = 0
            this.count = 0
            this.txtInput = ''
            this.result = ''
            this.intInput = 0
        }
    }
});

// Class for Q2
class Q2 extends Game {
    compareNumbersQ2(input, randomNum){
        // checking input is valid integer or not reuse from Q1
        if (!Number.isInteger(input)){
            return "Invalid Try, please put integer value in to guess"
        }

        if (input > 99 || input < 0){
            return "Number is between 0 and 99"
        }
        // as we are talking the range from target number, absolute number is perfect to use
        let difference = Math.abs(input - randomNum)
        
        this.count++
        if (difference >= 40){
            return "COLD"
        } else if (difference >= 20 && difference <= 39){
            return "COOL"
        } else if (difference >= 10 && difference <= 19){
            return "WARM"
        } else if (difference >= 1 && difference <= 9){
            return "HOT"
        } else if (difference == 0){
            return `You got it in ${this.count} trials!`
        } 
        else{
            return "Something is not right !"
        }
    }
}
// Controller for Q2
var question2 = new Vue({
    el:'#appendixTwoTwo',
    data: {
        game: new Q2(),
        randomNum: 0,
        count: 0,
        txtInput: '',
        result: '',
        intInput: 0,
        disabled: 0
    },
    methods: {
        compareNumbers: function () {
            if (this.disabled == 0){
                this.randomNum = this.game.generateNumberByGame()
                console.log("User input is " + this.txtInput)
                console.log("Generated number is " + this.randomNum)
                this.intInput = this.game.convertToInteger(this.txtInput)
                this.result = this.game.compareNumbersQ2(this.intInput, this.randomNum)
                this.count = this.game.getCountValue()
                // When game is finished, Button will be disabled, need to be resetted
                if (this.result.startsWith("You")){
                    this.disabled = 1
                }
            }
            
        },
        // Starting new game
        resetGames: function () {
            console.log("It is pressed So I am resetting")
            this.disabled = 0
            this.game = new Q2()
            this.randomNum = 0
            this.count = 0
            this.txtInput = ''
            this.result = ''
            this.intInput = 0
        }
    }
});

