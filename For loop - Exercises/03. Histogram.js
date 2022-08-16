function solve(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
    for (let i = 0; i < n; i++) {
        let curentNumber = Number(input[index]);
        index++

        if (curentNumber < 200) {
            p1Count++;
        } else if (curentNumber >= 200 && curentNumber <= 399) {
            p2Count++
        } else if (curentNumber >= 400 && curentNumber <= 599) {
            p3Count++;
        } else if (curentNumber >= 600 && curentNumber <= 799) {
            p4Count++
        } else {
            p5Count++
        }
    }
    let p1 = p1Count / n * 100;
    let p2 = p2Count / n * 100;
    let p3 = p3Count / n * 100;
    let p4 = p4Count / n * 100;
    let p5 = p5Count / n * 100;


    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
solve(["3", "1", "2", "999"])
