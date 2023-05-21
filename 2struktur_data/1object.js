const user = {
    firstName: "Reiya",
    lastName: "Tenggara",
    age: 18,
    student: false,
    city: "jakarta"
};

console.log(`my name is ${user.firstName} ${user.lastName}, i'm from ${user["city"]}`);

user.firstName = "miki"
user["lastName"] = "misa"

console.log(`my name is ${user.firstName} ${user.lastName}, i'm from ${user["city"]}`);

delete user.student;