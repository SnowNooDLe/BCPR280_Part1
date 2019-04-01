import Vue from 'vue';

// Model
class Game {
    
    count = 0
    generatedNum = Math.floor(Math.random() * 100)
    constructor () {
    }

    generateNumberByGame(){
        return this.generatedNum
    }
    // method for Q1
    compareNumbersQ1(userInput, randomNum){
        // Added after Test#4, checking empty string for guessing step
        if (userInput === ''){
            return "Invalid Try, please put value in"
        }
        if (userInput > 99 || userInput < 0){
            return "Randomly generated number is between 0 and 99"
        }
        this.count++
        if (userInput < randomNum){
            return "Try Higher"
        } else if (userInput > randomNum){
            return "Try Lower"
        } else if (userInput == randomNum){
            return `You got it in ${this.count} trials!`
        }  else{
            // Added after Test#6 as it was increasing, so decrease to not to count when its
            // not an integer input as its not a right comparison with randomly generated number
            this.count--
            return "Plz type number to compare !"
        }
    }

    getCountValue(){
        return this.count
    }

}






