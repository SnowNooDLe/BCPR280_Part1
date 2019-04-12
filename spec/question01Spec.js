describe('Testing Game One', () => {
  let gameOneTest
  beforeEach(() => {
    gameOneTest = new Q1()
    gameOneTest.generatedNum = 30
  })
  // Test #1
  describe('Test #1 "To determine if the program responses "Try Lower" ', () => {
    var userInput = 50
    it('Should print "Try Lower" ', () => {
      expect(gameOneTest.compareNumbers(userInput, gameOneTest.generatedNum)).toBe('Try Lower')
    })
  })
  // Test #2
  describe('Test #2 "To determine if the program responses "Try Higher" ', () => {
    var userInput = 20
    it('Should print "Try Higher" ', () => {
      expect(gameOneTest.compareNumbers(userInput, gameOneTest.generatedNum)).toBe('Try Higher')
    })
  })
  // Test #3
  describe('Test #3 "To determine if the program responses "You got it in n trials!" ', () => {
    var userInput = 30
    it('Should print "You got it in 1 trials!" ', () => {
      expect(gameOneTest.compareNumbers(userInput, gameOneTest.generatedNum)).toBe('You got it in 1 trials!')
    })
  })
  // Test #4
  describe('Test #4 "To determine if the program responses "Invalid Try, please put integer value" ', () => {
    var userInput = ''
    it('Should print "Invalid Try, please put integer value in to guess" ', () => {
      expect(gameOneTest.compareNumbers(userInput, gameOneTest.generatedNum)).toBe('Invalid Try, please put integer value in to guess')
    })
  })
  // Test #5
  describe('Test #5 "To determin if the program tells user that randomly generated number is between 0 and 99 ', () => {
    var userInput = 105
    it('Should print "Randomly generated number is between 0 and 99" ', () => {
      expect(gameOneTest.compareNumbers(userInput, gameOneTest.generatedNum)).toBe('Randomly generated number is between 0 and 99')
    })
  })
  // Test #6
  describe('Test #6 "To determine if the program responses "Invalid Try, please put integer value" ', () => {
    var userInput = 'abcd'
    it('Should print "Invalid Try, please put integer value in to guess" ', () => {
      expect(gameOneTest.compareNumbers(userInput, gameOneTest.generatedNum)).toBe('Invalid Try, please put integer value in to guess')
    })
  })
})