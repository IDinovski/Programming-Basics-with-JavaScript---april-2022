function solve(input){
 let rent = Number(input[0])
 let oscars = 0.70*rent;
 let keturing = 0.85*oscars;
 let sound = 0.5*keturing;
 let total = rent+oscars+keturing+sound;
 console.log(total.toFixed(2));
}
solve([3500])