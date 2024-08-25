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

