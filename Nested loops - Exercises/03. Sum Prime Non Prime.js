function solve(input) {
    let index = 0;
    let command = input[index];
    index++
    let sumProsti = 0
    let sumSlojni = 0
    let num = 0
    while (command !== `stop`) {
        num = Number(command)
        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index]
            index++
            continue;
        }
        if (num === 1) {
            sumProsti += num;
            command = input[index];
            index++
            continue;
        }
        let isPrime = true;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            sumProsti += num
        } else {
            sumSlojni += num
        }
        command = input[index]
        index++

    }
    console.log(`Sum of all prime numbers is: ${sumProsti}`);
    console.log(`Sum of all non prime numbers is: ${sumSlojni}`);
}
solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
