function solve(input){
    let month = input[0];
    let count = Number(input[1]);
    let priceApartamnt = 0;
    let priceStudio = 0;
switch(month){
    case `May`:
    case `October`:
                priceStudio = 50  ;
                priceApartamnt = 65;break;
    case `June`:
    case `September`:
            priceStudio = 75.20;
            priceApartamnt = 68.70;
        break;
    case `July`:
    case`August`:
        priceStudio = 76;
        priceApartamnt= 77;
    break;
}
if (month === `May` || month === `October` ){
    if(count>7 &&count<=14 ){
        priceStudio = priceStudio *0.95;

    } else if (count>14 ){
        priceStudio = priceStudio *0.70;
    }
    } else if (month === `June` || month === `September` ){
        if (count>14 ){
            priceStudio = priceStudio *0.80;
        }
    }
    if (count>14){
        priceApartamnt = priceApartamnt*0.90
    }
    priceApartamnt = priceApartamnt * count;
    priceStudio = priceStudio*count;
console.log(`Apartment: ${priceApartamnt.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
solve(["June",
"14"])
