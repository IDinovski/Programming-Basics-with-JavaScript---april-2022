function solve(input) {
    let index = 0
    let dyljina = Number(input[index]);
    index++;
    let shirina = Number(input[index]);
    index++
    let broiParcheta = dyljina * shirina;
    let command = input[index];
    index++
    let bulflag = false;
    let diff = 0
    let broiVzeti = 0;

    while (command !== `STOP`) {
        let vzemane = Number(command)
        command = input[index];
        index++
        broiVzeti += vzemane
        if (broiVzeti > broiParcheta) {
            bulflag = true
            diff =  broiVzeti - broiParcheta
            console.log(`No more cake left! You need ${Math.abs(diff)} pieces more.`);
            break;
        } else if (broiParcheta===broiVzeti) {
            bulflag = true
            diff =  broiVzeti - broiParcheta
            console.log(`${diff} pieces are left.`);
            break;
        }


    }
    if (!bulflag) {
        diff =  Math.abs(broiVzeti - broiParcheta)
        console.log(`${diff} pieces are left.`);
    }
}
solve(["10",
"2",
"2",
"4",
"6",
"STOP"])


