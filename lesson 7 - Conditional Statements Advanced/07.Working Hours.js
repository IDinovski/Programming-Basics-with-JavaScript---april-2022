function workingHours(input){
   let chas = Number(input[0]);
   let den = input[1];
   switch(den){
   case `Monday`:
    case `Tuesday`:
    case `Wednesday`:
    case `Thursday`:
    case `Friday`: 
    case `Saturday`:
    if(chas >= 10 && chas <=18){
        console.log(`open`); break;
    }
    default:console.log(`closed`); break;
   }
}