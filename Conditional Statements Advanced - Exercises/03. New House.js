function newHouse(input) {
  let vidCvete = input[0];
  let broiCvetq = Number(input[1]);
  let budget = Number(input[2]);
  let cenaRoses = 5;
  let cenaDahlias = 3.8;
  let cenaTulips = 2.8;
  let cenaNarcissus = 3;
  let cenaGladiolus = 2.5;
  let porychka = 0;
  switch (vidCvete) {
    case `Roses`:
      if (broiCvetq > 80) {
        cenaRoses = cenaRoses * 0.9;
        porychka = cenaRoses * broiCvetq;
      } else {
        porychka = cenaRoses * broiCvetq;
      }
      break;
    case `Dahlias`:
      if (broiCvetq > 90) {
        cenaDahlias = cenaDahlias * 0.85;
        porychka = cenaDahlias * broiCvetq;
      } else {
        porychka = cenaDahlias * broiCvetq;
      }
      break;
    case `Tulips`:
      if (broiCvetq > 80) {
        cenaTulips = cenaTulips * 0.85;
        porychka = cenaTulips * broiCvetq;
      } else {
        porychka = cenaTulips * broiCvetq;
      }
      break;
    case `Narcissus`:
      if (broiCvetq < 120) {
        cenaNarcissus = cenaNarcissus * 1.15;
        porychka = cenaNarcissus * broiCvetq;
      } else {
        porychka = cenaNarcissus * broiCvetq;
      }
      break;
    case `Gladiolus`:
      if (broiCvetq < 80) {
        cenaGladiolus = cenaGladiolus * 1.2;
        porychka = cenaGladiolus * broiCvetq;
      } else {
        porychka = cenaGladiolus * broiCvetq;
      }
      break;
  }
  let ostatyk = Math.abs(budget - porychka);

  if (budget >= porychka) {
    console.log(
      `Hey, you have a great garden with ${broiCvetq} ${vidCvete} and ${ostatyk.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${ostatyk.toFixed(2)} leva more.`);
  }
}