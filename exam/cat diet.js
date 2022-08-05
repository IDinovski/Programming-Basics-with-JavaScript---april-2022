function solve(input){
    let procentMaznini = Number(input[0]);
    let procentProteini = Number(input[1]);
    let procentVyglehidrati = Number(input[2]);
    let obshtBroiKalorii = Number(input[3]);
    let procentVoda = Number(input[4]);

let obshtGramMaznini = ((procentMaznini/100)*obshtBroiKalorii)/9;
let obshtGramProteini = ((procentProteini/100)*obshtBroiKalorii/4);
let obshtGramVyglehidrati = ((procentVyglehidrati/100)*obshtBroiKalorii)/4;

let tegloNaHranata = obshtGramMaznini+obshtGramProteini+obshtGramVyglehidrati
let kaloriiEdinGramHrana = obshtBroiKalorii/tegloNaHranata;
let otgovor = kaloriiEdinGramHrana - ((procentVoda/100)*kaloriiEdinGramHrana)


console.log(otgovor.toFixed(4));
}
solve(["60","25","15",2500,60])