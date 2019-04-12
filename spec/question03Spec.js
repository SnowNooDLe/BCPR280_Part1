/* global describe beforeEach Controller it expect Cattery */
describe('Question Three', () => {
  'use strict'
  describe('Cattery.getCatOwners function', () => {
    let theCattery
    beforeEach(() => {
      theCattery = Controller.setup()
    })
    it('should return a string', () => {
      expect(typeof theCattery.getCatOwners()).toBe('string')
    })
    it('should NOT be hard coded', () => {
      theCattery = new Cattery()
      expect(theCattery.getCatOwners()).toBe('')
    })
  
  // 'Temepara, Williams [4]\nRuth, George [7]\nCasey, van Dyke [23]\nIrene, Aitkin [165]\n'
    describe('Should return correctly formatted data', () => {
      describe('Should start with the first names but be sorted in ID order', () => {
        it('First Temepara then Ruth then Casey then Irene', () => {
          let output = theCattery.getCatOwners()
          expect(output).toMatch(/^Temepara.*\nRuth.*\nCasey.*\nIrene.*\n/)
        })
      })
      describe('Puntuation after each first name', () => {
        it('should be a comma followed by a single space', () => {
          let output = theCattery.getCatOwners()
          expect(output).toMatch(/^Temepara,\s.*\nRuth,\s.*\nCasey,\s.*\nIrene,\s.*\n/)
        })
      })
      describe('last names', () => {
        it('should be Williams, the George, then van Dyke and finally Aitkin', () => {
          let output = theCattery.getCatOwners()
          expect(output).toMatch(/.*Williams.*\n.*George.*\n.*van Dyke.*\n.*Aitkin.*/)
        })
      })
      describe('Puntuation after the last names', () => {
        it('should be a space', () => {
          expect(theCattery.getCatOwners()).toMatch(/[\.\s]/)
        })
      })
      describe('the IDs', () => {
        it('should have digits enclosed in the square brackets ie []', () => {
          expect(theCattery.getCatOwners()).toMatch(/\[\d*\]/)
        })
      })
      describe('end of each owner\'s details', () => {
        it('should end with the newline character', () => {
          
          expect(theCattery.getCatOwners()).toMatch(/\n/)
        })
      })    
    })
  })
})
