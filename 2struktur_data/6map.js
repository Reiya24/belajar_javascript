/*
tipe data yang menyimpan koleksi data dengan format key value seperti
object, namun map memperbolehkan key dengan tipe data apapun.
tidak seperti object yang key nya bertipe string / symbol
 */

const ibuKota = new Map([
    ['indonesia', 'jakarta'],
    ['china', 'beijing'],
    ['taiwan', 'taipei']
]);

console.log('===print map')
console.log(ibuKota);
console.log('===mencetak value dari key china');
console.log(ibuKota.get('china'));
console.log('===menambah key value baru');
ibuKota.set('malaysia', 'kuala lumpur');
console.log(ibuKota);
console.log('===mengecek apakah ibuKota punya key indonesia');
console.log(ibuKota.has('indonesia'));
console.log('===menghapus key value taiwan');
console.log(ibuKota.delete('taiwan'));
console.log(ibuKota);