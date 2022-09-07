function solve(input){
    let index = 0;
    let broiDni = Number(input[index]);
    index++
    let kmPerDay = Number(input[index]);
    index++
    let countKilometers = kmPerDay
    for (let i = 0;i<broiDni;i++){
        kmPerDay =((Number(input[index])/100)*kmPerDay)+kmPerDay;        index++
        countKilometers+=kmPerDay
    }
    let diff =0
    if (countKilometers>=1000){
        diff = Math.ceil(countKilometers-1000)
        console.log(`You've done a great job running ${diff} more kilometers!`)
    }else {
        diff = Math.ceil(1000-countKilometers)

        console.log(`Sorry Mrs. Ivanova, you need to run ${diff} more kilometers`);
    }
    
    
}
solve([5,30,10,15,20,5,12])