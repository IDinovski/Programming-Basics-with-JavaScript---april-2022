function cleaverLily(input){

let vyzrast = Number(input[0]);
let peralnq = Number(input[1]);
let cenaIgrachka = Number(input[2]);
let chetniGodini = 0;
let nechetniGodini = 0;
let pari = 10;
let sybranaSuma=0;
for(let i = 2;i<=vyzrast;i+=2){
chetniGodini++
sybranaSuma += pari
pari += 10;
}
for(let i = 1; i<=vyzrast;i+=2){
    nechetniGodini++
}
let pariOtIgrachki = nechetniGodini * cenaIgrachka;
sybranaSuma-=chetniGodini;
sybranaSuma+=pariOtIgrachki
let diff = Math.abs(peralnq-sybranaSuma);
if(sybranaSuma>=peralnq){
    console.log(`Yes! ${diff.toFixed(2)}`);
} else {
    console.log(`No! ${diff.toFixed(2)}`);
}
}
cleaverLily (["10","180.00","6"])
