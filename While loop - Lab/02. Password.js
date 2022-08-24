function solve(input){
    let index = 0;
    let name = input[index];
    index++
    let pass = input[index];
    index++
    let proba = input[index];
    index++
    while(pass!==proba){
        
    proba = input[index];
    index++
    } 
    console.log(`Welcome ${name}!`);

}
solve(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
