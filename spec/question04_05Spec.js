/* global describe beforeEach Controller it expect Cat */
describe('Question Four and Question Five', () => {
  'use strict'
  describe('Cat', () => {
    let cat
    beforeEach(() => {
      cat = new Cat()
    })

    it('should have a .myCatOwner reference', () => {
      expect(cat.hasOwnProperty('myCatOwner')).toBeTruthy()
    })

    it('should have a .name property', () => {
      expect(cat.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .breed property', () => {
      expect(cat.hasOwnProperty('breed')).toBeTruthy()
    })

    it('should have a .gender property', () => {
      expect(cat.hasOwnProperty('gender')).toBeTruthy()
    })

    it('should have a .secretName property', () => {
      expect(cat.hasOwnProperty('secretName')).toBeTruthy()
    })
  })

  describe('write a CatOwner.addCat function to add the Cats', () => {
    var theCattery
    beforeEach(() => {
      theCattery = Controller.setup()
    })

    it('CatOwner 4 should have 1 Cat', () => {
      var theCatOwner = theCattery.findCatOwner('4')
      expect(theCatOwner.allMyCats.length).toBe(1)
    })

    it('CatOwner 7 should have 1 Cat', () => {
      var theCatOwner = theCattery.findCatOwner('7')
      expect(theCatOwner.allMyCats.length).toBe(1)
    })

    it('CatOwner 23 should have 3 Cats', () => {
      var theCatOwner = theCattery.findCatOwner('23')
      expect(theCatOwner.allMyCats.length).toBe(3)
    })

    it('CatOwner 165 should have 1 Cat', () => {
      var theCatOwner = theCattery.findCatOwner('165')
      expect(theCatOwner.allMyCats.length).toBe(1)
    })

    it('should correctly set cat details', () => {
            /*
    Owner ID    Name      Breed          Gender    Secret Name

     7          Art      Abyssianian       N      The Underwear Thief
     23        Fluffy     Persian          M       Grey ghost
     23        Blackey   Common Domestic   N       Her Majesty
     23         Inky       Persian         F       The Talker
     4          Meta        Tabby          F    Mouse's worse nightmare
     165      Random       Siamese         F     The One-Eyed Horror
            */
      var aCat, theCatOwner
      theCatOwner = theCattery.findCatOwner('4')
      aCat = theCatOwner.sortCats()
            // 4    Meta    Tabby  F    Mouse's worse nightmare
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).toEqual(theCatOwner)
      expect(aCat.name).toBe('Meta')
      expect(aCat.secretName).toBe('Mouse\'s worse nightmare')
      expect(aCat.breed).toBe('Tabby')
      expect(aCat.gender).toBe('F')

      theCatOwner = theCattery.findCatOwner('7')
      aCat = theCatOwner.sortCats()
            // 7  Art      Abyssianian   N  The Underwear Thief
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).toEqual(theCatOwner)
      expect(aCat.name).toBe('Art')
      expect(aCat.secretName).toBe('The Underwear Thief')
      expect(aCat.breed).toBe('Abyssianian')
      expect(aCat.gender).toBe('N')

      theCatOwner = theCattery.findCatOwner('165')
      aCat = theCatOwner.sortCats()
            // 165      Random       Siamese         F     The One-Eyed Horror
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).toEqual(theCatOwner)
      expect(aCat.name).toBe('Random')
      expect(aCat.secretName).toBe('The One-Eyed Horror')
      expect(aCat.breed).toBe('Siamese')
      expect(aCat.gender).toBe('F')

      theCatOwner = theCattery.findCatOwner('23')
      aCat = theCatOwner.sortCats()
            // 23     Blackey   Common Domestic   N       Her Majesty
            // 23     Fluffy     Persian          M       Grey ghostj
            // 23       Inky       Persian         F       The Talker
      aCat = theCatOwner.allMyCats[0]
      expect(aCat.myCatOwner).toEqual(theCatOwner)
      expect(aCat.name).toBe('Blackey')
      expect(aCat.secretName).toBe('Her Majesty')
      expect(aCat.breed).toBe('Common Domestic')
      expect(aCat.gender).toBe('N')

      aCat = theCatOwner.allMyCats[1]
      expect(aCat.myCatOwner).toEqual(theCatOwner)
      expect(aCat.name).toBe('Fluffy')
      expect(aCat.secretName).toBe('Grey ghost')
      expect(aCat.breed).toBe('Persian')
      expect(aCat.gender).toBe('M')

      aCat = theCatOwner.allMyCats[2]
      expect(aCat.myCatOwner).toEqual(theCatOwner)
      expect(aCat.name).toBe('Inky')
      expect(aCat.secretName).toBe('The Talker')
      expect(aCat.breed).toBe('Persian')
      expect(aCat.gender).toBe('F')
    })
  })
})
