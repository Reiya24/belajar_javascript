const myMap = new Map([
    ["1", "nomor satu"],
    [1, "nomor dua"],
    [true, false]
]);

const ibuKota = new Map([
    ["China", "beijing"],
    ["Taiwan", "taipei"],
    ["Indonesia", "jakarta"]
]);
console.log(ibuKota.size);
console.log(ibuKota.get("Indonesia"));
ibuKota.set("India", "New Delhi");
console.log(ibuKota.size);

console.log(ibuKota.has("China"));
console.log(ibuKota.delete("India"));
console.log(ibuKota)