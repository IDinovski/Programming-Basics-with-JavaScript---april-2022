function time15minutes(input) {
  let h = Number(input[0]);
  let m = Number(input[1]);
  let ekstraVreme = 15;
  let vremeVSekundi = h * 60 + m + ekstraVreme;
  let minuti = Math.floor(vremeVSekundi / 60);
  let sekundi = vremeVSekundi % 60;
  if (minuti > 23) {
minuti=0;
} 
if (sekundi < 10) {
    console.log(minuti + ":0" + sekundi);
  } else {
    console.log(`${minuti}:${sekundi}`);
  }
}
time15minutes(["23", "59"]);
