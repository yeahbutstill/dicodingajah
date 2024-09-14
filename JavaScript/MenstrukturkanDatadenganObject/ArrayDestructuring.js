// Desctructuring digunakan untuk melihat isi dari Array. Desctructuring cukup mudah
// dilakukan yaitu dengan menggunakan kurung siku yang di dalamnya adalah nama variabel
// yang kita assign. Kemudian diikuti dengan assignment operator sama dengan (=) dan
// Array yang ingin diambil nilainya.
const introduction = ["Hello", "DNL", null, undefined, ];
const [greeting, name, errorEnggaYa, masaSihNe, kosong] = introduction;
console.log(greeting);
console.log(name);
console.log(errorEnggaYa);
console.log(masaSihNe);
console.log(kosong);

// Dapat dilihat bahwa variabel greeting didapatkan dari Array introduction tanpa 
// harus mengaksesnya menggunakan index. Destructuring Array mempermudah kita
// untuk memecahkan struktur data menjadi bagian-bagian yang lebih kecil seperti 
// contoh kode di atas. Destructuring Array hanya dapat dilakukan jika Array tersebut
// tidak bernilai Null atau Undifined. Ketika melakukan destructuring pada Array yang
// bernilai Null atau Undifined akan menyebabkan error.


