// assignment operator
console.log("assigment operator")
let x = 10;
let y = 5;
x += y; // x = x +y;
console.log(x);
x += y;
x -= y;
x *= y;
x /= y;
x %= y;

// comparison operator
console.log("comparison operator");
console.log(12 > 10);
console.log(12 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

// di javascript operator == tidak akan membandingan tipe data
console.log(" == && ===")
console.log(10 == "10");
console.log(10 === "10");

// logical operator
console.log("logical operator");
console.log(10 > 5 && 10 >= 10);
console.log(10 > 5 && 10 > 10);

console.log(10 > 5 || 10 >= 10);
console.log(10 > 5 || 10 > 10);

console.log(!(10 == 10))
console.log(!(10 != 10))