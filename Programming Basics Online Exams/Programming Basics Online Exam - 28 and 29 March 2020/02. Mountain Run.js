function solve(input) {
  let rekord = Number(input[0]);
  let razstoqnie = Number(input[1]);
  let vremeZaMetyr = Number(input[2]);

  let zabavqne = Math.floor(razstoqnie / 50) * 30;
  let vreme = razstoqnie * vremeZaMetyr + zabavqne;
  let dif = Math.abs(rekord - vreme);
  if (vreme < rekord) {
    console.log(`Yes! The new record is ${vreme.toFixed(2)} seconds.`);
  } else {
    console.log(`No! He was ${dif.toFixed(2)} seconds slower.`);
  }
}

solve([1377, 389, 3]);
