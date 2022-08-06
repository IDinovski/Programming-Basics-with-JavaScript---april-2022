function BonusScore(input){
    let nachalenBroiTochki = Number(input[0]);
    let bonusTochki = 0.00;
    let chetno = 0.00;
    let zavyshvaNaPet = 0.00
 if (nachalenBroiTochki <= 100){
     bonusTochki = 5;
 } else if (nachalenBroiTochki > 1000){
     bonusTochki = nachalenBroiTochki * 0.1;
 } else {
     bonusTochki = nachalenBroiTochki * 0.2;
 }
 if (nachalenBroiTochki % 2 === 0){
     chetno = 1;
 }
 if (nachalenBroiTochki % 10 === 5){
     zavyshvaNaPet = 2;
 }
 let izhod1 = bonusTochki+chetno+zavyshvaNaPet;
 let izhod2 = nachalenBroiTochki+bonusTochki+chetno+zavyshvaNaPet;
 console.log(izhod1);
 console.log(izhod2);
}
BonusScore ([175])
/*function BonusScore(input){
    let vhod = Number(input[0]);
    let bonus = 0.0;
    if (vhod<=100){
        bonus = 5;
    } else if (vhod >1000){
        bonus = vhod*0.1;
    } else {
        bonus = vhod*0.2;
    }
    if (vhod % 2 == 0){
        bonus +=1;
    } else if (bonus%10==5){
        bonus +=2;
    }
console.log(bonus);
console.log(vhod+bonus);
} */