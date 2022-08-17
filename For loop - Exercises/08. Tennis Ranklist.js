function tennis(input){
    let index = 0;
    let broiTurniri = Number(input[index]);
    index++
    let nachalnitochki = Number(input[index]);
    index++
    let tochki= 0;
    let winCount = 0
    for (i=0;i<broiTurniri;i++){
        let rezultat = input[index];
        index++
        switch(rezultat){
            case`W`:
            tochki+=2000;
            winCount++
            break;
            case`F`:
            tochki+=1200;break;
            case`SF`:
            tochki+=720;break
        }
    }
    let avaragePoints = Math.trunc(tochki/broiTurniri);
    let finalpoints = nachalnitochki+tochki;
    let procenti = (winCount/broiTurniri*100).toFixed(2)
console.log(`Final points: ${finalpoints}`);
console.log(`Average points: ${avaragePoints}`);
console.log(`${procenti}%`);
}
tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
