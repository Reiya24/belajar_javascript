// tipe data set tidak berurutan karena tidak mempunyai index,
// dan akan menghapus bila ada data yang duplikat
const nomor = new Set([3,2,3,1,5]);
console.log('===mencetak set');
console.log(nomor);
console.log('===menambah 4 ke set');
nomor.add(4);
console.log('menghapus nilai 2 ke set');
nomor.delete(2);
console.log(nomor);

