function solve(input){
    let index=0;
    let vhod = Number(input[index]);
    index++
    let resto = vhod * 100;
    let dvaLeva = 200;
    let dvaLevaCounter = 0
    let edinLev = 100;
    let edinLevCounter=0
    let petdesetStotinki = 50;
    let petdesetStotinkiCounter =0
    let dvadesetStotinki = 20;
    let dvadesetStotinkiCounter = 0;
    let desetStotinki = 10;
    let desetStotinkiCounter = 0
    let petStotinki = 5;
    let petStotinkiCounter = 0
    let dveStotinki = 2;
    let dveStotinkiCounter = 0;
    let ednaStotinka = 1;
    let ednaStotinkaCounter = 0
    let sborStotinki = 0;
    while(sborStotinki!==vhod){
  if(resto>=dvaLeva){
      resto-=dvaLeva;
      dvaLevaCounter++
  }else if (resto>=edinLev){
      resto-=edinLev;
      edinLevCounter++
  }else if(resto>=petdesetStotinki){
      resto-=petdesetStotinki;
      petdesetStotinkiCounter++
  }else if(resto>=dvadesetStotinki){
      resto-=dvadesetStotinki;
      dvadesetStotinkiCounter++
  }else if(resto>=desetStotinki){
      resto-=desetStotinki;
      desetStotinkiCounter++
  }else if(resto>=petStotinki){
      resto-=petStotinki;
      petStotinkiCounter++
  }else if (resto>=dveStotinki){
      resto-=dveStotinki;
      dveStotinkiCounter++
  }else if (resto>=ednaStotinka){
      resto-=ednaStotinka;
      ednaStotinkaCounter++
  }
  sborStotinki = (dvaLevaCounter*200+edinLevCounter*100+petdesetStotinkiCounter*50+dvadesetStotinkiCounter*20+desetStotinkiCounter*10+petStotinkiCounter*5+dveStotinkiCounter*2+ednaStotinkaCounter*1)/100;

}
let broiMoneti = dvaLevaCounter+edinLevCounter+petdesetStotinkiCounter+dvadesetStotinkiCounter+desetStotinkiCounter+petStotinkiCounter+dveStotinkiCounter+ednaStotinkaCounter
console.log(broiMoneti);
}
solve(["2"])