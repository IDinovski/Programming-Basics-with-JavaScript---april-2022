function cleaverLily(input){
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2])

    let toyCount = 0;
    let money = 0;
    let currentMoney = 0;

for (let i=1;i<=age;i++){
    if(i%2!==0){
        toyCount++;
    }else {
        money +=currentMoney;
        currentMoney+=10;
        money--
    }
}
money +=toyCount*toyPrice;
let diff = Math.abs(money-washingMashinePrice);
if(money >=washingMashinePrice){
    console.log(`Yes! ${diff.toFixed(2)}`);
} else {
    console.log(`No! ${diff.toFixed(2)}`);
}
}cleaverLily (["10","180.00","6"])
