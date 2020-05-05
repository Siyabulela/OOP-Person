const { Person } = require("../src/person")

let person = new Person('Ryan', 30, 'male', ['being a hardarse', ' agile', 'ssd hard drives'])
describe("person", function() {
    it("should compare name", function() {

        expect(person.name).toBe(`Ryan`)
    })
    it("should compare age", function() {

        expect(person.age).toEqual(30)
    })
    it("should compare gender", function() {

        expect(person.gender).toBe("male")
    })
    it("should compare interests", function() {

        expect(person.interests).toEqual(['being a hardarse', ' agile', 'ssd hard drives'])
    })
    it("should compare interests", function() {

        expect(person.hello()).toEqual(`Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.`)
    })
})