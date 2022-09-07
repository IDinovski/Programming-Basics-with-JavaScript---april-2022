function solve(input){
    let bitcoin = 1168;
    let dolar = 1.76;
    let evro = 1.95;
    let china = (0.15*dolar);
let amountBitcoin = Number(input[0]) * bitcoin;
let amountChina = Number(input[1]) * china;
let procent = Number(input[2]) / 100;

let total = (amountBitcoin + amountChina)/evro;
let answer = total - (procent*total)

console.log(answer.toFixed(2));
}

solve([1,5,5])