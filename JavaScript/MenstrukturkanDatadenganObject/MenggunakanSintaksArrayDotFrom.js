// Cara lain untuk membuat array adalah menggunakan Array.from Contohnya seperti dibawah ini
const foo = Array.from('foo');
console.log(foo);

// Array.from merupakan method untuk membuat array yang diperkenalkan di ES6.
// Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini
const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer);