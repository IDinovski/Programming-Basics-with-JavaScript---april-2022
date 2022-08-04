function solve(input){
    let tegloPratkiKilogrami = Number(input[0]);
    let tipUsluga = input[1];
    let razstoqnieKilometri = Number(input[2]);

   let pod1Kg = 0.03;
   let edinDo10 = 0.05;
   let desetoDo40 = 0.10;
   let chetireseDo90 = 0.15;
   let devedeseDo150 = 0.20;


let cenaDostavka = 0;
if(tegloPratkiKilogrami<=1){
cenaDostavka = pod1Kg*razstoqnieKilometri
}else if (tegloPratkiKilogrami>1&&tegloPratkiKilogrami<=10){
    cenaDostavka = edinDo10*razstoqnieKilometri
} else if (tegloPratkiKilogrami>10 && tegloPratkiKilogrami<=40){
    cenaDostavka = desetoDo40*razstoqnieKilometri
} else if (tegloPratkiKilogrami>40&&tegloPratkiKilogrami<=90){
    cenaDostavka = chetireseDo90*razstoqnieKilometri
}else if (tegloPratkiKilogrami>90&&tegloPratkiKilogrami<=150){
    cenaDostavka = devedeseDo150*razstoqnieKilometri
}

let expresspod1Kg = 0;
   let expressedinDo10 = 0;
   let expressdesetoDo40 = 0;
   let expresschetireseDo90 = 0;
   let expressdevedeseDo150 = 0;
switch(tipUsluga){
    case`express`:
    expresspod1Kg = 0.8*0.03;
    expressedinDo10 = 0.4*0.05;
    expressdesetoDo40 = 0.05*0.10;
    expresschetireseDo90 = 0.02*0.15;
    expressdevedeseDo150 = 0.01*0.20;
 break;
}
let nadcenka = 0
if(tegloPratkiKilogrami<=1){
    nadcenka =expresspod1Kg*tegloPratkiKilogrami *razstoqnieKilometri
    }else if (tegloPratkiKilogrami>1&&tegloPratkiKilogrami<=10){
        nadcenka = expressedinDo10*tegloPratkiKilogrami*razstoqnieKilometri
    } else if (tegloPratkiKilogrami>10 && tegloPratkiKilogrami<=40){
        nadcenka = expressdesetoDo40*tegloPratkiKilogrami*razstoqnieKilometri
    } else if (tegloPratkiKilogrami>40&&tegloPratkiKilogrami<=90){
        nadcenka = expresschetireseDo90*tegloPratkiKilogrami*razstoqnieKilometri
    }else if (tegloPratkiKilogrami>90&&tegloPratkiKilogrami<=150){
        nadcenka = expressdevedeseDo150*tegloPratkiKilogrami*razstoqnieKilometri
    }
    switch(tipUsluga){
        case`express`:
       cenaDostavka+=nadcenka
    }

console.log(`The delivery of your shipment with weight of ${tegloPratkiKilogrami.toFixed(3)} kg. would cost ${cenaDostavka.toFixed(2)} lv.`);
}
solve([87,"express",130])