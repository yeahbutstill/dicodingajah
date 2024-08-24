# dicodingajah
# Rangkuman Mengarungi Lautan Sintaksis
## Expression dan Statement
Pemrograman pada dasarnya adalah cara kita berkomunikasi dengan komputer. Komunikasi ini melibatkan pemberian instruksi kepada komputer agar menjalankan tugas-tugas tertentu dengan benar. Tentu saja, kita perlu mengikuti aturan tertentu untuk memberikan instruksi kepada komputer.


Pada pemrograman, satu instruksi umumnya ditulis dalam satu baris kode. Jadi, tiga instruksi umumnya ditulis dalam tiga baris kode. Istilah yang digunakan untuk "instruksi" dalam bahasa pemrograman adalah "statement".


Bisa disimpulkan bahwa statement adalah instruksi yang akan dieksekusi oleh komputer.


Selain statement, ada istilah lain yang penting untuk diketahui, yaitu expression. Ini merupakan bagian dari sebuah statement yang menghasilkan nilai. Setiap statement biasanya mengandung setidaknya satu expression. Contoh, expression dalam kode di atas adalah nilai 10, teks “Dicoding”, dan teks “Aku Dicoding, umurku 10 tahun.”.

Berikut adalah ilustrasi yang bisa Anda lihat untuk memudahkan pemahaman mengenai bagian expression pada statement.

```js
const result = 4 + 4;
// statement, assignment, expression
```

## Comment
Komentar adalah teks bersifat penjelasan yang dapat dibaca oleh programmer dan ditulis dalam berkas kode. Pada JavaScript, untuk menuliskan teks komentar, ada dua cara, yaitu menggunakan tanda // dan /* */. Teks yang ditulis dengan tanda tersebut dianggap bukan instruksi dan tidak akan dijalankan oleh interpreter.

Berikut adalah contoh komentar yang ditulis dengan tanda //.

```js
// Teks ini akan diabaikan oleh interpreter
console.log('Hai, Readers!');
console.log('Hai, JavaScript!');
// console.log('Hai, Dicoding!');
```

Berikut adalah contoh dari komentar yang ditulis dengan tanda /* */. 
```js
/*
 TODO
  1. Buatlah variabel bernama PI dan isikan dengan nilai 3.14
 2. Cetak nilai variabel PI di terminal menggunakan console.log
 /
 
const PI = '3.14';
 console.log(PI);
```

## Variable
Variabel adalah wadah untuk menampung sebuah nilai. Nilai yang ditampung dapat berupa angka, teks, atau apa pun yang menghasilkan nilai (expression). Pada JavaScript, kita bisa membuat variabel melalui dua cara, yakni dengan sintaksis const dan let.

Perbedaan dari variabel yang dibuat dengan const dan let adalah variabel yang dibuat dengan const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya.

Variabel yang dibuat dengan const juga umum disebut sebagai constant (konstan) karena dalam matematika istilah tersebut memiliki arti tetap atau tidak berubah-ubah.

Dalam membuat variabel, kita tidak bisa memberikan nama secara sembarang. Ada aturan yang perlu kita taati. Berikut adalah beberapa aturan dalam penamaan variabel pada JavaScript.

- Tidak boleh memberikan nama yang sama dalam cakupan yang sama
- Nama variable hanya terdiri dari karakter tertentu
- Nama variable tidak boleh diawali dengan angka

## Mengubah Nilai Antar Tipe Data
JavaScript adalah bahasa pemrograman yang dinamis dan fleksibel, ia menyediakan berbagai cara untuk mengonversi tipe data. Konversi tipe data dapat dilakukan secara eksplisit oleh developer atau secara implisit oleh interpreter.

## Konversi Eksplisit
Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data karena dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer. Berikut adalah beberapa metode umum yang digunakan untuk konversi tipe data secara eksplisit.

```js
const number = 123;
const boolean = true;
 
const strNumber = String(number);
const strBoolean = boolean.toString();
 
console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"
 
 
const strNumber = '123';
const strFloat = '3.14';
const boolean = true;
 
const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);
 
console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1
 
 
const cm = '20cm';
const px = '64px';
 
const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);
 
console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64
 
 
const fCm = '20.55cm';
const fPx = '64.23px';
 
const floatFromCM = parseFloat(fCm);
const floatFromPX = parseFloat(fPx);
 
console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23
 
 
const number = 123;
const string = 'Dicoding';
const empty = null;
 
const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);
 
console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
```

Seluruh nilai yang dikonversi dalam boolean menghasilkan true disebut nilai truthy, sedangkan sebaliknya disebut dengan falsy. Hampir seluruh nilai yang ada sifatnya truthy, hanya segelintir nilai yang sifatnya falsy. Berikut adalah daftar nilai falsy dalam JavaScript.

```
false
0
-0
0n
''
null
undefined
NaN
```

## Konversi Implisit
Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika.

```js
const age = 20;
const message = 'Umurku: ' + age;
 
console.log(message); // output: Umurku: 20
 
 
const strNumber = '123';
const result = strNumber * 2;
 
console.log(result); // output: 246
 
 
const bool = true;
const result = 1 + bool;
 
console.log(result); // output: 2
```

## Operator
Dua istilah penting dalam melakukan sebuah operasi, yakni operator dan operand (operan).

- Operator merupakan sebuah simbol atau text yang digunakan untuk melakukan sebuah operasi, misalnya aritmatika, penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan programan.
- Operan adalah nilai yang menjadi target dari sebuah operasi.

Simak ilustrasi di bawah ini agar dapat membedakannya:

```
5 + 4
10 < 6

typeof "Dicoding"
```

Secara umum, operator dalam JavaScript terbagi menjadi tiga kelompok: unary, binary, dan ternary. Pengelompokan ini berdasarkan jumlah operan yang diperlukan untuk menggunakan suatu operator.

```js
let age = 25;
 
// Unary operator
typeof age;
 
// Binary operator
5 + 4;
10 / 2;
age = 30;
 
// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!';
```

Sudah jelas mengenai istilah operator dan operan beserta pengelompokan operator unary, binary, dan ternary? Jika sudah, mari kita mengenal berbagai operator yang ada dalam JavaScript.

Berbagai macam operator yang tersedia di JavaScript:

- Assignment: operator yang digunakan untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru maupun mengubah nilai yang sudah ada.
- Arithmetic: operator standar yang digunakan untuk proses aritmetika, seperti penambahan (+), pengurangan (-), pengalian (*), ataupun pembagian (/).
- Comparison: operator yang digunakan untuk membandingkan dua nilai dan mengembalikan nilai boolean (true atau false) sebagai hasil perbandingan.
- Logical: menetapkan logika dari dua nilai operan boolean.
- String operator: operator yang digunakan untuk menggabungkan dua nilai string.
