// Map adalah tipe data yang mirip dengan Object yaitu menyimpan data dengan Key-Value
// Kalau sama seperti object, lalu apa fungsi map? Map berfungsi untuk menutupi 
// kekurangan dari object. Map deapat menggunakan key dengan Tipe Data apa pun,
// tidak seperti Object yang hanya menerima String.
// Jadi perbedaan mendasarnya terletak pada Key yang digunakan

// Membuat Map
// Map dapat dibuat dengan mudah yaitu menggunakan object map constructor
const map = new Map();
console.log(map);
console.log("\n");

const productMap = new Map([
    ["shoes", 500],
    ["cap", 350],
    ["jeans", 250]
]);
console.log(productMap);


// Menyimpan Nilai di Map
// Untuk menyimpan nilai ke dalam Map, gunakan method set. Set menerima dua nilai 
// yang pertama adalah Keynya dan yang kedua adalah Valuenya. Set memiliki struktur 
// seperti berikut: set(key, value).
const nilaiDiMap = new Map();
nilaiDiMap.set("name", "Maya Triyanti");
nilaiDiMap.set('husban', 'Dani');
console.log(nilaiDiMap);
console.log("\n");

// Selain menggunakan string sebagai key pada Map, kita juga dapa menggunakan number
// sebagai key-nya seperti berikut ini
const mapDenganNumber = new Map();
mapDenganNumber.set(1, "Number one");
console.log(mapDenganNumber);
console.log("\n");


// Mengakses Nilai Di Map
// Setelah berhasil menyimpan nilai ke dalam map, kita dapat mengakses nilainya 
// berdasarkan key tertentu dengan method get.
const mengaksesNilaiDiMap = new Map();
mengaksesNilaiDiMap.set("name", "Dani");
console.log(mengaksesNilaiDiMap.get("name"));
console.log("\n");

// Pada contoh di atas key-nya adalah name dan nilai yang dikembalikan adalah "Dani"


// Menghapus Nilai di Map
// Menghapus nilai di map dapat menggunakan method delete. Method ini akan
// menghapus nilai spesifik berdasarkan key yang kita tentukan
const mengHapusNilaiDiMap = new Map();
mengHapusNilaiDiMap.set("Name", "Dani");
mengHapusNilaiDiMap.set("Last Name", "Setiawan");
mengHapusNilaiDiMap.set("Age", 31);
console.log(mengHapusNilaiDiMap);
console.log("\n");

mengHapusNilaiDiMap.delete("Last Name");
console.log(mengHapusNilaiDiMap);

// Kembalian dari method delete akan bernilai true jika element tersedia
// atau berhasil dihapus. Namun, kembaliannya juga dapat bernilai false
// jika element yang ingin dihapus tidak ada.
