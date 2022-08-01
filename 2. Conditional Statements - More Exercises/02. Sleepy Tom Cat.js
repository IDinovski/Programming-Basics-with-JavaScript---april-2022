function sllepyTomCat(input) {
  let broiPochivniDni = Number(input[0]);
  let normaZaIgra = 30000;
  let rabotenDen = 63;
  let pochivenDen = 127;
  let godina = 365;
  let vremezaIGra = (godina - broiPochivniDni) * rabotenDen +(broiPochivniDni * pochivenDen
  );
  let ostavashtoVreme = Math.abs(normaZaIgra-vremezaIGra)
  let minuti = Math.floor(ostavashtoVreme / 60);
  let sekundi = ostavashtoVreme % 60;
  if (vremezaIGra > normaZaIgra) {
    console.log(`Tom will run away`);
    console.log(`${minuti} hours and ${sekundi} minutes more for play`);
  } else if (vremezaIGra <= normaZaIgra) {
    console.log(`Tom sleeps well`);
    console.log(`${minuti} hours and ${sekundi} minutes less for play`);
  }
}
sllepyTomCat(["113"]);
