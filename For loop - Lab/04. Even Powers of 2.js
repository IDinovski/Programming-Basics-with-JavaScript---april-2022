function solve(input){
    let n = Number(input[0]);
    let num = 2
    for (let i = 0; i<=n; i++ ){
        if (i%2===0){
console.log(Math.pow(num, i));
        }
        }
    }
solve([4])