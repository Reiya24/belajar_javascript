// pengkondisian if

const pulangSiang = true;

if (pulangSiang) {
    console.log("bawa bekal");
}
console.log("berangkat")

console.log("========")

// pengkondisian if else

const nilai = 75;

if (nilai >= 75) {
    console.log("lulus");
} else {
    console.log("tidak lulus");
}

console.log("========")

// pengkondisisan if, else if, dan else

const language = "english";

if (language === "english") {
    console.log("hello world")
} else if (language === "indonesia") {
    console.log("hallo dunia")
} else {
    console.log("language not suported")
}

// ternary operator
console.log(true ? "benar": "salah");

// truthy falsy di javascript javascript

// nilai dibawah akan dianggap false di
// Number 0
// BigInt 0n
// String kosong seperti “” atau ‘’
// null
// undefined
// NaN, atau Not a Number

if (0){
    console.log("print me")
}
