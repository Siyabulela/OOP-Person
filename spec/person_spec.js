const { person } = require("../src/person")

describe("finds", function() {
    it("should compare name", function() {
        expect(person.name).toEqual("Ryan")
    })
    it("should compare age", function() {
        expect(person.age).toEqual(30)
    })
    it("should compare gender", function() {
        expect(person.gender).toEqual("male")
    })
    it("should compare interests", function() {
        expect(person.interests).toEqual(['being a hardarse', ' agile', 'ssd hard drives'])
    })
})