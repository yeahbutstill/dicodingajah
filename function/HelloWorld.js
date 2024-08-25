const username = "yeahbutstill";
const temperatureInCelsius = 90;

function getHelloWorld() {
    console.log("Hello World");
}

function getHelloWorldUsername(username) {
    console.log("Hello " + username);
}

function convertCelsiusToFahrenheit(temperature) {
    const temperaturInFahrenheit = 9 / 5 * temperature + 32;

    console.log("Hasil konversi: ", temperaturInFahrenheit);
}

// hanya menampilkan nilai function
console.log(getHelloWorld);
console.log(getHelloWorldUsername);
console.log(convertCelsiusToFahrenheit);

// akan menjalankan isi function
getHelloWorld();
getHelloWorldUsername("yeahbutstill");
convertCelsiusToFahrenheit(temperatureInCelsius);