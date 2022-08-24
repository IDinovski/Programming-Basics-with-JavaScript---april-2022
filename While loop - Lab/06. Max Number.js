function solve(input){
    let index = 0;
    let vhod = input[index];
        index++
    let min = Number.MAX_SAFE_INTEGER;
    while(vhod!==`Stop`){
        let num = Number(vhod)

        if (num<min){
            min = num
        }
        vhod = input[index];

        index++
    }
    console.log(min);
}
solve(["100",
"99",
"80",
"70",
"Stop"])
