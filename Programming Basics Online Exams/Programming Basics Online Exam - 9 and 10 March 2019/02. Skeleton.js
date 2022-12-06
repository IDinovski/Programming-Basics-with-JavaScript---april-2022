function solve(input) {
  let minutesKontrola = Number(input[0]);
  let sekundiKontrola = Number(input[1]);
  let dyljinaNaUleq = Number(input[2]);
  let sekundiZa100Metra = Number(input[3]);

  let totalTimeKontrola = minutesKontrola * 60 + sekundiKontrola;
  let resultinSeconds =
    (dyljinaNaUleq / 100) * sekundiZa100Metra - (dyljinaNaUleq / 120) * 2.5;

  if (resultinSeconds <= totalTimeKontrola) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${resultinSeconds.toFixed(3)}.`);
  } else {
    let diff = resultinSeconds - totalTimeKontrola;
    console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
  }
}
solve(["0", "12", "1200", "10"]);
