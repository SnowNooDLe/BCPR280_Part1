/* global describe beforeEach Controller it expect Cattery */
describe('Question Seven', () => {
    var theCattery
    beforeEach(() => {
      theCattery = Controller.setup()
    })
  describe('Cattery.getThoseWithManyCats function', () => {
    it('should return a string', () => {
      expect(typeof theCattery.getThoseWithManyCats()).toBe('string')
    })
    it('should NOT be hard coded', () => {
      theCattery = new Cattery()
      expect(theCattery.getThoseWithManyCats()).toBe('')
    })
    
    //'Casey, van Dyke [23]\n\tBlackey (N) aka Her Majesty\n\tFluffy (M) aka Grey ghost\n\tInky (F) aka The Talker\n')
    describe('The owner\'s first name', () => {
      it('should be Casey', () => {
        let output = theCattery.getThoseWithManyCats()
        expect(output).toMatch(/^Casey/)
      })
    })
    
    describe('The punctuation after the first name', () => {
      it(' should be a comma and then a space', () => {
        expect(theCattery.getThoseWithManyCats()).toMatch(/^Casey,\s/)
      })
    })
    
    describe('The second name', () => {
      it('should be van Dyke', () => {
        expect(theCattery.getThoseWithManyCats()).toMatch(/^Casey, van Dyke/)
      })
    })
    
    describe('The punctuation after the second name', () => {
      it('should just be a space', () => {
        expect(theCattery.getThoseWithManyCats()).toMatch(/Dyke\s/)
      })
    })
    
    describe('The id ', () => {
      it('should have 23 enclosed in [] ie [23]', () => {
        expect(theCattery.getThoseWithManyCats()).toMatch(/\[23\]/)
      })
    })
    
    describe('After the id', () => {
      it('should be a newline', () => {
        expect(theCattery.getThoseWithManyCats()).toMatch(/\[23\]\n/)
      })
    })
    
    describe('Each cat\'s details', () => {
      it('should start with a tab \\t character', () => {
        expect(theCattery.getThoseWithManyCats()).toMatch(/\n\t/)
      })
    })
    
    describe('Cassey\'s first cat', () => {
      let theCattery = Controller.setup()
      let owner = theCattery.findCatOwner('23')
      owner.sortCats()
      let theCat = owner.allMyCats[0]
      let output = theCat.toString()
      it('should be the Blackey', () => {
        expect(output).toMatch(/^Blackey/)
      })
      it('and should be neutered', () => {
        expect(output).toMatch(/\s\(N\)\s/)
      })
      it('with a secret name of \'Her Majesty\'', () => {
        expect(output).toMatch(/aka Her Majesty$/)
      })
    })
    
    describe('Cassey\'s second cat', () => {
      let theCattery = Controller.setup()
      let owner = theCattery.findCatOwner('23')
      owner.sortCats()
      let theCat = owner.allMyCats[1]
      let output = theCat.toString()
      it('should be the Fluffy', () => {
        expect(output).toMatch(/^Fluffy/)
      })
      it('and should be a Male', () => {
        expect(output).toMatch(/\s\(M\)\s/)
      })
      it('with a secret name of \'Her Majesty\'', () => {
        expect(output).toMatch(/aka Grey ghost$/)
      })
    })
    describe('Cassey\'s third cat', () => {
      let theCattery = Controller.setup()
      let owner = theCattery.findCatOwner('23')
      owner.sortCats()
      let theCat = owner.allMyCats[2]
      let output = theCat.toString()
      it('should be the Inky', () => {
        expect(output).toMatch(/^Inky/)
      })
      it('and should be a female', () => {
        expect(output).toMatch(/\s\(F\)\s/)
      })
      it('with a secret name of \'The Talker\'', () => {
        expect(output).toMatch(/aka The Talker$/)
      })
    })
  })  
})
