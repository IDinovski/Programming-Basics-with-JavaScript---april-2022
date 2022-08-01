function celsiusToFahrenheit(input){
    let celzii = Number(input[0]);
    let farenhait = celzii * 1.8 + 32;
    console.log(farenhait.toFixed(2));
}
celsiusToFahrenheit(["25"])