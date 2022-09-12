function solve(input) {
  let amount = Number(input[0]);
  let index = 1;
  let gameName = input[index];
  index++;
  let hearthStoneCounter = 0;
  let forniteCounter = 0;
  let overwatchCounter = 0;
  let otherCounter = 0;
  for (let i = 1; i <= amount; i++) {
    switch (gameName) {
      case "Hearthstone":
        hearthStoneCounter++;
        break;
      case "Fornite":
        forniteCounter++;
        break;
      case "Overwatch":
        overwatchCounter++;
        break;
    }
    if (
      gameName !== "Hearthstone" &&
      gameName !== "Fornite" &&
      gameName !== "Overwatch"
    ) {
      otherCounter++;
    }
    gameName = input[index];
    index++;
  }
  let hProcent = (hearthStoneCounter / amount) * 100;
  let fProcent = (forniteCounter / amount) * 100;
  let oProcent = (overwatchCounter / amount) * 100;
  let otherProcent = (otherCounter / amount) * 100;
  console.log(`Hearthstone - ${hProcent.toFixed(2)}%`);
  console.log(`Fornite - ${fProcent.toFixed(2)}%`);
  console.log(`Overwatch - ${oProcent.toFixed(2)}%`);
  console.log(`Others - ${otherProcent.toFixed(2)}%`);
}
solve(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])
