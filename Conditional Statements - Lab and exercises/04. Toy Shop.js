function toyShop(input) {
  let pyzel = 2.6;
  let govoreshtaKukla = 3;
  let pliushMeche = 4.1;
  let minion = 8.2;
  let kamion = 2;

  let cenaEkskurziq = Number(input[0]);
  let broiPyzel = Number(input[1]);
  let broiKukla = Number(input[2]);
  let broiMeche = Number(input[3]);
  let broiMinion = Number(input[4]);
  let broiKamion = Number(input[5]);

  let broiProdukti =
    broiKamion + broiKukla + broiMeche + broiMinion + broiPyzel;
  let sumaPorychka =
    broiKamion * kamion +
    broiKukla * govoreshtaKukla +
    broiMeche * pliushMeche +
    broiMinion * minion +
    broiPyzel * pyzel;
  if (broiProdukti >= 50) {
    sumaPorychka = sumaPorychka - sumaPorychka * 0.25;
  }

  sumaPorychka = sumaPorychka - sumaPorychka * 0.1;
  let ostavashtiPari = sumaPorychka - cenaEkskurziq;
  if (sumaPorychka >= cenaEkskurziq) {
    console.log(`Yes! ${ostavashtiPari.toFixed(2)} lv left.`);
  } else if (cenaEkskurziq > ostavashtiPari) {
    let nedostig = cenaEkskurziq - sumaPorychka;
    console.log(`Not enough money! ${nedostig.toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);

/*else if (cenaEkskurziq - sumaPorychka < 0) {
    let otricatelenNedostig = 0;
    otricatelenNedostig = (cenaEkskurziq - sumaPorychka)*(-1);
    console.log(`Not enough money! ${otricatelenNedostig.toFixed(2)} lv needed.`);

  }*/
