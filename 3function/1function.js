function tambah(nomor1, nomor2) {
    return nomor1 + nomor2;
}

console.log(tambah(11,2));

function sayHello() {
    console.log("hello kitty");
}
sayHello();

const sayHello2 = function (name) {
    return `hello ${name}`
}

console.log(sayHello2("reiya"));

const peserta = {
    firstName: "reiya",
    lastName: "tenggara",
};

function namaPeserta({firstName, lastName}) {
    console.log(`${firstName} ${lastName}`);
}

namaPeserta(peserta);

function perkenalan(nama, asal="jakarta"){
    console.log(`hallo, saya ${nama} dari ${asal}`);
}
perkenalan("reiya");
perkenalan("miki", "subang");

function hitung(...nomor) {
    let hasil = 0;
    for (let i of  nomor){
        hasil += i;
    }
    return hasil;
}

console.log(hitung(1,2,3,4,5));