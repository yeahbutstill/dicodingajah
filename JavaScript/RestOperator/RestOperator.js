// Rest Operator
// ketika bekerja dengan function, sering kali function menerima argument yang 
// kemudian menjadi parameter. Ketika argument-nya masih sedikit, seperti satu 
// atau dua belum menimbulkan masalah.
// Masalah terjadi ketika argument-nya sudah melebihi dua karena terlalu banyak
// argument pada function membuat kode menjadi tidak bersih 
// (tidak sesuai prinsip clean code) sehingga sulit untuk dibaca dan 
// di-maintenance.
//
// Solusinya adalah menggunakan Rest Operator. Rest operator memungkinkan 
// function untuk menerima argument dalam bentuk Array. Rest operator yang 
// digunakan pada parameter fungsi sering disebut sebagai Rest Parameter.
// Cara menggunakan Rest Parameter adalah dengan menambahkan tiga titik
// (...) sebelum parameter terakhir.
function myFunc(...manyMoreArgs) {
    console.log("manyMoreArgs", manyMoreArgs);
}

myFunc("One", "Two", "Three", "Four", "Five");
// Rest Parameter memungkinkan kita untuk menulis argument yang tak terbatas
// pada function. Rest Parameter akan menangani argument tersebut menjadi sebuah
// Array dan meneruskan ke function. Jika ada parameter lain sebelumnya,
// nilainya tidak menjadi bagian dari Array yang dihasilkan Rest Parameter
function myFuncAgain(number, ...manyMoreMore) {
    console.log("number", number);
    console.log("manyMoreMore", manyMoreMore);
}

myFuncAgain("one", "two", "three");
console.log("\n");

// karena Rest Parameter menangani argument sebagai Array, method array.length juga 
// dapat digunakan pada Rest Parameter seperti berikut:
function myFuncRestParameterArray(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFuncRestParameterArray("one", "three", "two");
console.log("\n");
console.log("\n");

// Tak hanya method array.length, kita juga dapat menggunakan method array lainnya pada
// rest parameter.
//
// Selain pada parameter fungsi, rest operator juga kerap digunakan ketika kita 
// melakukan destructuring array untuk menangkap seluruh sisa element terakhir
// dalam bentuk array
const favorites = ["Nasi Goreng", 
    "Mie Goreng",
    "Ayam Bakar",
    "Tahu",
    "Tempe",
    "Lalap"
];

const [yangPertama, yangKedua, ...restParameter] = favorites;

console.log(yangPertama);
console.log(yangKedua);
console.log(restParameter);
