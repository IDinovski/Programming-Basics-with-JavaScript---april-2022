function solve(input) {
    let broiEtaji = Number(input[0]);
    let broiStaiNaEtaj = Number(input[1]);
    for (let i = broiEtaji; i >= 1; i--) {
        let result = "";
        for (let k = 0; k < broiStaiNaEtaj; k++) {
            if (i === broiEtaji) {
                result += `L${i}${k} `;
            } else if (i % 2 != 0) {
                result+= `A${i}${k} `;
            
            } else if (i % 2 === 0) {
                result+= `O${i}${k} `;
            }        }
        console.log(result);

    }
}
solve(["6", "4"])
