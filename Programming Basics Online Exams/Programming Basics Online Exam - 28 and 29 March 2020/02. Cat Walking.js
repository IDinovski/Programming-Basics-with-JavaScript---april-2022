function solve(input){
    let calPerMinute = 5;
    let minutesWalk = Number(input[0]);
    let numberWalks = Number(input[1]);
    let catsCals = Number(input[2])/2;

    let burnedCals = (minutesWalk * numberWalks) * calPerMinute;
    if(burnedCals>=catsCals){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCals}.`);
    } else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCals}.`);
    }

}
solve([15,2,500])