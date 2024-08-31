const result1 = console.log("JavaScript keren!");
console.log(result1);

// Lihat! Ternyata variabel result berisi undefined. 
// Hal ini karena memang method console.log tidak mengembalikan nilai apa pun 
// dan JavaScript tidak menganggap ini sebagai error.

// untuk memberikan kemampuan function mengembalikan nilai (return statement),
// kita gunakan kata kunci return dan diikuti nilai kembaliannya.
function sumNumbers(a, b) {
    const result = a + b;
    
    return result;
}

const result = sumNumbers(2, 4);
console.log("2 + 4 = ", result);

function generateGreetingWorldMessage() {
    return "Hello Dunia";

    console.log("Aku tidak akan tampil!");
}

const message = generateGreetingWorldMessage();
console.log(message);

function conversiCelsiusToFahrenheit(temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}

const temperatureInFahrenheit = conversiCelsiusToFahrenheit(90);
console.log(temperatureInFahrenheit);

