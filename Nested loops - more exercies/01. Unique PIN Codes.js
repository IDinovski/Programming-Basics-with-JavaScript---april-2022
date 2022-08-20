function solve(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let thirdNum = Number(input[2]);
    for(let a = 1;a<=firstNum;a++){
        for(let b = 1;b<=secondNum;b++){
            for(let c = 1; c<=thirdNum;c++){
                if(a%2===0 && c %2===0){
                    if(b===2 ||b===3||b===5||b===7){
                        console.log(`${a} ${b} ${c}`);
                    }
                }
            }
        }
    }
}
solve([3,5,5])