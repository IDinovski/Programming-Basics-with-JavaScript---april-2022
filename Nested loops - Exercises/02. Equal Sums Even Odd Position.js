function solve(input){
    let start = input[0];
    let end = input[1];
let result = "";
let bulflag = true;
    for (let i = start; i <=end;i++){
        let currentNumber = ""+i;
        let start1 = Number(currentNumber[0]);
        let start2 = Number(currentNumber[1]);
        let start3 = Number(currentNumber[2]);
        let start4 = Number(currentNumber[3]);
        let start5 = Number(currentNumber[4]);
        let start6 = Number(currentNumber[5]);
        let sumaNeChetni = start2+start4+start6;
        let sumachetni = start1+start3+start5;
if(sumaNeChetni===sumachetni){
    result+= `${currentNumber} `
    bulflag = false
}
    }
    if(!bulflag){
    console.log(result);
    }

}
solve(["100049",
"100050"])
