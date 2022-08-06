function race(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let vreme = first+second+third;
    let minuti = Math.floor(vreme/60);
    let sekundi = vreme % 60;
    if (sekundi<10){
    console.log(minuti+":0"+sekundi);
    } else{
        console.log(String(minuti)+":"+String(sekundi));
    }
    
}
race (["50",
"50",
"49"])
