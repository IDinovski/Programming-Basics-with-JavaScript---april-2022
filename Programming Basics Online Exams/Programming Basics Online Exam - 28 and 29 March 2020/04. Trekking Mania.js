function solve(input) {
  let broiGrupi = Number(input[0]);
  let index = 1;
  let musalaCounter = 0;
  let monblanCounter = 0;
  let kiliCounter = 0;
  let k2Counter = 0;
  let everestCounter = 0;
  let all = 0;

  for (let i = 1; i <= broiGrupi; i++) {
    let broiHora = Number(input[index]);
    all += broiHora;
    if (broiHora <= 5) {
      musalaCounter += broiHora;
    } else if (broiHora > 5 && broiHora <= 12) {
      monblanCounter += broiHora;
    } else if (broiHora > 12 && broiHora <= 25) {
      kiliCounter += broiHora;
    } else if (broiHora > 25 && broiHora <= 40) {
      k2Counter += broiHora;
    } else if (broiHora > 40) {
      everestCounter += broiHora;
    }
    index++;
  }

  let musala =(musalaCounter / all) * 100;
  let monblan = (monblanCounter / all) * 100;
  let kili = (kiliCounter / all) * 100;
  let k2 = (k2Counter / all) * 100;
  let everest = (everestCounter / all) * 100;

  console.log(`${musala.toFixed(2)}%`);
  console.log(`${monblan.toFixed(2)}%`);
  console.log(`${kili.toFixed(2)}%`);
  console.log(`${k2.toFixed(2)}%`);
  console.log(`${everest.toFixed(2)}%`);
}
solve([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
