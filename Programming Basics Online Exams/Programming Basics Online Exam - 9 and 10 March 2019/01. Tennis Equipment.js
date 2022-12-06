function solve(input) {
  let priceRacket = Number(input[0]);
  let amountRackets = Number(input[1]);
  let amountShoes = Number(input[2]);
  let priceShoes = priceRacket / 6;
  let total = amountRackets * priceRacket + amountShoes * priceShoes;
  total = total * 1.2;
  let djokovic = total / 8;
  let sponsors = total - djokovic;
  console.log(`Price to be paid by Djokovic ${Math.floor(djokovic)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);
}
solve([850, 4, 2]);
