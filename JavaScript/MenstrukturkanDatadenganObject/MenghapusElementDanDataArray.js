// Data pada Array dapat dihapus menggunakan keyword delete.
// Untuk menghapus data yang diinginkan, kita perlu mengetahui nilai
// Indeksnya terlebih dahulu. Contohnya seperti di bawah ini 
// yang akan menghapus data Array pada indeks ke-1.
const myFuckingArray = ["Android", "Data Science", "Web"];
delete myFuckingArray[1];
console.log(myFuckingArray);

// Data pada Array sudah berhasil dihapus, tetapi element-nya masih ada.
// Lalu bagaimana cara untuk menghapus element dan datanya? Untuk melakukan hal itu
// dapat dilakukan dengan menggunakan method splice() seperti berikut ini.
myFuckingArray.splice(1, 1);
console.log(myFuckingArray);

// Method splice membutuhkan dua parameter yaitu indeks dari element yang ingin dihapus
// dan jumlah element yang ingin dihapus. Pada contoh di ataas, kita menghapus 
// element indeks ke-1 dan jumlah element yang dihapus adalah 1. 
// Lalu bagaimana caranya kita ingin menghapus dua element dari Array?
myFuckingArray.splice(0, 2);
console.log(myFuckingArray);

// Terakhir. ada cara lainnya yaitu menggunakan mehtod shift dan pop. 
// Kekurangan dari kedua method ini adalah tidak sefleksibel delete dan splice
// karena shift hanya menghapus element pertama dan pop menghapus element terakhir
const myFuckingShift = ["Android", "Data Science", "Web"];
myFuckingShift.shift();
console.log(myFuckingShift);

const myFuckingPop = ["Makan", "Minum", "Solat", "Kerja"];
myFuckingPop.pop();
console.log(myFuckingPop);
