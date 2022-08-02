function vacantion(input){
    let budget = Number(input[0]);
    let season = input[1];
    let nastanqvane = 0;
    let myasto = 0
    let cena = 0
    if (budget<=1000){
nastanqvane = `Camp`
switch(season){
    case`Summer`:
    myasto = `Alaska`;
    cena = 0.65*budget;break;
    case`Winter`:
    myasto = `Morocco`;
    cena = 0.45*budget;
}
    } else if (budget>1000 && budget<=3000){
        nastanqvane = `Hut`
switch(season){
    case`Summer`:
    myasto = `Alaska`;
    cena = 0.80*budget;break;
    case`Winter`:
    myasto = `Morocco`;
    cena = 0.60*budget;
    }
} else if (budget>3000){
    nastanqvane = `Hotel`
switch(season){
    case`Summer`:
    myasto = `Alaska`;
    cena = 0.90*budget;break;
    case`Winter`:
    myasto = `Morocco`;
    cena = 0.90*budget;
}
}
console.log(`${myasto} - ${nastanqvane} - ${cena.toFixed(2)}`);
}
vacantion([`800`,`Summer`])