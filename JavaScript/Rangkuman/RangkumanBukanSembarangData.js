// Sealamat anda sudah berada di penghujung modul Bukan Sembarang Data.
// Mari kita uraikan meteri yang sudah Anda pelajari untuk menyegarkan 
// ingatan Anda tentang materi tersebut.

// Menstrukturkan Data dengan Object
// Struktur data pertama yang kita bahas adalah Object. Object adalah kumpulan
// parangan Key-Value dan merupakan tipe data yang bukan primitif.

// Membuat Object
// membuat object dengan object literals sangat mudah yaitu cukup dengan menuliskan
// kurung kurawal {};
const users = {};
const products = {name: "Sepatu", price: "230000"};
// Di dalam kurung kurawal tersebut dapat ditulis properti dari object

// Mengakses Properti di Object
// Object yang sudah dibuat dapat diakses dengan 3 teknik
// Mengakses menggunakan dot (.)
// Cara pertama untuk mengakses nilai properti yang ada di object adalah menggunakan
// dot notation (.)
const user = {
    name: "Dicoding", 
    lastName: "Indonesia", 
    age: 9
};
console.log(user.name);
console.log(user.lastName);
console.log(user.age);
// Kita dapat memanggil nama object, kemudian menuliskan tanda titik yang diikuti 
// dengan nama propertinya.

// Mengakses Menggunakan square bracket
// untuk menutupi kekurangan menggunakan dot anotation, ada cara lain yaitu 
// menggunakan square bracket

const userAgain = {
    name: "Dicoding",
    "last name": "Indonesia",
    age: 9
};

console.log("\n");
console.log(userAgain["last name"]);
// Tulislah nama object terlebih dahulu dan di dalam kurung siku kita menuliskan nama
// properti yang ingin diakses


// Mengakses menggunakan object destructuring
// Selain itu nilai properti dari object dapat diakses juga dengan cara lainnya yaitu
// menggunakan object destructuring.
const userDesctructuring = {
    "name": "Dicoding",
    "lastName": "Indonesia",
    age: 9
};

const {name, lastName} = userDesctructuring;
console.log(name, lastName);
console.log("\n");

// Mengubah nilai di properti Object
// Memodifikasi object dapat dilakukan dengan assignment operator (=)
const account = { balance: 1000, debt: 10 };
account.balance = 200000;
console.log(account.balance);
console.log("\n");

// Menghapus properti di Object
// Untuk menghapus properti pada object dapat menggunakan operator delete dengan
// menuliskan nama object lalu tanda titik dan diikuti nama propertinya.
const userName = {
    "name": "Dicoding",
    "last name": "Indonesia",
    age: 9
};

delete userName.age;
console.log(userName);

// Menstrukturkan Data dengan Array
// Array adalah struktur data spesial yang dapat menyimpan kumpulan data
// yang terurut. Membuat Array dapat dilakukan dengan tiga cara di bawah ini:

// Menggunakan object constructor
// Array dapat dibuat dengan constructor new Array() seperti berikut.
const users = new Array();
const numbers = new Array(5);

// Menggunakan sintaks Array.from
// Cara lain untuk membuat Array adalah menggunakan Array.from. Contohnya seperti
// di bawah ini.
const foo = Array.from("Dani");
console.log(foo);

// Menggunakan Array literal
// Terakhir, cara yang paling mudah, singkat, dan disarankan untuk membuat array adalah
// menggunakan Object Literals.
const array = [];
const buah = ["Apple", "Banana", "Cherry"];
console.log(array);
console.log(buah);

// Menggunakan Element Array
// Data di dalam array terurut sehingga untuk mengakses dapat dengan mudah dengan
// menggunakan nilai indeks-nya, indeks merupakan angka yang digunakan untuk
// merujuk ke nilai di dalam array, sehingga kita bisa menambahkan, mengubah, atau 
// menghapus nilainya.
const myArray = [42, 55, 30];
console.log(myArray[1]);

// Manipulasi Nilai Array
// manipulasi nilai pada Array dapat dilakukan dengan menggunakan indexing dan method
// push.
//
// Menggunakan indexing
// Misalnya, kita memiliki sebuah Array seperti berikut:
const myArray = [1, 2, 3, 4, 5, 6];
// Lalu, bagaimana caranya untuk mengubah nilai element ke-2?
// Perhatikan langkah berikut
myArray[1] = 10;
console.log(myArray);

// Menggunakan push
// Push adalah cara yang kita gunakan untuk menambahkan nilai ke dalam Array
// pada element terakhir.
// Misalnya kita memiliki Array seperti berikut.
const myArray = [1, 2, 3, 4, 5];

// Untuk menambahkan nilai ke dalam array menggunakan method push, dapat dilakukan
// dengan cara menuliskan nama array-nya diikuti tanda titik dan method push 
// beserta nilai yang ingin ditambahkan yaitu 6 seperti berikut
myArray.push(6);

// Menghapus Element dan Data Array
// Data pada array dapat dihapus menggunakan keyword delete.
const myArray = ["Android", "Data Science", "Web"];
delete myArray[1];
console.log(myArray);

// Lalu bagaimana cara untuk menghapus element dan datanya? Untuk melakukan hal itu
// dapat dilakukan dengan menggunakan method splice() seperti berikut ini.
const myArray = ["Android", "Data Science", "Web"];
myArray.splice(1, 1);
console.log(myArray);

// Terakhir, ada cara lainnya yaitu menggunakan method shift dan pop.
const myArray = ["Android", "Data Science", "Web"];
myArray.shift();
console.log(myArray);

const myArray = ["Android", "Data Science", "Web"];
myArray.pop();
console.log(myArray);


// Array Destructuring
// Destructuring cukup mudah dilakukan yaitu dengan menggunakan kurung siku yang
// di dalamnya adalah nama variabel yang kita assign. Kemudian diikuti dengan
// Assignment operator sama dengan (=) dan Array yang ingin diambil nilainya.
const introduction = ["Hello", "Arsy"];
const [greeting, name] = introduction;
console.log(greeting);
