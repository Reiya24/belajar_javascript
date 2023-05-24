const coffeStock = require("./state");

const makeCoffe = (type, miligrams) => {
    if (coffeStock[type] >= miligrams) {
        console.log("kopi berhasil dibuat");
    } else {
        console.log("biji kopi habis");
    }
}

makeCoffe("robusta", 80)