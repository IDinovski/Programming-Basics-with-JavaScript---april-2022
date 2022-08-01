function solve(input) {
    let n = Number(input[0]);
    let a = 1
    let b = 9
    let c = 1
    let d = 8
    if (a + b + c + d === a * b * c * d && n % 10 === 5) {
        console.log(`${a}${b}${c}${d}`);
    } else if (Math.floor((a * b * c * d) / (a + b + c + d)) === 3 && n%3===0) {
        console.log(`${d}${c}${b}${a}`);
    }
}
solve([123])