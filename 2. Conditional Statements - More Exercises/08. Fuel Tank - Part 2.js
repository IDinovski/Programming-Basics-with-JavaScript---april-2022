function fuelTank(input){

    let benzin = 2.22;
    let dizel = 2.33;
    let gas = 0.93;
    
    let tipGorivo = String(input[0]);
    let kolichestvo = Number(input[1]);
    let karta = String(input[2]);
    if (karta === "Yes"){
        benzin = 2.22-0.18;
        dizel = 2.33-0.12;
        gas = 0.93-0.08;
    }
let krainaCena = 0;
if (tipGorivo === "Gas"){
    krainaCena = gas * kolichestvo
} else if (tipGorivo === "Gasoline"){
    krainaCena = benzin * kolichestvo;
} else if (tipGorivo === "Diesel"){
    krainaCena = dizel*kolichestvo;
}
if (kolichestvo>=20 && kolichestvo<=25){
    krainaCena = krainaCena*0.92;
} else if (kolichestvo>25){
    krainaCena = krainaCena*0.90
}

console.log(`${krainaCena.toFixed(2)} lv.`);
}
fuelTank (["Diesel","19","Yes"])