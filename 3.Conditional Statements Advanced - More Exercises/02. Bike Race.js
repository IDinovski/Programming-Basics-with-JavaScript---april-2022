function bikeRace(input){
    let countYoung = Number(input[0]);
    let countOld = Number(input[1]);
    let typeRace = input[2];
    let taxY = 0;
    let taxO = 0;
    switch(typeRace){
        case `trail`:
            taxY = 5.50;
            taxO = 7;break;
        case `cross-country`:
            taxY = 8;
            taxO = 9.50;break;
        case `downhill`:
            taxY = 12.25;
            taxO = 13.75;break;
        case `road`:
            taxY = 20;
            taxO = 21.50;break;
           }
           if ( typeRace===`cross-country`&& countOld+countYoung>=50){
               taxY = 0.75*taxY;
               taxO = 0.75*taxO;
           }
           let amount =0.95*(countYoung*taxY+countOld*taxO)
console.log(amount.toFixed(2));
        }