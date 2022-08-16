function solve() {
    let minutivDenonoshtie = 1440;
    let chas = 0
    let minuti = 0
    for (i = 0; i < minutivDenonoshtie; i++) {
       
        if (i % 60 === 0 && i > 59) {
            chas++
            continue;

        }
        
        if (i % 60 !== 0) {
            minuti++         
            if (minuti > 59) {
                minuti =0
            }   
        }
       
       
        console.log(`${chas} : ${minuti}`);
        
    }
}
solve([])