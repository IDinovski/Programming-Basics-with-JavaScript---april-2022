function solve(input){
    let n = input[0];
    let result = "";
    for(let i = 1111;i<=9999;i++){
        i=i+"";
        let first = Number(i.charAt(0));
        let second = Number(i.charAt(1));
        let third = Number(i.charAt(2));
        let fourt = Number(i.charAt(3));
        
            
        if(first!==0&&second!==0&&third!==0&&fourt!==0){
            if(first+second===third+fourt){
                if(n%(first+second)===0){
                result+= `${i} `
                }
            }
        }
    }
        console.log(result);
    }


solve([3])