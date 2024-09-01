// Setelah berhasil membuat object, tentunya kita akan mengakses properti yang ada di
// object tersebut. Object yang sudah dibuat dapat diakses dengan beberapa teknik.

// Mengakses menggunakan dot (.)
// Cara pertama untuk mengakses nilai properti yang ada di object adalah mengguanakan
// dot notation (.) 
// Contohnya ketika kita ingin mengakses propert name dari obejct user dapat 
// ditulis seperti berikut ini
const user = { name : "Dicoding", lastName : "Setiawan", age : 9, };
console.log(user.name);
console.log(user.age);
console.log("\n");

// Kita dapat memanggil nama object, kemudian menuliskan tanda titik yang diikuti 
// dengan nama propertinya. Sebelum titik adalah nama object-nya dan setelah titik
// adalah nama properti yang ingin diakses. Kekurangan dari dot notation adalah
// nama key yang ingin diakses harus valid. Tidak boleh mengandung spasi, tidak
// boleh diawali dengan angka dan tidak boleh mengandung spesial karakter.
//

// Mengakses menggunakan square bracket
// Untuk menutupi kekurangan menggunakan dot notation, ada cara lain yaitu menggunakan
// square bracket.
const user1 = { name : "Maya", "last Name" : "Tri", age : 9,};
console.log(user["name"]);
console.log(user["age"]);
console.log("\n");

// Tulislah nama object terlebih dahulu dan di dalam kurung siku 
// kita menuliskan nama properti yang ingin diakses. 
// Dengan menggunakan square bracket, key yang memiliki spasi pun dapat diakses.

// Mengakses menggunakan object destructuring
// Salain itu nilai properti dari object dapat diakses juga dengan cara lainnya yaitu
// menggunakan object destructuring. Desctructuring dalam JavaScript merupakan
// sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan
// yang lebih kecil (variable).

