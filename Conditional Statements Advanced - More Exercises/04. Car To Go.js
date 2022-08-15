function carToGo(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let klas = 0;
  let pricekabrio = 0;
  let pricejeep = 0;
  let vid = 0;
  if (season === `Summer`) {
    vid = `Cabrio`;
  } else if (season === `Winter`) {
    vid = `Jeep`;
  }
  if (budget <= 100) {
    klas = `Economy class`;
    switch (season) {
      case `Summer`:
        pricekabrio = budget * 0.35;
        break;
      case `Winter`:
        pricejeep = budget * 0.65;
        break;
    }
  } else if (budget > 100 && budget <= 500) {
    klas = `Compact class`;
    switch (season) {
      case `Summer`:
        pricekabrio = budget * 0.45;
        break;
      case `Winter`:
        pricejeep = budget * 0.8;
        break;
    }
  } else if (budget > 500) {
    klas = `Luxury class`;
    pricekabrio = 0.9 * budget;
    pricejeep = 0.9 * budget;
  }
  if (klas === `Luxury class`) {
    vid = `Jeep`;
    console.log(`${klas}`);
    console.log(`${vid} - ${pricejeep.toFixed(2)}`);
  } else if (season === `Summer`) {
    vid = `Cabrio`;

    console.log(`${klas}`);
    console.log(`${vid} - ${pricekabrio.toFixed(2)}`);
  } else if (season === `Winter`) {
    vid = `Jeep`;

    console.log(`${klas}`);
    console.log(`${vid} - ${pricejeep.toFixed(2)}`);
  }
}
