function solve(input) {
    let index = 0;
    let x = Number(input[index]);
    index++
    let y = Number(input[index]);
    index++;
    let result = Number(input[index]);
    index++;
    let counter = 0
    let a = 0
    let sbor = a + x
    let bulflag1 = false;
    let bulflag2 = true;
    for (x; x <= y; x++) {
        for (a = Number(input[0]); a <= y; a++) {
            sbor = a + x
            counter++
            if (sbor === result) {
                bulflag1 = true
                bulflag2 = false
                console.log(`Combination N:${counter} (${x} + ${a} = ${result})`);
                break;
            }
        }
if(bulflag1){
    break;
}
    }
    if(bulflag2){
        console.log(`${counter} combinations - neither equals ${result}`);
    }
}

solve(["88",
"888",
"1000"])




