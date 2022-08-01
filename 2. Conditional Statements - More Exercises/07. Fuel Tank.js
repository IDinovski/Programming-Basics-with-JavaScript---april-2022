function fueltank(input){
    let vidGorivo = String(input[0]);
    let kolichestvo = Number(input[1]);
    if (vidGorivo !== "Gasoline" && vidGorivo !== "Gas" && vidGorivo !== "Diesel"  ){
        console.log(`Invalid fuel!`);
    }
     else if (kolichestvo>=25){
        console.log(`You have enough ${vidGorivo}.`);
    } else {
        console.log(`Fill your tank with ${vidGorivo}!`);
    }
}