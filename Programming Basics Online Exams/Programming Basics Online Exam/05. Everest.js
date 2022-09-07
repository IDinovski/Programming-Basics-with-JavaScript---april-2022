function solve(input){
    let index = 0;
    let currentIndex = input[index]
    let distance = 5364;
    let daycounter = 1
    let bulflag = false;
    while(currentIndex!==`END`){
      
        let yesORno = input[index];
        index++
        switch(yesORno){
            case`Yes`:
            daycounter++
           
            break;
        }
        if(daycounter>5){
            console.log(`Failed!`);
            console.log(`${distance}`);
            bulflag = true;
            break;
        }
        let metriIzkachvane = Number(input[index]);
        index++
        distance+=metriIzkachvane
        currentIndex = input[index]
        if(distance>=8848){
            console.log(`Goal reached for ${daycounter} days!`);
            bulflag = true;
            break;
        }
       
    }
    if(!bulflag){
        console.log(`Failed!`);
        console.log(`${distance}`);
    }
}
solve(["Yes","535","Yes","849","Yes","499","Yes","400","Yes","500"])

