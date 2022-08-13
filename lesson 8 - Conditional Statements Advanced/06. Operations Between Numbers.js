function solve(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch(operator){
        case `+`:
            result = num1+num2;break;
        case `-`:
            result = num1-num2;break;
        case `*`: 
            result = num1*num2;break;
        case `/`:
            result = num1/num2;break;
        case `%`:
            result=num1%num2;break;
    }
    if(operator === `+` || operator === `-` || operator === `*`){
        if ( result % 2 === 0){
            console.log(`${num1} ${operator} ${num2} = ${result} - even`);
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
        }
    } else if ( operator ===`/` ){
        if(num2===0){
            console.log(`Cannot divide ${num1} by zero`);
        } else{
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    } else if ( operator ===`%` ){
        if(num2===0){
            console.log(`Cannot divide ${num1} by zero`);
        }else{
        console.log(`${num1} % ${num2} = ${result}`);}
    }
}