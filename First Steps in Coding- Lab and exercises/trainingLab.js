function trainingLab(input){
    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;
    let koridor = 100;
    let broiRedEdno = Math.trunc((h - koridor) / 70);
    let broiRedVtori = Math.trunc( w / 120);

    let broiMesta = (broiRedEdno*broiRedVtori) - 3;

    console.log(broiMesta);
}
trainingLab([" 15 "," 8.9 "])