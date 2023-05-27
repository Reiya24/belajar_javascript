const profile = {
    firstName: "reiya",
    lastName: "tenggara",
    age: 18
};

/*
sama seperti:
const firstname = profile.firstName;
const lastname = profile.lastName;
const age = profile.age;
 */
console.log('===destructuring object');
const {firstName, lastName, age} = profile;
console.log(firstName, lastName, age);

console.log('===melakukan destructuring object pada variable yang sudah dideklarasikan nilainya');
const profile2 = {
    firstName2: "reiya",
    lastName2: "tenggara",
    age2: 18
};

let firstName2 = 'miki';
let lastName2 = 'misa';
//mengganti nama variable, dan memberikan default value
({firstName2, lastName2: namaAkhir, student = false} = profile2);
console.log(firstName2, namaAkhir, student);








