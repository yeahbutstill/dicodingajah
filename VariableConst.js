// Namun, ketika Anda membuat variabel dengan const, nilai yang ditetapkan ketika variabel dibuat, tidak bisa diubah. Jika Anda coba untuk mengubahnya, program akan terhenti dan menghasilkan error.

const username = 'Dicoding';

console.log('Sebelum diubah:', username);

username = 'Dani'; // Error karena variable username constant

console.log('Setelah diubah', username); // statement ini tidak akan pernah dieksekusi

// Variabel yang dibuat dengan const juga umum disebut sebagai constant (konstan) karena dalam matematika istilah tersebut memiliki arti tetap atau tidak berubah-ubah.

// Perhatian
// Perubahan nilai yang tidak terduga menjadi salah satu akar permasalahan yang sering terjadi dalam pemrograman. 
// Oleh sebab itu, kami rekomendasikan untuk selalu membuat variabel dengan const jika memang variabel tersebut tidak direncanakan untuk diubah nilainya.
