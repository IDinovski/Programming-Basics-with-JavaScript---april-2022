function speedInfo(input){
    let skorost = Number(input[0]);
    
    if (skorost <= 10){
        console.log("slow");
    } else if (skorost <= 50){
        console.log("average");
    } else if (skorost <= 150){
        console.log("fast");
    } else if (skorost <= 1000){
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}