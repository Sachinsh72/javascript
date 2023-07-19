// 11. Unit converter

const celsius = 55;

function celsiusToFahrenheit(celsius) {
    console.log("Celsius To Fahrenheit");
    let d = celsius;
    if(d <= 0) {
        console.log(`${d}°C = 32°F`);
    }else{
        let fahrenheit ;
        fahrenheit = (d * 1.8) + 32;
        console.log(`${d}°C = ${fahrenheit}°F`);
    }
};

celsiusToFahrenheit(celsius);