// tipe data set tidak berurutan karena tidak mempunyai index,
// dan akan menghapus bila ada data yang duplikat
const nomor = new Set([3,2,3,1,5]);
console.log(nomor);
nomor.add(4);
nomor.delete(2);
console.log(nomor);

