class Car{
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand; //property
        this.color = color; //property
        this.maxSpeed = maxSpeed; //property
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`; //random
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

const toyota = new Car('Toyota', 'Silver', 200, 'to-1');
const honda = new Car('Honda', 'Black', 180);
const suzuki = new Car('Suzuki', 'Red', 220);

console.log(toyota);
toyota.chassisNumber = 'to'
console.log(toyota.chassisNumber);

toyota.drive();
toyota.reverse();
toyota.turn();