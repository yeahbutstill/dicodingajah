// Backticks sering disebut juga sebagai template literals 
// karena memungkinkan kita menyisipkan JavaScript expressions untuk 
// membentuk nilai string menggunakan notasi ${}.
const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);
