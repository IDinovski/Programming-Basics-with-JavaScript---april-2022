function solve(input) {
    let index = 0;
    let sybranaSuma = 0;
    let destinaciq = "";
    let spesteni = 0;
    let hartisali = 0;
    let neobhodimaSuma = 0;
    let currentIndex = "";
    while (currentIndex !== `End`) {
        destinaciq = input[index];
        index++;
        neobhodimaSuma = Number(input[index]);
        index++;
        sybranaSuma = hartisali;
        while (sybranaSuma < neobhodimaSuma) {
            spesteni = Number(input[index]);
            index++;
            sybranaSuma += spesteni;
            if (sybranaSuma > neobhodimaSuma) {
                hartisali = sybranaSuma - neobhodimaSuma;
                currentIndex = input[index];
            }
        }
        console.log(`Going to ${destinaciq}!`);
    }
}
solve (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

