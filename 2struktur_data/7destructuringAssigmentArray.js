const makanan = ["ayam", "pizza", "burger", "soto"];

let makanan1 = "karedok";
let makanan2 = "bakso";

[makanan1, makanan2] = makanan;
console.log(makanan1);
console.log(makanan2);

console.log("======");
//swap nilai

let satu = 1;
let dua = 2;
[satu, dua] = [dua, satu];
console.log(satu);
console.log(dua);

//default values
const makananEnak = ["ramen"];
const menu = [menuMahal, menuMurah] = makananEnak;
console.log(menuMahal, menuMurah);

const menu2 = [menuMahal, menuMurah = "mie ayam"] = makananEnak;
console.log(menuMahal, menuMurah);

