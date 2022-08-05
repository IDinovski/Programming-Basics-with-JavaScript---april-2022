function solve(input) {
    let n = Number(input[0]);
    let bulflag = true
    for (let a = 1; a <= 9; a++) {
        
        for (let b = 9; b >= a; b--) {
           
            for (let c = 0; c <= 9; c++) {
                
                for (let d = 9; d >= c; d--) {
                    let x = a+b+c+d;
                    let y = a*b*c*d;
                    if (a + b + c + d === a * b * c * d && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        bulflag = false
                        break;
                    } else if (Math.floor((a * b * c * d) / (a + b + c + d)) === 3 && n%3===0) {
                        console.log(`${d}${c}${b}${a}`);
                        bulflag = false
                        break;
                    }
                }
                if (!bulflag) {
                    break;
                }
            }
            if (!bulflag) {
                break;
            }
        }
        if (!bulflag) {
            break;
        }
    } 
    if (bulflag) {
        console.log(`Nothing found`);
    }
}
solve([214])