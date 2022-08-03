function solve(input){
    let index = 0;
    let broiStudenti = Number(input[index]);
    index++
    let fail = 0;
    let sreden = 0;
    let dobyr = 0;
    let top = 0;
    let obshta = 0
    for (let i = 0; i <broiStudenti;i++){
        let ocenka = Number(input[index]);
        index++;
        if (ocenka>=5){
            top++
            obshta+=ocenka
        }else if (ocenka < 5 && ocenka >=4){
            dobyr++
            obshta+=ocenka

        } else if (ocenka <4 && ocenka>=3){
            sreden++
            obshta+=ocenka

        }else {
            fail++
            obshta+=ocenka
        }
       
       
    }
    let procentTop = top / broiStudenti * 100;
    console.log(`Top students: ${procentTop.toFixed(2)}%`);
    let procentDobyr = dobyr / broiStudenti * 100;
    console.log(`Between 4.00 and 4.99: ${procentDobyr.toFixed(2)}%`);
    let procentSreden = sreden / broiStudenti * 100;
    console.log(`Between 3.00 and 3.99: ${procentSreden.toFixed(2)}%`);
    let procentFail = fail / broiStudenti * 100;
    console.log(`Fail: ${procentFail.toFixed(2)}%`);
    let avarage = obshta / broiStudenti;
    console.log(`Average: ${avarage.toFixed(2)}`);
}