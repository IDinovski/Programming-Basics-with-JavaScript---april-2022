function solve(input){
    let lyubovnoPoslaniq = 0.60;
    let vosychnaRoza = 7.20;
    let kliuchodyrjatel = 3.60;
    let karikatura = 18.20;
    let kysmetIznenada = 22;

    let cenaMominskiParti = Number(input[0]);
    let broilyubovnoPoslaniq = Number(input[1]);
    let broiRozi = Number(input[2]);
    let broiKliuchodyrjatel = Number(input[3])
    let broiKarikaturi = Number(input[4]);
    let broiKysmeti = Number(input[5]);

    let obshtBroiArtikuli = broiKarikaturi+broilyubovnoPoslaniq+broiKliuchodyrjatel+broiKysmeti+broiRozi
    let obshtaPechalba =broiKarikaturi*karikatura+broilyubovnoPoslaniq*lyubovnoPoslaniq+broiKliuchodyrjatel*kliuchodyrjatel+broiKysmeti*kysmetIznenada+broiRozi*vosychnaRoza
if (obshtBroiArtikuli>=25){
    obshtaPechalba=0.65*obshtaPechalba
}
obshtaPechalba=0.90*obshtaPechalba;
let diff = Math.abs(cenaMominskiParti-obshtaPechalba);
if(obshtaPechalba>=cenaMominskiParti){
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
}else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
}

}
solve([40.8,
    20,
    25,
    30,
    50,
    10
    ])