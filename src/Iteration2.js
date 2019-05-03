/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* jshint esversion: 6 */
// Q2 class for Iteration 5. splitted out
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
