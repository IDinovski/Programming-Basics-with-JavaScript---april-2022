function solve(input) {
  let stoinostNaVaucher = Number(input[0]);
  let index = 1;
  let next = String(input[index]);
  let movieName = "";
  let tickets = 0;
  let products = 0;
  let total = 0;

  while (next != "End") {
    if (next.length > 8) {
      movieName = input[index];
      if (
        movieName.charCodeAt(0) + movieName.charCodeAt(1) >
        stoinostNaVaucher
      ) {
        break;
      } else if (
        movieName.charCodeAt(0) + movieName.charCodeAt(1) >
        stoinostNaVaucher - total
      ) {
        break;
      }
      total += movieName.charCodeAt(0) + movieName.charCodeAt(1);
      tickets++;
    } else {
      if (movieName.charCodeAt(0) > stoinostNaVaucher) {
        break;
      } else if (movieName.charCodeAt(0) > stoinostNaVaucher - total) {
        break;
      }
      total += next.charCodeAt(0);
      if (total > stoinostNaVaucher) {
        break;
      }
      products++;
    }
    index++;
    next = String(input[index]);
  }
  console.log(tickets);
  console.log(products);
}
solve(["50", "Captain Marvel", "popcorn", "Pepsi"]);
