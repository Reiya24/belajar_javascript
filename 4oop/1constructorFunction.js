function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`; //random number
}

Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning`)
}

const toyota = new Car('Toyota', 'Silver', 200, );
const honda = new Car('Honda', 'Black', 180, 'ho-1');
const suzuki = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(toyota);
console.log(honda);
console.log(suzuki);

toyota.drive();
toyota.reverse();
toyota.turn();

