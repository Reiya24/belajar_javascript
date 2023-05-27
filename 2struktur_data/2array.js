console.log('===mencetak array')
let tomkun = ["kucing", 5, true];
console.log(tomkun);
console.log(tomkun[0]);
console.log(tomkun[3]);

console.log('===menambah isi dari array');
tomkun.push("jantan");
console.log(tomkun);

console.log('===menghapus data paling akhir');
tomkun.pop();
console.log(tomkun);

console.log('===menghapus data paling awal');
tomkun.shift();
console.log(tomkun);

console.log('===menambah data paling awal');
tomkun.unshift("meong");
console.log(tomkun)

console.log('===menghapus data di index 1');
// data di index 1 akan di menjadi kosong, static seperti java
delete tomkun[1];
console.log(tomkun);

console.log('===menghapus dari index 2, sebanyak 1 element')
tomkun.splice(2, 1);
console.log(tomkun);

console.log('===menambah index setelah satu, dan menghapus 0 index setelahnya');
const bulan = ["january", "march", "april", "may"];
bulan.splice(1, 0, "february")
console.log(bulan)