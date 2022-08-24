function solve(input){
    let index = 0;
    let vhod = Number(input[index]);
    index++
    let sum = 0;
    while(sum<vhod){
        let nextnumber = Number(input[index])
        index++
        sum+=nextnumber
    }
    console.log(sum);
}
solve(["100",
"10",
"20",
"30",
"40"])
