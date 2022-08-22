function solve(input){
    let index = 0;
    let steps = 0
    let bulflag = true
    let daySteps = 0
    while(steps<=10000){
        let daily = input[index];
        index++
        if(daily===`Going home`){
            bulflag=false
            daily = input[index];
            daySteps = Number(daily);
        steps+=daySteps;
        if(steps>=10000){
            let diff = 10000-steps       
    console.log(`Goal reached! Good job!`);
    console.log(`${Math.abs(diff)} steps over the goal!`);
    break;
        }
            let diff = 10000-steps       
            console.log(`${Math.abs(diff)} more steps to reach goal.`);
            break;
        }
daySteps = Number(daily);
        steps+=daySteps;
    }
    if(bulflag===true){
        diff= steps-10000
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
    }
}
solve(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])




