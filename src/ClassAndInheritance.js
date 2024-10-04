
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

// Inheriting from the Person class (Employee)
class Employee extends Person {
    constructor(firstName, lastName, age, position) {
        super(firstName, lastName, age); // Calling parent constructor
        this.position = position;
    }

    // Method specific to Employee
    getPosition() {
        return this.position;
    }
}

// Creating an instance of Employee
let employee = new Employee("Jane", "Smith", 28, "Software Developer");

console.log(employee.getFullName()); // Output: Jane Smith
console.log(employee.getPosition()); // Output: Software Developer
