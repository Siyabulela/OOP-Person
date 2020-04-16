class Person {
    constructor(name, age, gender, interests) {
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }
    hello() {
        console.log("Name:\t" + this.name + "\nAge:\t" + this.age + "\nGender:\t" + this.gender + "\nInterests\t" + this.interests)
    }
}

let person = new Person('Ryan', 30, 'male', ['being a hardarse', 'agile', 'ssd hard drives'])
let greeting = person.hello()
console.log(greeting)