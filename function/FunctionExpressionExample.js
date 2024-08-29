// Sejauh ini, kita sudah bisa membuat function dengan baik dalam JavaScript. 
// Capaian yang sangat bagus! Kini, kita dapat membuat banyak function untuk mencapai 
// kode yang readable dan simple. Bahagianya, pembelajaran function kita masih berlanju.
// Kita akan membahas mengenai function expression.

// Function expression terdiri dari dua kata, yaitu "function" dan 
// "expression". Kita sudah mengenal function, begitu juga dengan expression. 
// Lantas, function expression dapat kita artikan sebagai kode yang 
// mengembalikan nilai function. Bagaimana bentuknya, ya?

// Kali ini, kita sudah mahir membuat function. 
// Tata caranya adalah keyword function, identifier, parentheses untuk parameter, 
// dan function body. Disadari ataupun tidak, sebetulnya kita sedang membuat, 
// sebut saja, function statement. Artinya, kita memerintahkan JavaScript 
// membuat function dengan statement tersebut. 
// Tentunya, ini tidak akan mengembalikan nilai apa pun. 
// Nah, kita dapat membuat function dengan gaya expression 
// layaknya membuat variabel seperti kode di bawah ini.
const result = 3 * 4;
console.log(result);

const greetWorld = function (message) {
    console.log("Hello, World!");
}

const convertCelsiusToFarenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

const temperatureInFahrenheit = convertCelsiusToFarenheit(90);
console.log("Hasil konversi: ", temperatureInFahrenheit);

// Perbedaan lainnya dari function expression ialah 
// tidak memiliki hoisting padanya sehingga kita tidak dapat memanggil 
// atau menjalankan function ini sebelum dideklarasikan.

// Jika ada bahasa pemrograman yang mengatakan bahwa function dapat diperlakukan
// layaknya variable, function tersebut dinyatakan sebagai first-class citizen.
// Apa maksudnya dari perilaku yang mirip variable?
// Pada Javascript function dapat kita jadikan sebagai nilai dan disimpan dalam variable,
// nilai argument function lain, mengembalikan nilai function dari suatu function, mari kita lihat contohnya.

function multiply(a, b, c) {
    return (a * b) * c;
}

function calculate(operation, numA, numB, numC) {
    return operation(numA, numB, numC);
}

const result1 = calculate(multiply, 2, 4, 2);
console.log(result1);

// Kita memiliki program kalkulator sederhana, Berdasarkan contoh program di atas,
// kita punya dua fucntion. function multiply untuk melakukan operasi perkalian,
// sedangkan calculate sebagai function utama yang perlu dijalankan jika ingin
// melakukan proses aritmatika tiga angka.
//
// Identifier function multiply kita jadikan sebagai nilai argument pertama dari 
// calculate saat pemanggilannya. Artinya parameter operation akan bernilai dari
// function multiply. Oleh karena itu, kita bisa melakukan invoke(menajalankan)
// parameter tersebut layaknya function.
//

// Bagaimana dengan mengembalikan nilai function dari suatu function?
function multiplier(x) {
    return function (num) {
        return x * num;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(11));

// Rangkuman mengenai function sebagai first-class citizen dalam beberapa
// keuntungan berikut:
// Dapat disimpan sebagai nilai dalam variable
// Dapat dikembalikan dari suatu function
// Dapat dikirimkab sebagai parameter bagi function lain
// Dapat disimpan dalam element array dan object literal
// Dapat memiliki method dan properties sendiri
