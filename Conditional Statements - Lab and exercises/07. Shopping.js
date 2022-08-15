function shopping(input){
    let budget = Number(input[0]);
    let broiVideokarti = Number(input[1]);
    let broiProcesori = Number(input[2]);
    let broiRamPamet = Number(input[3]);

    let cenaVideokarta = 250;
    let cenaProcesor = (cenaVideokarta*broiVideokarti) *0.35;
    let cenaRamPamet = (cenaVideokarta*broiVideokarti) *0.10;
    let krainacena = broiVideokarti*cenaVideokarta + broiProcesori*cenaProcesor+broiRamPamet*cenaRamPamet;
    if (broiVideokarti>=broiProcesori){
        krainacena = krainacena*0.85;
    }
    let diff = Math.abs(budget-krainacena);

    if (budget>=krainacena){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}
shopping (["920.45",
"3",
"1",
"1"])
