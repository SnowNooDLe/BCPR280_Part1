/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
// Q3 class for Iteration 5. splitted out
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
