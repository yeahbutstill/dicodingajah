// Function expression benar-benar bisa mengubah cara kita membuat function. 
// Namun, ada alternatif sintaksis lain dalam JavaScript yang bisa lebih
// mengubah cara kita membuat function. Sintaksis tersebut bernama
// arrow function, ini cara baru yang bisa kita manfaatkan dalam membuat funtion
//

let temperatureInFahrenheit = null;
//Deklarasi function dengan Regular Function
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log("Hasil konversi, Dengan Regular Function: ", temperatureInFahrenheit);

// Penyataan utama yang perlu dipecahkan adalah bagaimana notasi arrow function?
// Deklarasi  Function Dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log("Hasil konversi Dengan Arrow Function", temperatureInFahrenheit);

// Arrow function ternyata menghilangkan kewajiban kita menaruh kata kunci function 
// di sana. Sebagai gantinya, kita wajib menambahkan tanda panah (=>) setelah parameter 
// Ini disebut sebagai notasi fat arrow. 
// Selain itu, arrow function juga memiliki function body sebagaimana regular function.
