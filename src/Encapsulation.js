class Car {
    constructor(brand, speed) {
        this._brand = brand;  // Using private convention
        this._speed = speed;
    }

    // Getter for brand
    get brand() {
        return this._brand;
    }

    // Setter for speed
    set speed(newSpeed) {
        if (newSpeed > 0) {
            this._speed = newSpeed;
        } else {
            console.log("Speed cannot be negative!");
        }
    }

    // Method to get current speed
    getSpeed() {
        return `${this._brand} is going at ${this._speed} km/h.`;
    }
}

// Encapsulation in action
let myCar = new Car("Toyota", 100);
console.log(myCar.brand); // Output: Toyota
myCar.speed = 120;        // Setting a new speed
console.log(myCar.getSpeed()); // Output: Toyota is going at 120 km/h.
myCar.speed = -50;        // Trying to set a negative speed (will give an error message)
