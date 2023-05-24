const {coffeeStock, isCoffeMachineReady} = require("./state");
console.log(coffeeStock);
console.log(isCoffeMachineReady);


const makeCoffe = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("kopi berhasil dibuat");
    } else {
        console.log("biji kopi habis");
    }
}

makeCoffe("robusta", 80);