// Setelah berhasil membuat object, tentunya kita akan mengakses properti yang ada di
// object tersebut. Object yang sudah dibuat dapat diakses dengan beberapa teknik.

// Mengakses menggunakan dot (.)
// Cara pertama untuk mengakses nilai properti yang ada di object adalah mengguanakan
// dot notation (.) 
// Contohnya ketika kita ingin mengakses propert name dari obejct user dapat 
// ditulis seperti berikut ini
const user = { name : "Dicoding", lastName : "Setiawan", age : 9, alamat : "Depok"};
console.log(user.name);
console.log(user.lastName);
console.log(user.alamat);
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
const user1 = { name : "Maya", "last name" : "Tri", age : 9, alamat : "Depok"};
console.log(user1["name"]);
console.log(user1["last name"]);
console.log(user1["age"]);
console.log(user1["alamat"]);
console.log("\n");

// Tulislah nama object terlebih dahulu dan di dalam kurung siku 
// kita menuliskan nama properti yang ingin diakses. 
// Dengan menggunakan square bracket, key yang memiliki spasi pun dapat diakses.

// Mengakses menggunakan object destructuring
// Salain itu nilai properti dari object dapat diakses juga dengan cara lainnya yaitu
// menggunakan object destructuring. Desctructuring dalam JavaScript merupakan
// sintaksis yang dapat mengeluarkan nilai dari properti object ke dalam satuan
// yang lebih kecil (variable).
const buah = {
    "name" : "Apel",
    "beliDari" : "Bogor",
};

// Destructuring object
const {name, beliDari} = buah;
console.log(name, beliDari);

// Desctructuring object yang key-nya tidak ada akan mengembalikan nilai undefined.
// Oleh karena itu, kita bisa memanfaatkan default value ketika destructuring object
// seperti berikut ini agar nilainya tidak undifined.

const binatang = {
    "nameBinatang" : "Buaya", 
    "beradaDi" : "Air dan Darat"
};

// Desctructing object
const {nameBinatang, beradaDi, isMale = false} = binatang;
console.log(isMale);

// Karena di Object binatang todal ada properti isMale, ketika properti tersebut 
// diakses akan mengembalikan nilai false sesuai dengan nilai default yang kita berikan

// Object destructing sangat berguna sekali ketika anda memiliki object dengan 
// properti yang banyak dan ingin mendapatkan nilai masing-masing properti
// seprti contoh berikut:
const matkul = {
    id : 24,
    matKulName: "DSA",
    dosen: "Dnl",
    sks: 6,
    sudahAmbil: false,
};

// Untuk mendapatkan masing-masing properti dari object matkul, anda hanya perlu 
// melakukan object destructing seperti berikut:
const {id, matKulName} = matkul;
console.log(matkul);
console.log("\n");
console.log(id, matKulName);

// Tanpa menggunakan object destructuring. anda akan melakukan hal berikut:
const namaMatakuliah = matkul.matKulName;
const berapaSks = matkul.sks;
console.log("\n");
console.log(namaMatakuliah, berapaSks);
// Hasilnya, object destructuring sangat memudahkan hidup para programmer Javascript
// karena kita tidak perlu lagi melakukan hal yang rumit hanya untuk mendapatkan 
// nilai properti dari object.
//
// Perlu dicatat bahwa megakses properti yang tidak ada di dalam object akan
// menyebabkan error dan nilai kembaliannya adalah undifined yang mana
// hal ini jika tidak ditangani akan mengganggu program yang dibuat.

const obejectPropertiTidakAda = {name : "Dicoding"};
console.log("\n");
console.log(obejectPropertiTidakAda.age);

// Mengubah Nilai di Properti Object
// untuk mengubah nilai properti di object sangat mudah, asalkan kita 
// mengtahui nama object dan nama properti yang ingin diubah. 
// Memodifikasi object dapat dilakukan dengan assignment operator (=)
const account = {
    balance : 10000,
    debt : 10,
};

// Ditambah
account.balance += 20000;
// Ditimpah
account.debt = 100;

console.log(account.balance);
console.log(account.debt);

// Obejct account yang awalnya memiliki nilai properti balance 10000 ditambah 20000
// dan object debt berubah daro 10 menjadi 100.
// Sebentar seperinya ada yang aneh, Object account diinisialisasi menggunakan const.
// Kok bisa berubah nilainya? Bukan const bersifat immutable (tidak dapat diubah)?

// Nilai yang ada di object dapat diubah karena object berbeda dengan number, string,
// dan boolean yang nilainya tidak mungkin berubah. Selain itu, nilai properti dapat
// diubah karena kita hanya mengubah nilainya bukan menginisialisasi ulang properti 
// dari object tersebut. Ingat, mengubah dan menginisialisasi ulang adalah 
// hal yang berbeda.
//

// Menghapus properti di Object
// untuk menghapus properti pada object dapat menggunakan operator delete dengan
// menuliskan nama object lalu tanda titik dan diikuti nama propertinya
