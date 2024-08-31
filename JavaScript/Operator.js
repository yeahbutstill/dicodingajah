// Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah 
// operasi, misalnya aritmetika, penugasan, logika, tipe data, atau operasi lain yang 
// berhubungan dengan pemrograman.
// Operan adalah nilai yang menjadi target dari sebuah operasi.
//
// Sebagai contoh, ada sebuah operasi aritmetika 5 + 4. 
// Operatornya adalah simbol + serta operannya adalah 5 dan 4. 

// Berikut adalah contoh kode yang menunjukkan penggunaan unary, binary, dan ternary operator.

let age = 25;

// Unary operator
typeof age;

// Binary operator
5 + 4;
10 / 2;
age = 30;

// Ternary operator
(age < 18) ? "You are too young" : "Welcome onboard";

console.log(age);

// Assignment operator
// Operator penugasan atau assignment operator adalah operator yang digunakan 
// untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru 
// maupun mengubah nilai yang sudah ada. Operator ini ditulis dengan simbol 
// sama dengan (=). Operator penugasan termasuk dalam kategori binary operator 
// karena membutuhkan dua operan, yaitu variabel di sisi kiri dan 
// nilai yang akan diberikan di sisi kanan. Operator ini ditulis di antara kedua operan.

// Digunakan untuk menginisialisasi nilai
const name = "Dicoding";
let location = "Bandung";

// Digunakan untuk mengubah nilai
location = "Jakarta";

console.log(name);
console.log(location);

// Arithmetic operator
// Operator aritmetika adalah operator standar yang digunakan untuk proses aritmetika, 
// seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/). 
// Selain operasi standar yang kami sebutkan, JavaScript juga mendukung beberapa 
// operasi aritmetik yang bisa Anda lihat di bawah ini
let a = 12
let b = 5
// mengembalikan sisa hasil bagi operan kiri dan operan kanan
const sisaBagiAtauModulus = a % b;
// mengubah a menjadi 13 dan operasi mengembalikan 13
const incrementDepan = ++a
// mengembalikan a dengan nilai sebelumnya. Setelah itu mengubah a menjadi 13
const incrementBelakang = a++;
const decrementDepan = --a;
const decrementBelakang = a--;
// Eksponensial atau bisa disebut Pangkat (**)
// menghitung a (basis) dengan pangkat b (eksponen).
// Bentuk matematikanya x ^ y
const eksponsial = a**b
const eksponsialLagi = 10**2;

// Comparison Operator
// Membandingkan dua operan, tanpa memperhatikan tipe data
const sama = 1 == 1;
const bedaTipe = 1 == "1";
const iniFalse = "Dicoding" == "dicoding";
const tidakSama = 1 != 1;
// membandingkan dua operan beserta tipe datanya
const identik = 1 === 1;
const identik1 = 1 === "1";
const tidakIdentik = 1 !== 1;
const tidakIdentik1 = "Dicoding" !== "dicoding";
const lebihDari = 4 > 2;
const lebihDariAtauSamaDengan = 4 >= 2;
const kurangDari = 4 < 2;
const kurangDariAtauSamaDengan = 4 <= 2;

console.log(sama);

// Logic Operator
let benarNih = true;
let salahNih = false;

// menghasilkan true apabila kedua operan bernilai true
const dan = benarNih && benarNih;
// menghasilkan false apabila salah satu bernilai false
const dan1 = benarNih && salahNih;

// menghasilkan true apabila salah satu operan bernilai true
const atau = benarNih || benarNih;
// menghasilkan false apabila dua operan tersebut bernilai false
const atau1 = benarNih || salahNih;
// mengubah operan bernilai true menjadi false dan false menjadi true
const tidakBenar = !true;
const tidakSalah = !false;

// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true
 
// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
 
// NOT
console.log(!true); // false
console.log(!false); // true

// String Operator
// Operator String adalah operator yang digunakan untuk menggabungkan dua nilai String.
// Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator.
const first = "bekerja ";
const second = "sama";
const merged = first + second;

console.log(merged);
// Perlu diperhatikan bahwa simbol + memiliki fungsi ganda tergantung 
// pada jenis operannya. Jika salah satu operan adalah string, 
// simbol + akan berfungsi sebagai operator string untuk menggabungkan nilai string 
// tersebut. Sebaliknya, jika kedua operand adalah angka, simbol + akan berfungsi 
// sebagai operator aritmetika untuk melakukan penjumlahan.

// Meskipun terlihat sederhana, penggunaan simbol + ini bisa sedikit membingungkan. 
// Contohnya, pada operasi "2" + 2, hasilnya bukan 4, melainkan "22". 
// Hal ini terjadi karena salah satu operannya adalah string sehingga simbol + 
// berfungsi sebagai operator string.
