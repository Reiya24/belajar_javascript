const profile = {
    firstName: "reiya",
    lastName: "tenggara",
    age: 18
};

let firstName = "rehan";
let age = 20;

({firstName, age} = profile);
console.log(firstName);
console.log(age);