describe('Testing Game Two', () => {
  let gameTwoTest
  beforeEach(() => {
    gameTwoTest = new Q2()
    gameTwoTest.generatedNum = 30
  })
  // Test #1
  describe('Test #1 "To determine if the program responses "COLD" ', () => {
    var userInput = 80
    it('Should print "COLD" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('COLD')
    })
  })
  // Test #2
  describe('Test #2 "To determine if the program responses "COOL" ', () => {
    var userInput = 60
    it('Should print "COOL" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('COOL')
    })
  })
  // Test #3
  describe('Test #3 "To determine if the program responses "WARM" ', () => {
    var userInput = 45
    it('Should print "WARM" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('WARM')
    })
  })
  // Test #4
  describe('Test #4 "To determine if the program responses "HOT" ', () => {
    var userInput = 31
    it('Should print "HOT" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('HOT')
    })
  })
  // Test #5
  describe('Test #5 "To determine if the program responses "You got it in n trials!" ', () => {
    var userInput = 30
    it('Should print "You got it in 1 trials!" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('You got it in 1 trials!')
    })
  })
  // Test #6
  describe('Test #6 "To determine if the program responses "Invalid Try, please put integer value" ', () => {
    var userInput = ''
    it('Should print "Invalid Try, please put integer value in to guess" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('Invalid Try, please put integer value in to guess')
    })
  })
  // Test #7
  describe('Test #7 "To determin if the program tells user that randomly generated number is between 0 and 99 ', () => {
    var userInput = 105
    it('Should print "Randomly generated number is between 0 and 99" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('Randomly generated number is between 0 and 99')
    })
  })
  // Test #8
  describe('Test #8 "To determine if the program responses "Invalid Try, please put integer value" ', () => {
    var userInput = 'abcd'
    it('Should print "Invalid Try, please put integer value in to guess" ', () => {
      expect(gameTwoTest.compareNumbersQ2(userInput, gameTwoTest.generatedNum)).toBe('Invalid Try, please put integer value in to guess')
    })
  })
})