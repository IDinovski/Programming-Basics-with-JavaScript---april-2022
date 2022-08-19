function solve(input){
    let n = input[0];
    let result = "";
    for(let i = 1111;i<=9999;i++){
        i=i+"";
        let first = Number(i.charAt(0));
        let second = Number(i.charAt(1));
        let third = Number(i.charAt(2));
        let fourt = Number(i.charAt(3));
if(n%first===0 &&n%second===0 &&n%third===0 &&n%fourt===0){
    result+= `${i} `
}
    }
    console.log(result);


}
solve(["16"])