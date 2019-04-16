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