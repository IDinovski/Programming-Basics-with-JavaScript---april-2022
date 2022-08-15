function weatherForecast (input){
    let vreme = String(input[0]);
if (vreme === `sunny`){
    console.log(`It's warm outside!`);
} else{
    console.log(`It's cold outside!`);
}
}
weatherForecast (["sunny"])