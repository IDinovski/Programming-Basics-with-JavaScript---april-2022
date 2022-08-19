function solve(input) {
    let index = 0;
    let currentIndex = input[index];
    let studentCounter = 0
    let standartCounter = 0
    let kidCounter = 0
    let allpeople = 0
    let bulflag = false;
    let alltickets = 0
    let pstudents = 0;
    let pstandard = 0;
    let pkid = 0;
    let sbor = 0


    while (currentIndex !== `Finish`) {
        let name = input[index];
        index++
        let broiMesta = Number(input[index]);
        index++
        alltickets += broiMesta
        let type = input[index];
        index++
        while (type !== `End`) {

            switch (type) {
                case `student`: studentCounter++; allpeople++; pstudents++; break;
                case `standard`: standartCounter++; allpeople++; pstandard++; break;
                case `kid`: kidCounter++; allpeople++; pkid++; break;
            }
            sbor = studentCounter + standartCounter + kidCounter
            type = input[index];
            if (broiMesta === sbor) {
                bulflag = true;
                break;
            }
            if (type !== `Finish` ) {
                index++
            } 
            
            if (type === `Finish`) {
                bulflag = true;
                break;
            }

        }

        if (type === `Finish` || type === `End`) {
            bulflag = true;
        }
        let procent = (studentCounter + standartCounter + kidCounter) / broiMesta * 100
        console.log(`${name} - ${procent.toFixed(2)}% full.`);
        currentIndex = input[index];
        if (!bulflag) {
            index++
        }
        studentCounter = 0
        standartCounter = 0
        kidCounter = 0
    }
    console.log(`Total tickets: ${allpeople}`);
    pstudents = pstudents / allpeople * 100
    pstandard = pstandard / allpeople * 100
    pkid = pkid / allpeople * 100

    console.log(`${pstudents.toFixed(2)}% student tickets.`);
    console.log(`${pstandard.toFixed(2)}% standard tickets.`);
    console.log(`${pkid.toFixed(2)}% kids tickets.`);
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "standard",
    "standard",
    "standard",
    "standard",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
