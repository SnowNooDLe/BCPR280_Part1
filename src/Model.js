/* jshint esversion: 6 */
// Model
class Game {
    constructor () {
      this.count = 0
          // 0 ~ 99
    //   this.generatedNum = Math.floor(Math.random() * 100)
    // debug purpose for Q4
      this.generatedNum = 1
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