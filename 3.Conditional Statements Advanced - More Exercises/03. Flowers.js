function flowers(input){
let hrizantemi = Number(input[0]);
let rozi = Number(input[1]);
    let laleta = Number(input[2]);
    let sezon = input[3];
    let praznik = input[4];
    let cenahriz = 0
    let cenarozi = 0
    let cenalale = 0
    let obshtBroi = hrizantemi+rozi+laleta;
    switch(sezon){
        case`Spring`:
        case `Summer`:
            cenahriz = 2;
            cenarozi = 4.10;
            cenalale = 2.50; break;
            case`Autumn`:
            case`Winter`:
            cenahriz = 3.75;
            cenarozi = 4.50;
            cenalale = 4.15; break;
    }
    switch(praznik){
        case `Y`:
            cenahriz = cenahriz*1.15;
            cenarozi = cenarozi*1.15;
            cenalale = cenalale*1.15; break;
    }
    let buket = hrizantemi*cenahriz+rozi*cenarozi+laleta*cenalale;
    if (laleta>7 && sezon === `Spring`){
buket = buket*0.95;
    }
    if( rozi>=10 && sezon===`Winter`){
        buket = buket*0.90
    }
    if(obshtBroi>20){
        buket = buket*0.80;
    }
    buket=buket+2
    console.log(buket.toFixed(2));
}
flowers([`2`,`4`,`8`,`Spring`,`Y`])