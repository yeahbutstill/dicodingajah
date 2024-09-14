// Mengakses Element Array
// Data di dalam Array terurut sehingga untuk mengakses dapat dengan mudah
// dengan menggunakan nilai indeks-nya. indeks merupakan angka yang digunakan
// untuk merujuk ke nilai di dalam Array, sehingga kita bisa menambahkan,
// mengubah atau menghapus nilainya.
// Indeks arrau dimulai dari angka 0, Untuk mengakses nilai di dalam Array, 
// gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan
// posisi dari nilai yang ingin diakses seperti berikut:
const myFuckingArray = [42, 55, 30];
console.log(myFuckingArray[0]);
console.log(myFuckingArray[2]);

// ketika mengakses indeks di luar dari ukuran Array akan menghasilkan
// undefined. Jadi jangan sampai mengakses Array melebihi ukurannya, ya!