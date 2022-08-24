function solve(input){
    let num = Number(input[0])
    let nextnum = 0
    while(nextnum<num){
        nextnum= (nextnum*2)+1
        if(nextnum>num){
break;
        }
        console.log(nextnum);
    }

}
solve([3])

