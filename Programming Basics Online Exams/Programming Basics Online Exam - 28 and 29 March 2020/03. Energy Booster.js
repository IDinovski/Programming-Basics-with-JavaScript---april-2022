function solve(input) {
  let fruit = input[0];
  let size = input[1];
  let amount = Number(input[2]);
  let countPerSize = 0;
  let singlePrice = 0;
  switch (size) {
    case "big":
      countPerSize = 5*amount;
      switch (fruit) {
        case "Watermelon":
          singlePrice = 28.7;
          break;
        case "Mango":
          singlePrice = 19.6;
          break;
        case "Pineapple":
          singlePrice = 24.8;
          break;
        case "Raspberry":
          singlePrice = 15.2;
          break;
      }
      break;
    case "small":
      countPerSize = 2*amount;
      switch (fruit) {
        case "Watermelon":
          singlePrice = 56;
          break;
        case "Mango":
          singlePrice = 36.66;
          break;
        case "Pineapple":
          singlePrice = 42.10;
          break;
        case "Raspberry":
          singlePrice = 20;
          break;
      }
      break;
  }
  let answer = singlePrice*countPerSize
if(answer>=400 && answer<=1000){
    answer = 0.85*answer
}else if (answer>1000){
    answer= 0.5*answer
}
console.log(`${answer.toFixed(2)} lv.`);
}
solve(["Mango", "big", "8"]);
