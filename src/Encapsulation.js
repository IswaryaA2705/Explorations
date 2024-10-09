class Car {
    constructor(brand, speed) {
        this._brand = brand;  
        this._speed = speed;
    }

    get brand() {
        return this._brand;
    }

    set speed(newSpeed) {
        if (newSpeed > 0) {
            this._speed = newSpeed;
        } else {
            console.log("Speed cannot be negative!");
        }
    }

    getSpeed() {
        return `${this._brand} is going at ${this._speed} km/h.`;
    }
}

let myCar = new Car("Toyota", 100);
console.log(myCar.brand); 
myCar.speed = 120;        
console.log(myCar.getSpeed()); 
myCar.speed = -50;        
