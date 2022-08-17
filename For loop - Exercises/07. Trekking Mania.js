function trekkingMania(input){
let index = 0;
let broiGrupi = Number(input[index]);
let musalaCount = 0;
let monblan = 0;
let kilimandjaro = 0;
let k2 = 0;
let everest = 0;
let obshtBroiHora = 0
index++
for (let i = 0; i<broiGrupi;i++){
    let horaVGrupa = Number(input[index]);
    index++
    obshtBroiHora+=horaVGrupa
    if(horaVGrupa<=5){
        musalaCount+=horaVGrupa
    } else if (horaVGrupa>5 && horaVGrupa<=12){
        monblan+=horaVGrupa;
    } else if (horaVGrupa>12&&horaVGrupa<=25){
        kilimandjaro+=horaVGrupa
    }else if (horaVGrupa>25&&horaVGrupa<=40){
        k2+=horaVGrupa
    }else if (horaVGrupa>40){
        everest+=horaVGrupa
    }
}
let procentmusala = musalaCount/obshtBroiHora*100;
let procentMonblan = monblan/obshtBroiHora*100;
let procentKilimandjaro = kilimandjaro/obshtBroiHora*100;
let procentk2 = k2/obshtBroiHora*100;
let procentEverest = everest/obshtBroiHora*100;
console.log(`${procentmusala.toFixed(2)}%`);
console.log(`${procentMonblan.toFixed(2)}%`);
console.log(`${procentKilimandjaro.toFixed(2)}%`);
console.log(`${procentk2.toFixed(2)}%`);
console.log(`${procentEverest.toFixed(2)}%`);

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
