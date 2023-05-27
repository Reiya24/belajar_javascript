const makanan = ['cumi', 'udang', 'pizza', 'burger'];


console.log('===destructuring array');
// isi dari variable sesuai index array
// index kedua akan diabaikan
const [makanan1, makanan2, , makanan4] = makanan;
console.log(makanan1, makanan2, makanan4);

console.log('===melakukan destructuring array pada variable yang sudah dideklarasikan nilainya');

let makanan11 = 'seblak';
let makanan22= 'cilok';
let makanan44 = 'padang';
// skip index ke 2, dan memberikan defaut value
[makanan11, makanan22,, makanan44, makanan55 = 'mie'] = makanan;
console.log(makanan11, makanan22, makanan44, makanan55);

// menukan nilai variable
console.log('==menukar nilai variable');
let satu = 1;
let dua = 2;
[satu, dua] = [dua,satu];
console.log(satu, dua);

