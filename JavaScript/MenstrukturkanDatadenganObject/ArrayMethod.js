// Perlu diketahui bahwa Array memiliki banyak sekali method atau fungsi bawaan 
// yang dapat digunakan untuk memudahkan proses pengelolaan atau penggunaanya. 
// kita hanya akan membahas beberapa method Array yang sering digunakan dalam
// kehidupan sehar-hari oleh programmer Javascript

// Reverse
// Method ini adalah method yang digunakan untuk mengembalikan nilai Array.
// Method reverse() mengembalikan nilai array dengan element yang dibalik
const myArray = ["Android", "Data Science", "Web"];
myArray.reverse();
console.log(myArray);

// Element pertama Array akan menjadi element terakhir dan yang akhir akan dibalik
// menjadi element pertama. Method reverse tidak akan membuat Array baru,
// tetapi mengatur ulang element tersebut di dalam Array yang sudah ada.


// Sort
// Method ini adalah method yang digunakan untuk mengurutkan nilai Array,
// Loh, katanya Array sudah menyimpan data secara terurut kok masih perlu mengurutkan
// Array menggunakan method sort?
// Memang array sudah mengurutkan data sesuai dengan index tetapi mengurutkan
// berdasarkan index saja belum cukup.

// Terkadang, kita butuh untuk mengurutkan array berdasarkan kriteria tertentu
// sesuai dengan kebutuhan applikasi. Secara default, Array akan diurutkan secara 
// ascending. Contohnya seperti berikut:
const myFuckingArray = ["Web", "Android", "Data Science", "Java", "Spring Boot"];
myFuckingArray.sort();
console.log(myFuckingArray);

// Secara default, method sort akan mengurutkan berdasarkan abjadnya


