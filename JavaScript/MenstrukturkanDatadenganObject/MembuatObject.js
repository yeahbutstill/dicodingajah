// Ada berbagai cara untuk membuat object seperti menggunakan object constructor
// atau yang paling mudah adalah dengan menggunakan object literals.
// Membuat object dengan object literals sangat mudah
// yaitu cukup dengan menuliskan kurung kurawal {}

// Object Literals
const user = {};
const products = {name: "Sepatu", price: "23000"};

// Dapat dilihat bahwa salain membuat object dengan beberapa properti, kita juga dapat
// membuat object dengan properti kosong. Properti yang ada di dalam object dapat ditambahkan dan dihapus. Di dalam kurung kurawal tersebut dapat ditulis properti dari object.
//

console.log(user);
console.log(products);

// Properti memiliki key dan value. Key dari properti dapat berupa string dan value 
// dapat bernilai tipe data apa pun, seperti string, number, atau boolean.
// Properti yang ada di dalam object dipisahkan oleh koma (,)

const userTemp = { name : "Dicoding", 
    "Last Name" : "Indonesia", 
    age : 9,
};
console.log(userTemp);

// Anda bisa mencetak variable menggunakan console.log untuk melihat bentuk object jika ditampilkan pada console

// Kenapa kita menambahkan koma pada properti terakhir?
// Tujuannya adalah mempermudah kita untuk membacanya dan menghindari error
// karena lupa menulis koma ketika menambahkan properti baru setelah properti age.
// Beberapa bahasa pemrograman juga menyarankan untuk menuliskan koma pada
// akhir properti.
