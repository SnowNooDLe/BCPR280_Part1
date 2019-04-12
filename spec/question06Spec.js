/* globals describe beforeEach it expect CatOwner  */
describe('Question Six', () => {
  'use strict'
  describe('CatOwner.hasManyCats function', () => {
    let aCatOwner
    beforeEach(() => {
      aCatOwner = new CatOwner()
    })

    it('should exist', () => {
      expect(aCatOwner.hasManyCats).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof aCatOwner.hasManyCats()).toBe('boolean')
    })

    it('should return false if the number of Cat that person owns is equal two.', () => {
      aCatOwner = new CatOwner('tao', null, null, null, null)
      aCatOwner.addCat(null, null, null, null)
      aCatOwner.addCat(null, null, null, null)
      expect(aCatOwner.hasManyCats()).toBe(false)
    })

    it('should return false if the number of Cat that person owns is less than two.', () => {
      aCatOwner = new CatOwner('tao', null, null, null, null)
      aCatOwner.addCat(null, null, null, null)
      expect(aCatOwner.hasManyCats()).toBe(false)
    })

    it('should return true if the number of Cat that person owns is more than two.', () => {
      aCatOwner = new CatOwner('tao', null, null, null, null)
      aCatOwner.addCat(null, null, null, null)
      aCatOwner.addCat(null, null, null, null)
      aCatOwner.addCat(null, null, null, null)
      expect(aCatOwner.hasManyCats()).toBe(true)
    })
  })
})
