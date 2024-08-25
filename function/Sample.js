const username = "yeahbutstill";
const temperatureInCelsius = 90;
const a = 10;
const b = 10;

function sampleFunction(ParamA, ParamB) {
    console.log("Ambil dari parameter yang nilainya dari variable a dan b: ", ParamA, ParamB);
}

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
getHelloWorldUsername(username);
convertCelsiusToFahrenheit(temperatureInCelsius);
sampleFunction(a, b);