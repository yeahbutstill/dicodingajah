// Menghapus properti di Object
// untuk menghapus properti pada object dapat menggunakan operator delete dengan
// menuliskan nama object lalu tanda titik dan diikuti nama propertinya
const user = {
    name : "Dicoding",
    lastName : "Indonesia",
    age : 20,
};

console.log(user);
console.log("\n");
delete user.age;
console.log(user);
console.log("\n");


// Selain menggunakan dot anotation (.), kita juga bisa menggunakan operator 
// delete menggunakan tanda kurung sikut ([])
delete user["lastName"];
console.log(user);
