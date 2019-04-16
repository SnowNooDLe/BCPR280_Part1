describe('Testing Game Four', () => {
  let gameFourTest
  beforeEach(() => {
    gameFourTest = new Q4()
    gameFourTest.generatedNum = 30
  })
  // Test #1
  describe('Test #1 "To determine if the program response proper error message', () => {
    var userInput = 'eheheheh'
    it('Should print "ErrorMessage" ', () => {
      expect(gameFourTest.readUsersResponse(userInput, gameFourTest.generatedNum)).toBe('You put wrong response, must be either "COLD", "COOL", "WARM", "HOT" or "Correct"')
    })
  })
  // Test #2
  describe('Test #2 "To determine if the program continues guess game without warning message with "HOT" user input', () => {
    var userInput = 'HOT'
    it('Should print any number between 0 and 99', () => {
      expect(gameFourTest.readUsersResponse(userInput, gameFourTest.generatedNum)).toMatch(/\d{1,}/)
    })
  })
  // Test #3
  describe('Test #3 "To determine if the program continues guess game without warning message with "WARM" user input', () => {
    var userInput = 'WARM'
    it('Should print any number between 0 and 99', () => {
      expect(gameFourTest.readUsersResponse(userInput, gameFourTest.generatedNum)).toMatch(/\d{1,}/)
    })
  })
  // Test #4
  describe('Test #4 "To determine if the program complains about user being liar ', () => {
    var userInput = 'HOT'
    var gameFourTest = new Q4()
    gameFourTest.triedHotNumbers = [0,2,3,4,5,6,7,8,9,10]
    gameFourTest.generatedNum = 1
    it('Should print "YOU LIED TO ME"', () => {
      expect(gameFourTest.readUsersResponse(userInput, gameFourTest.generatedNum)).toBe('YOU LIED TO ME')
    })
  })
  // Test #5
  describe('Test #5 "To determin if the program correctly guesses users number and happy about it', () => {
    var gameFourTest = new Q4()
    gameFourTest.generatedNum = 30
    gameFourTest.readUsersResponse('HOT', gameFourTest.generatedNum)
    var userInput = 'Correct'
    it('Should print "I got it in 2 trials ! WOOHOO !!!"', () => {
      expect(gameFourTest.readUsersResponse(userInput, gameFourTest.generatedNum)).toBe('I got it in 2 trials ! WOOHOO !!!')
    })
  })
})