// Untuk mengubah suatu tipe data ke bentuk string umumnya dapat 
// dilakukan dengan dua cara, yaitu menggunakan fungsi String() dan 
// method .toString(). Berikut adalah contoh dari penggunaan kedua cara tersebut.
const number = 123;
const boolean1 = true;

const strNumber1 = String(number);
const strBoolean = boolean1.toString();

console.log(strNumber1);
console.log(strBoolean);

// mengubah ke number
const strNumber2 = "123";
const strFloat = "3.14";
const boolean2 = true;

const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean2);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

// Catatan 
// Dalam number, nilai boolean direpresentasikan dengan angka 1 dan 0. 
// Boolean true akan diubah menjadi 1, sedangkan false diubah ke 0.

// Fungsi parseInt() digunakan untuk mengonversi string menjadi bilangan bulat (integer)
// Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu. 
// Ketika menemukan karakter yang tidak bisa diubah menjadi angka, 
// proses konversi terhenti di sana. Dengan kemampuan ini, parseInt() dapat digunakan 
// untuk mengubah nilai string, seperti "20CM", "64px", atau angka dengan satuan lainnya
const cm = "20CM";
const px = "64";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM);
console.log(intFromPX);

// Adapun fungsi parseFloat() digunakan untuk mengonversi string menjadi angka desimal (floating-point number). 
// Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter string 
// satu per satu sehingga dapat mengubah numerik yang mengandung satuan.
const cm1 = "20.55cm";
const px1 = "64.24px";

const floatFromCM = parseFloat(cm1);
const floatFromPX = parseFloat(px1);

console.log(floatFromCM);
console.log(floatFromPX);

// Mengubah Ke Boolean
// Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean().
// Sama seperti fungsi sebelumnya, kita cukup memberikan nilai yang akan diubah 
// di antara tanda kurung. Berikut adalah contoh penggunaan fungsi Boolean().
const numberLagi = 123;
const stringLagi = "Dicoding";
const emptyAja = null;

const boolFromNumber = Boolean(numberLagi);
const boolFromString = Boolean(stringLagi);
const boolFromEmpty = Boolean(emptyAja);

console.log(boolFromNumber);
console.log(boolFromString);
console.log(boolFromEmpty);

// Hampir seluruh nilai yang ada sifatnya truthy, hanya segelintir nilai yang sifatnya 
// falsy. Berikut adalah daftar nilai falsy dalam JavaScript.
//
// false
// 0
// -0
// 0n
// ''
// null
// undefined
// NaN


