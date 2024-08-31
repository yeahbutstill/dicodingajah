// Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data 
// tanpa instruksi eksplisit dari programmer. 
// Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, 
// perbandingan, dan konteks logika. Meskipun konversi implisit bisa sangat berguna 
// dan menghemat penulisan kode, penting untuk memahami alasan hal ini terjadi 
// untuk menghindari bug dan perilaku yang tidak terduga dalam kode.
const age = 20;
const message = "Umurku: " + age;

console.log(message);
// Dalam contoh ini, tipe data number (age) secara otomatis dikonversi menjadi string 
// karena operator + digunakan untuk penggabungan string.

const strNumber = "123";
const result = strNumber * 2;

console.log(result);
// Dalam contoh ini, strNumber (yang merupakan string) dikonversi 
// menjadi number karena operator * digunakan untuk operasi aritmetika.

// Contoh lain dalam penggunaan operasi aritmetika yang mengubah nilai boolean menjadi number.
const bool = true;
const result1 = 1 + bool;

console.log(result1);
