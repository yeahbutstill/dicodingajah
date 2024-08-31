// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = "IDR";


// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000;

// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value += 5000; // 10000 + 5000

let tambah = value + 5000; // 15000 + 5000

console.log(tambah);

/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan string interpolation dari nilai `currency` + " " + `value`.
 */
const money = currency + " " + value; // IDR 15000

console.log(money);
