// Selain di Object, spread operator juga dapat digunakan di Array
const array1 = ["Dicoding"];
const array2 = ["Indonesia", "Jl. Batik Kumeli No 50"];
const newArray = [...array1, ...array2];
console.log(newArray);

// Untuk menggabungkan dua array menggunakan spread operator cukup mudah, kan?
// Spread Operator juga dapat digunakan untuk menyalin sebuah array seperti berikut
const original = ["Apple", "Banana", "Cherry"];
const copy = [...original];
console.log(copy);

// Spread operator pada dasarnya sama seperti menggunakan looping untuk mendapatkan
// nilai yang ada di dalam object maupun di dalam array
