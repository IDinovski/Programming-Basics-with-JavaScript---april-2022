function worldSwimmingRecord(input){
    let rekordSekundi = Number(input[0]);
    let rastoqnieMetri = Number(input[1]);
    let vremeZaEdinMetyr = Number(input[2]);
    let syprotivlenie = Math.floor(rastoqnieMetri/15) * 12.5;
    let nedostig = 0.00;
let ivancho = (rastoqnieMetri*vremeZaEdinMetyr)+syprotivlenie;
if (ivancho<rekordSekundi){
    console.log(`Yes, he succeeded! The new world record is ${ivancho.toFixed(2)} seconds.`);
} else {
let nedostig =Math.abs(rekordSekundi-ivancho);
console.log(`No, he failed! He was ${nedostig.toFixed(2)} seconds slower.`);
}
}
worldSwimmingRecord (["55555.67",
"3017",
"5.03"])
