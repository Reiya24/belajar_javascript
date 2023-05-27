// tipe data object key value mirip dictionary pada python

const user = {
    fistName: 'Reiya',
    lastName: 'Tenggara',
    age: 19,
    student: true,
}

console.log(user);
//memanggil nilai
console.log(user.fistName); //atau
console.log(user['fistName']);

//mengubah nilai
user.student = false; //atau
user['student'] = false;

/*
alasan kenapa obect user bisa dirubah nilainya karena
mengubah nilai berbeda dengan menginisialisasi ulang nilai,
ketika membuat sebuah object, kita tidak terikat dengan property
didalamnya sehingga kita masih bisa memodifikasi nilainya. berbeda
jika kita menginisialisasi ulang variable dan objecte
 */