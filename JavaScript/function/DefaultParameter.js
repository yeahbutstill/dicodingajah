// Tahukah Anda bahwa argument dapat bernilai undefined 
// jika kita tidak beri nilai apa pun dalam parentheses saat function dipanggil? 
// Lalu, apa yang akan terjadi jika function body tetap dijalankan dalam keadaan 
// seperti itu? Mari kita lihat bersama.
function convertCelsiusToFahrenheit(temperature) {
    const temperaturFahrenheit = (9/5) * temperature + 32;
    console.log("Hasil konversi: ", temperaturFahrenheit);
}

convertCelsiusToFahrenheit();

// Wah, hasilnya adalah NaN (Not-a-Number). Anda masih ingat dengan nilai ini, kan? 
// Nilai tersebut hadir karena salah satu operan dalam proses kalkulasi bukan 
// bertipe number ataupun numerik, tetapi undefined. 
// Nah, ini adalah masalah nyata yang tidak kita inginkan dan perlu diselesaikan.

// Sebetulnya, hal ini bisa kita selesaikan menggunakan conditional statement. 
// Kita bisa periksa bahwa jika argument bernilai undefined, jangan lakukan proses kalkulasi.
function handleArgumentUndefined(temperature) {
    if (temperature !== undefined) { // conditional statement (perintah kondisi)
        const temperatureInFahrenheit = 9 / 5 * temperature + 32;

        console.log("Hasil konversi: ", temperatureInFahrenheit);
    }
}

handleArgumentUndefined();


function defaultValueInParameter(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log("Hasil konversi: ", temperatureInFahrenheit);
}

// Menggunakan default value dari parameter function
defaultValueInParameter();

// Bagaimana jika kita ingin mengubah nilainya? Tenang, 
// kita dapat memberikan nilai argument seperti biasanya. 
// Masukkan saja nilai argument dalam parentheses saat function dijalankan. 
// Nilai tersebut akan menggantikan default value.
// Jika mau, Anda dapat bermain langsung pada interactive code berikut.

// Menggantikan nilai default value
defaultValueInParameter(90);

const namaSaya = "DNL";
const namaDia = 'MY';
const namaDiaLagi = 1;

console.log(namaSaya == namaDia);
console.log(namaDia === namaDiaLagi);
