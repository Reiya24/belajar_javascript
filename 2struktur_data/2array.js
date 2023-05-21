let tomkun = ["kucing", 5, true];

console.log(tomkun)
console.log(tomkun[0]);
console.log(tomkun[1]);
console.log(tomkun[2]);
console.log(tomkun[3]);


tomkun.push("jantan");
console.log(tomkun);

tomkun.pop();
console.log(tomkun);

tomkun.shift();
console.log(tomkun);

tomkun.unshift("meong");
console.log(tomkun)

delete tomkun[1];
console.log(tomkun);

// menghapus dari index kedua1, sebanyak 1 element
tomkun.splice(2, 1);
console.log(tomkun)

const bulan = ["january", "march", "april", "may"];
bulan.splice(1, 0, "february")
console.log(bulan)