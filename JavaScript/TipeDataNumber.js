const positve = 40;
const double = 3.14;
const negative = -40;

console.log(positve);
console.log(double);
console.log(negative);

//Selain angka normal, tipe data number juga memiliki nilai spesial, 
//yaitu Infinity dan NaN. Nilai Infinity dihasilkan ketika kita 
//melakukan operasi aritmetika yang tidak terdefinisi, seperti membagi sebuah nilai dengan nol. 
//Contohnya kode di bawah ini.
const result = 50 / 0;
console.log(result);

//Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number. 
//Contohnya ketika kita mencoba mengonversi string yang bukan angka menjadi number.
const numberDiubahJadiString = Number('Dicoding');

console.log(numberDiubahJadiString);
