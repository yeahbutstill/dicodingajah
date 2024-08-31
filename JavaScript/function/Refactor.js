// Apakah anda merasa arrow function belum dikatakan sebagai sintaksis function
// yang sederhana?
// Tenang, ternyata arrow function ini bisa lebih simple lagi
// Kita bisa menyederhanakan penulisan arrow function body agar tidak
// menggunakan tanda kurung kurawal sama sekali. 
let temperatureInFahrenheit;
// Arrow Function
const convertCelsiusToFahrenheit = (temperature) => {
    const result = (9/5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log("Hasil konversi: ", temperatureInFahrenheit);

// Arrow Function versi ringkas
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => (9/5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log("Hasil konversi dengan Concise Syntax ", temperatureInFahrenheit);

// Lihat Function convertCelsiusToFahrenheitConciseSyntax memiliki penulisan sintaksis
// yang sangat sederhana. Jauh lebih sederhana dari sebelumnya. Di sana kita
// menghilangkan beberapa hal, yaitu tanda kurung kurawal dan keyword return.
// Sebagai gantinya, return value langsung diletakan setelah fat arrow.
//
// Hal yang perlu dicatat adalah pembuatan arrow function hanya tersedia dalam
// bentuk expression, oleh karena itu kita selalu menyimpan nilainya dalam variable. 
// Selalin itu, arrow function dengan gaya seperti ini hanya mampu
// menampung satu return value.
//
// Silakan bungkus dengan tanda kurung kurawal buka-tutup jika memerlukan banyak kode.
