const makanan = ["sate", "pizza", "udang", "cumi"];
console.log(...makanan); // sama seperti console.log(makanan[0], makanan[1], makanan[2], makanan[3]);

const minuman = ["kopi", "susu", "boba"];

const menu = [...makanan, ...minuman];
console.log(menu);

console.log("=========");

const nama = {"firstName": "Reiya", "lastName": "tenggara"};
const dataDiri = {age: 19, gender: "male"};
const peserta = {...nama, ...dataDiri};
console.log(peserta)
