// Sebelum mengakhiri materi ini, ada hal yang perlu kita ketahui. 
// Ia adalah fitur hoisting dalam JavaScript. 
// Fitur ini memungkinkan kita menulis kode pemanggilan sebelum 
// kode pendeklarasian function. Berikut contohnya. 
greetWorld();
function greetWorld() {
    console.log("Hello, world");
}

// Lihat! Kita menjalankan function greetWorld sebelum kode function declaration. 
// Sebetulnya, ini bukanlah praktik yang baik, tetapi kami ingin Anda mengetahui 
// bahwa JavaScript mampu melakukan ini. Jika ingin lebih dalam memahami fitur hoisting,
// Anda dapat menyimak artikel Hoisting dari MDN.

