// Terakhir, struktur data yang kita bahas adalah set. Set adalah 
// struktur data yang spesial dibandingkan dengan Map, Array dan Object. 
// Kenapa dikatakan spesial?

// Jawabannya adalah karena set tidak memiliki key dan index ketika menyimpan
// data. Selain itu, data yang disimpan di dalam Set akan bernilai
// Unik artinya tidak akan ada data yang duplikat. Spesial bukan?


// Membuat Set
// Set dapat dibuat dengan cara menuliskan Object Constructor Set seperti contoh
// berikut ini.
const membuatSet = new Set();

// Set juga dapat dibuat beserta dengan nilainya seperti berikut ini
const memBuatSetBesertaNilainya = new Set([1, 2, 3]);
console.log(memBuatSetBesertaNilainya);
console.log("\n");


// Menyimpan Nilai di Set
// untuk menambahkan nilai set setelah diinisialisasi dapat menggunakan method add
const menyimpanNilaiDiSet = new Set();
menyimpanNilaiDiSet.add(1);
menyimpanNilaiDiSet.add(10);
console.log(menyimpanNilaiDiSet);
console.log("\n");

// Method add hanya menerima satu argument sebagai nilai yang ingin kita tambahkan
// ke dalam set. Jika kita meberikan nilai yang sama. Set hanya akan menyimpan sekali
// saja. Oleh karena itu, data yang ada di dalam set tidak akan terduplikat.
const tidakAkanDuplikat = new Set();
tidakAkanDuplikat.add(1);
tidakAkanDuplikat.add("Apple");
tidakAkanDuplikat.add(1);
tidakAkanDuplikat.add("Apple");
console.log(tidakAkanDuplikat);
console.log("\n");
// Dalam contoh kode di atas, perhatikan bahwa ketika menambahkan data yang sama,
// seperti "Apple" dan 1 ke dalam Set, hanya satu data yang tersimpan.
//


// Mengakses Nilai di Set
// Set memiliki perbedaan untuk cara mengakses nilainya yaitu menggunakan perulangan
// (looping), Cara pertama adalah menggunakan keyword for seperti berikut ini:
const loopingSet = new Set();
loopingSet.add(1);
loopingSet.add(10);

for (const number of loopingSet) {
    console.log(number);
}
