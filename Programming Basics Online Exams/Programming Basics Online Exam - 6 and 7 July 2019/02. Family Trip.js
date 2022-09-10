function solve(input){
    let budget = Number(input[0]);
    let sleeps = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let procentOthers =  ((Number(input[3])/100)*budget);

let priceForSleeps = sleeps*pricePerNight;
if(sleeps>7){
    priceForSleeps=0.95*priceForSleeps
}
let total = priceForSleeps+ procentOthers
let diff = Math.abs(budget-total)

if(budget>=total){
    console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
}else{
    console.log(`${diff.toFixed(2)} leva needed.`);
}
}
solve([700.50, 8, 100, 2])