describe('Testing Game Three', () => {
  let gameThreeTest
  beforeEach(() => {
    gameThreeTest = new Q3()
    gameThreeTest.generatedNum = 30
  })
  // Test #1
  describe('Test #1 "To determine if the program response proper error message', () => {
    var userInput = 'eheheheh'
    it('Should print "ErrorMessage" ', () => {
      expect(gameThreeTest.readUsersResponse(userInput, gameThreeTest.generatedNum)).toBe('You put wrong response, must be either "Try Higher", "Try Lower" or "Correct"')
    })
  })
  // Test #2
  describe('Test #2 "To determine if the program continues guess game without warning message with "Try Higher" user input', () => {
    var userInput = 'Try Higher'
    it('Should print any number between 0 and 99', () => {
      expect(gameThreeTest.readUsersResponse(userInput, gameThreeTest.generatedNum)).toMatch(/\d{1,}/)
    })
  })
  // Test #3
  describe('Test #3 "To determine if the program continues guess game without warning message with "Try Lower" user input', () => {
    var userInput = 'Try Lower'
    it('Should print any number between 0 and 99', () => {
      expect(gameThreeTest.readUsersResponse(userInput, gameThreeTest.generatedNum)).toMatch(/\d{1,}/)
    })
  })
  // Test #4
  describe('Test #4 "To determine if the program complains about user being liar ', () => {
    var userInput = 'Try Higher'
    var gameThreeTest = new Q3()
    gameThreeTest.min = 20
    gameThreeTest.max = 19
    it('Should print "You are lying !!!!! I am so sad"', () => {
      expect(gameThreeTest.readUsersResponse(userInput, gameThreeTest.generatedNum)).toBe('You are lying !!!!! I am so sad')
    })
  })
  // Test #5
  describe('Test #5 "To determin if the program correctly guesses users number and happy about it', () => {
    var userInput = 'Correct'
    it('Should print "I got it in 1 trials ! WOOHOO !!!"', () => {
      expect(gameThreeTest.readUsersResponse(userInput, gameThreeTest.generatedNum)).toBe('I got it in 1 trials ! WOOHOO !!!')
    })
  })
})