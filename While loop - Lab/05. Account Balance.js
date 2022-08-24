function solve(input){
    let index = 0;
    let balance = 0;
    let vhod = input[index];
    index++
    while(vhod!=="NoMoreMoney"){
        let money = Number(vhod)
        if(vhod <= 0){
            console.log(`Invalid operation!`);
            break;
        }
        balance+=Number(vhod);

        console.log(`Increase: ${money.toFixed(2)}`);
        
        vhod = input[index];
        index++
        
    }
    console.log(`Total: ${balance.toFixed(2)}`);

}
solve(["5.51", 
"0",
"100",
"NoMoreMoney"])
