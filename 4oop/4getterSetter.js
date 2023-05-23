class User {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._code = this._generateCode();
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    _generateCode(){
        return `${Math.floor(Math.random() * 1000)}`;
    }

    // method
    sayHello(){
        console.log(`hello ${this._firstName}`);
    }
}

const reiya = new User("reiya", "tenggara");
console.log(reiya);
console.log(reiya.fullName);

reiya.fullName = "Reiya Selatan";
console.log(reiya);
console.log(reiya.fullName);

reiya.sayHello();