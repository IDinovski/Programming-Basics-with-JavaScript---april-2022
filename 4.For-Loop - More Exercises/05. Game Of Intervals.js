function solve(input){
    let index = 0;
    let broiHodove = Number(input[index]);
    index++;
    let result = 0;
    let pyrviInterval =0
    let vtoriInterval =0;
    let tretiInterval = 0;
    let chetvyrtiInterval =0;
    let petiInterval = 0;
    let nevalidni = 0;
    for (let i = 0; i<broiHodove;i++){
        let tochkiHod = Number(input[index]);
        index++;
        if(tochkiHod>=0 && tochkiHod<=9){
            result+=0.20*tochkiHod;
            pyrviInterval++
        }else if(tochkiHod>=10 && tochkiHod<=19){
            result+=0.30*tochkiHod;
            vtoriInterval++
        }else if(tochkiHod>=20 && tochkiHod<=29){
            result+=0.40*tochkiHod;
            tretiInterval++
        }else if(tochkiHod>=30 && tochkiHod<=39){
            result+=50;
            chetvyrtiInterval++
        }else if(tochkiHod>=40 && tochkiHod<=50){
            result+=100;
            petiInterval++
        }else {
            nevalidni++
            result/=2
        }
    }
    console.log(result.toFixed(2));
    let procentPyrvi = pyrviInterval/broiHodove*100;
    console.log(`From 0 to 9: ${procentPyrvi.toFixed(2)}%`);
    let procentVtori = vtoriInterval/broiHodove*100;
    console.log(`From 10 to 19: ${procentVtori.toFixed(2)}%`);
    let tretiProcent = tretiInterval/broiHodove*100;
    console.log(`From 20 to 29: ${tretiProcent.toFixed(2)}%`);
    let procentChetvyrti = chetvyrtiInterval/broiHodove*100;
    console.log(`From 30 to 39: ${procentChetvyrti.toFixed(2)}%`);
    let procentPeti = petiInterval/broiHodove*100;
    console.log(`From 40 to 50: ${procentPeti.toFixed(2)}%`);
    let procentNevaliden = nevalidni/broiHodove*100;
    console.log(`Invalid numbers: ${procentNevaliden.toFixed(2)}%`);
}
