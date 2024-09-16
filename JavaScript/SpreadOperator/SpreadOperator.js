// Spread, memiliki arti sesuai dengan namanya, yaitu
// menyebarkan, Spread Operator digunakan untuk menyebarkan nilai yang ada 
// pada Object dan Array. Spread Operator yang ditandai dengan sintaks tiga titik
// (...) adalah fitur yang menarik dan membantu dalam pengelolaan Object dan Array.
// Dengan menggunakan Spread Operator, nilai Object dan Array dapat di-Iterable menjadi
// beberapa element

// Object
// Spread Operator di Object dapat dilakukan seperti berikut ini
const obj1 = {name: "Dicoding"};
const obj2 = {lastName: "Indonesia", address: "Jl. Batik Kumeli No 50"};
const newObj = {...obj1, ...obj2};
console.log(newObj);
console.log("\n");

// Dapat dilihat bahwa spread operator dapat mempermudah menggabungkan dua object.
// Selain mempermudah menggabungkan object, spread operator juga mempermudah untuk
// menyalin object seperti berikut ini.
const originalObj = {name: "Dicoding", age: 9};
const copiedObj = {...originalObj};
console.log(copiedObj);
