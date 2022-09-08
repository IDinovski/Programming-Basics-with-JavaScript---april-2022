function solve(input) {
  let totalDays = Number(input[0]);
  let totalFood = Number(input[1]);
  let index = 2;
  let eatenDogFood = 0;
  let eatenCatFood = 0;
  let dayCounter = 0;
  let currentDayFood = 0;
  let eatenBiscuits = 0;
  for (let i = 1; i <= totalDays; i++) {
    dayCounter++;
    eatenDogFood = eatenDogFood + Number(input[index]);
    currentDayFood += Number(input[index]);
    index++;
    eatenCatFood = eatenCatFood + Number(input[index]);
    currentDayFood += Number(input[index]);
    if (dayCounter % 3 == 0) {
      eatenBiscuits += currentDayFood * 0.1;
    }
    index++;
    currentDayFood = 0;
  }
  let totalEatenFood = eatenDogFood + eatenCatFood;
  let procentTotalEatenFood = (totalEatenFood / totalFood) * 100;
  let procentDog = (eatenDogFood / totalEatenFood) * 100;
  let procentCat = (eatenCatFood / totalEatenFood) * 100;
  console.log(`Total eaten biscuits: ${Math.trunc(eatenBiscuits)}gr.`);
  console.log(
    `${procentTotalEatenFood.toFixed(2)}% of the food has been eaten.`
  );
  console.log(`${procentDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${procentCat.toFixed(2)}% eaten from the cat.`);
}
solve([3, 1000, 300, 20, 100, 30, 110, 40]);
