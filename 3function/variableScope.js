function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multiply(20);

console.log(number);
console.log(total);

/*
variable total yang berada diluar function telah berubah nilainya, saat return total, karena variable
total yang ada di dalam function adalah global, karena tidak menggunakan const atau let
function
 */