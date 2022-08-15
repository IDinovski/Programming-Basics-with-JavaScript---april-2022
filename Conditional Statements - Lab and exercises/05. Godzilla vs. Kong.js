function godzila(input) {
  let buget = Number(input[0]);
  let broiStatisti = Number(input[1]);
  let obleklo1statist = Number(input[2]);

  let cenaDekor = buget * 0.1;
  if (broiStatisti > 150) {
    obleklo1statist = 0.9 * obleklo1statist;
  }
  let sumaStatisti = obleklo1statist * broiStatisti;
  let deff = Math.abs(buget - (sumaStatisti + cenaDekor));
  if (sumaStatisti + cenaDekor > buget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${deff.toFixed(2)} leva more.`);
  } else if (sumaStatisti + cenaDekor <= buget) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${deff.toFixed(2)} leva left.`);
  }
}
godzila(["20000", "120", "55.5"]);
