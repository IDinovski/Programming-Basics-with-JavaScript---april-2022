function solve(input){
    let index =0;
    let  shirina = Number(input[index]);
    index++
    let dylvjina = Number(input[index]);
    index++
    let visochina = Number(input[index]);
    index++
    let obem = shirina*dylvjina*visochina;
    let command = input[index]
    let obemKashoni = 0;
    let diff = 0
    let bulflag= false;
        
        while(obemKashoni<obem){
            if(command===`Done`){
                 diff = obem-obemKashoni
                console.log(`${diff} Cubic meters left.`);
                bulflag=true;
                break;
            }
            let broiKashoni = Number(input[index])
        index++
            obemKashoni+=broiKashoni;
            command=input[index]
        }
        if(!bulflag){
        diff = obemKashoni-obem
    console.log(`No more free space! You need ${diff} Cubic meters more.`);
}
}
solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

