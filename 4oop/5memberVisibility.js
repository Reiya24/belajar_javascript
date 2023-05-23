class User {
    #code;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#code = this.#generateCode();
    }


    #generateCode() {
        return `${Math.floor(Math.random() * 1000)}`;
    }
    
}

const peserta1 = new User("reiya", "tenggara", 18);