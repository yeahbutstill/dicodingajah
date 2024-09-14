// Membuat array dapat dilakukan dengan tiga cara di bawah ini:

// Menggunakan object constructor
// Array dapat dibuat dengan constructor new Array() seperti berikut:
const users = new Array();
const numbers = new Array(5);

console.log(typeof users);
console.log(typeof numbers);

// Array users merupakan array kosong yang belum memiliki element dan jika kita
// lihat di console akan menghasilkan [].
console.log(users);
console.log(numbers);

// Pada array numbers, kita menambahkan angka 5 pada constructor sehingga itu 
// menjadi initial length array (panjang dari array). Meskipun sudah mendapatkan
// panjangnya 5, kita masih bisa menambahkan dan menghapus element di array 
// numbers tersebut