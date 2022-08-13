function onTime(input) {
  let chasNaIzpita = Number(input[0]);
  let minutaNaIzpita = Number(input[1]);
  let chasPristigane = Number(input[2]);
  let minutaPristigane = Number(input[3]);
  let vMinutiIzpit = chasNaIzpita * 60 + minutaNaIzpita;
  let vMinutiPristigane = chasPristigane * 60 + minutaPristigane;
  let diff = 0;
  if(vMinutiIzpit > vMinutiPristigane){
      diff = vMinutiIzpit - vMinutiPristigane;
  } else if (vMinutiIzpit < vMinutiPristigane){
      diff = vMinutiPristigane - vMinutiIzpit
  }
  let h = Math.floor(diff / 60);
  let m = diff % 60;
  h = Math.abs(h);
  m = Math.abs(m);
if (vMinutiPristigane<=vMinutiIzpit && diff<=30){
    console.log(`On time`);
} else if (vMinutiIzpit<vMinutiPristigane){
    console.log(`Late`);
} else if (diff>30){
    console.log(`Early`);
}
if(vMinutiIzpit>vMinutiPristigane){
    if(h===0){
    console.log(`${m} minutes before the start`);
    } else if (h>0&& m<10){
        console.log(`${h}:0${m} hours before the start`);
    } else if (h>0){
        console.log(`${h}:${m} hours before the start`);

    }
} else if (vMinutiIzpit<vMinutiPristigane){
    if(h===0){
        console.log(`${m} minutes after the start`);
        } else if (h>0 && m<10){
            console.log(`${h}:0${m} hours after the start`);
        }else if (h>0 ){
            console.log(`${h}:${m} hours after the start`);
        }
}


}onTime(["9", "30", "9", "50"]);
/*
На първият ред отпечатайте:
•	"Late", ако студентът пристига по-късно от часа на изпита.
•	"On time", ако студентът пристига точно в часа на изпита или до 30 минути по-рано.
•	"Early", ако студентът пристига повече от 30 минути преди часа на изпита.
Ако студентът пристига с поне минута разлика от часа на изпита, отпечатайте на следващия ред:
•	"mm minutes before the start" за идване по-рано с по-малко от 1.
•	"hh:mm hours before the start" за подраняване с 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:05".
•	 "mm minutes after the start" за закъснение под час.
•	"hh:mm hours after the start" за закъснение от 1 час или повече. Минутите винаги печатайте с 2 цифри, например "1:03".
*/
  // за да е подранил трябва vminutiizpit да е по голямо от vminutipristigane
  // diff времето за подраняване или закъснение. e оставащото време ако е отрицателно значи е закъснял