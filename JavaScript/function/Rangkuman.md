# Rangkuman Bermain Dengan Function

## Pengertian Function
Function adalah program kecil yang berisi sekumpulan printah sehingga bisa dijalankan saat dibutuhkan. Hal tersebut sangat kita perlukan untuk mencegah aktivitas redundan dalam mencapai penyelesaian masalah.

Misalnya, dari pada menuliskan formula konversi suhu sebanyak lima kali, kita dapat membungkus formula tersebut dalam function dan menjalankannya sebanyak lima kali. ini lebih mudah ditulis dan dibaca oleh manusia.

```js
console.log(9/5 * 50 + 32);
console.log(9/5 * 70 + 32);
console.log(9/5 * 100 + 32);

function convertCelciusToFahrenheit(temperature) {
    const result = 9 / 5 * temperature + 32;
    return result;
}

convertCelciusToFahrenheit(50);
convertCelciusToFahrenheit(90);
convertCelciusToFahrenheit(100);
```

## Deklarasi Function
Ada tiga istilah yang perlu dipahami dalam mendefinisikan function, yakni function keyword, identified dan function body:

- Function keyword: syarat paling utama saat membuat function
- Identifier: Identitas function
- Function body: block of code yang membungkus banyak perintah

Berikut adalah contoh dari pembuatan function:
```js
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
    console.log("Hasil konversi: ", temperatureInFahrenheit);
```

## Pemanggilan Function
Sebagaimana sebuah variable dipanggil setelah dibuat, dalam menjalankan function, kita cukup panggil identifier-nya. Namun, tambahkan sintaks "()" setelahnya tanpa diikuti dengan white-space (spasi)

```js
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9/5) * temperature + 32;
    console.log("Hasil konversi: ", temperatureInFahrenheit);
}

const temperatureInCelsius = 90;
convertCelciusToFahrenheit(temperatureInCelsius);
```

## Parameter dan Argument
walaupun dapat mengeksekusi sekumpulan kode, sebuah subprogram bisa saja membutuhkan data agar tugasnya terpenuhi. tentu ini akan meningkatkan reusebility darinya. Oleh karena itu, kita membutuhkan parameter dan argument function.

Apa perbendaan antara parameter dan argument? Parameter function berperan sebagai input data atau varaible yang mengantarkan nilai, sedangkan argument adalah nilai yang diberi saat fucntion dipanggil.

```js
function sampleFunction(paramA, paramB) {
    console.log(paramA, paramB);
}

const argumentA = "hehe";
const argumentB = "hihi";
sampleFucntion(argumentA, argument);
```

Parameter function dalam JavaScript juga bisa ditetapkan nilai default jika tidak ada nilai yang diberi saat dijalankan. Cukup ikuti karakter sama dengan "=" dan nilainya setelah nama parameter.

```js
function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
    console.log("Hasil Konversi: ", temperatureInFahrenheit);
}
```

## Return Value
Pada dasarnya, function akan mengembalikan undefined ketika dipanggil. ini berlaku jika function tidak mengembalikan nilai apa pun setelah dieksekusi. Ada kalanya, kita akan membutuhkan agar function bisa mengembalikan suatu nilai. ini dicapai dengan return keyword dan diikuti nilai kembaliannya.

```js
function convertCelsiusToFahrenheit(temperature) {
    return (9/5) * temperature + 32;
}
```

Salah satu keuntungan dari function expression adalah dapat disebut sebagai first-class citizen. Tidak hanya disimpan dalam variable, function dapat dijadikan sebagai argument dan bahkan dijadikan sebagai return value dari suatu function.

```js
// Dijadikan sebagai argument dari parameter 'operation'
function calculate(operation, numA, numB) {
    return operation(numA, numB);
}

// Dijadikan sebagai return value
function multiplier(x) {
    return function (num) {
        return x * num;
    };
}
```

## Arrow Function 
Ada gaya lain dalam membuat function dalam JavaScript, yaitu Arrow Function. ini adalah gaya yang hanya tersedia dengan cara expression. Perbedaannya ada pada function keyword yang hilang dan penambahan notasi Fat Arrow sebelum body function.

```js
const greetWorld = (message) => {
    console.log("Hello World);
}
```

Sintaks di atas mungkin sudah cukup singkat bagi kita, tetapi belum lagi menurut JavaScript. Ternyata Arrow Function dapat dicapai tanpa kurung kurawal alias seakan-akan tidak memiliki body function.

```js
// Arrow Function
const convertCelsiusToFahrenheit = (temperature) ==> {
    return  (9/5) * temperature + 32;
};

// Arrow Function versi ringkas
const convertCelsiusToFahrenheit = (temperature) => (9/5) * temperature + 32;

```
