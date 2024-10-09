
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position) {
        super(firstName, lastName, age);
        this.position = position;
    }

    getPosition() {
        return this.position;
    }
}

let employee = new Employee("Jane", "Smith", 28, "Software Developer");

console.log(employee.getFullName()); 
console.log(employee.getPosition()); 
