function solve(input) {
    let hallRent = Number(input);
    let cake = 0.2*hallRent;
    let drinks =0.55 * cake;
    let animator =  hallRent/3;
    let amount = cake + drinks + animator + hallRent;
  
    console.log(amount);
  }
solve([2250]);
