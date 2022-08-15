function solve(input){
    let num = Number(input[0]);
    let result = 0;
    for (let i = 1; i<=10; i++){
result = num * i;
console.log(`${i} * ${num} = ${result}`);
    }
}
solve(["5"])