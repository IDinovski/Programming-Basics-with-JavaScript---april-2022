function animal(input){
    let vhod = input[0];
    switch(vhod){
      case `dog`: console.log(`mammal`); break;
      case `crocodile`: 
      case `tortoise`:
      case `snake` : console.log(`reptile`); break;
      default : console.log(`unknown`); break;
    }
}