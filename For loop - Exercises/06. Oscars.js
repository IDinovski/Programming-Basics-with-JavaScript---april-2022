function oscars(input) {
  let nameActor = input[0];
  let points = Number(input[1]);
  let broiOcenqvashti = Number(input[2]);
  let index = 3;
  let vsichkiTochkiOcenqvasht = points;
  for (let i = 0; i < broiOcenqvashti ; i++) {
      if(vsichkiTochkiOcenqvasht<1250.5){
    let imeOcenqvasht = input[index];
    index++;
    let tochki = Number(input[index]);
    index++;
    let tochkiOcenqvasht = (imeOcenqvasht.length * tochki) / 2;
    vsichkiTochkiOcenqvasht += tochkiOcenqvasht;
} 

  }
  let diff = Math.abs(1250.5 - vsichkiTochkiOcenqvasht);
  if (vsichkiTochkiOcenqvasht >= 1250.5) {
    console.log(
      `Congratulations, ${nameActor} got a nominee for leading role with ${vsichkiTochkiOcenqvasht.toFixed(
        1
      )}!`
    );
  } else {
    console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
  }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
