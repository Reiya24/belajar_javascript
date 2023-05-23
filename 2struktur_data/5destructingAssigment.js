const profile = {
    firstName: "reiya",
    lastName: "tenggara",
    age: 18
};

let firstName = "rehan";
let age = 20;

({firstName, age, gender} = profile);
console.log(firstName);
console.log(age);
console.log(gender);

console.log("====");

({firstName, age, gender = "male"} = profile);
console.log(firstName);
console.log(age);
console.log(gender);

console.log("====");

// assign ke nama variable yang berbeda
const {firstName: localFirstName, lastName: localLastname, age: localAge} = profile;
console.log(localFirstName);
console.log(localLastname);
console.log(localAge);