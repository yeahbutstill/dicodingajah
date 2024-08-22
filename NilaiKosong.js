// JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, 
// yaitu null dan undefined. Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something).
let message = null;

console.log(message);

//Adapun undefined hadir dalam JavaScript sebagai nilai 
//implisit ketika kita mendeklarasikan variabel tanpa menginisialisasi dengan nilai apa pun.
let message1;

console.log(message1);

//Secara teknis, kita juga bisa secara eksplisit memberikan nilai undefined ke dalam sebuah variabel.
//Namun, hal ini tidak disarankan. Sebaiknya, gunakan null jika berniat untuk memberikan nilai kosong secara eksplisit.

//Sekilas, null dan undefined terlihat sama, tetapi sebenarnya mereka berbeda. 
//Perbedaan ini dapat terlihat lebih jelas ketika kita membandingkan objek yang propertinya bernilai null dan undefined dalam format JSON.

const name1 = {first: 'Dicoding', last: null};
const name2 = {first: 'Dicoding', latt: undefined};

console.log(JSON.stringify(name1));
console.log(JSON.stringify(name2));

//Properti yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON karena JSON tidak mendukung tipe data undefined. 
//Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.
