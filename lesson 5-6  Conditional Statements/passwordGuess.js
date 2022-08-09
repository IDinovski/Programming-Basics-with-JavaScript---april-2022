function passwordGuess(input){
    let fraza = String(input[0]);
    if (fraza === "s3cr3t!P@ssw0rd" ){
        console.log("Welcome");
    } else{
        console.log("Wrong password!")
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])