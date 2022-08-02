function solve(input){
    let amountMoney = Number(input[0]);
    let krainaGodina = Number(input[1]);
    let nachalnaGodina = 1800;
    let curentAge = 18;
    let razhod = 0;
    for(i=nachalnaGodina; i <=krainaGodina;i++){
        if(nachalnaGodina%2===0){
razhod+=12000;
        } else{
            razhod+=12000+(50*curentAge)
        }
        nachalnaGodina++
        curentAge++
    }
    let diff = Math.abs(amountMoney-razhod)
    if (razhod<=amountMoney){
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else{
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}
solve([`50000`,`1802`])