function skiTrip(input){
    let days = Number(input[0]) - 1;
    let type = input[1];
    let feedback = input[2];
    let price = 0;
    switch(type){
        case `room for one person`:
            price = 18;break;
        case `apartment`: 
        price = 25;
        if(days<10){
price = 0.70*price;
        } else if (days>=10 && days<15){
            price = 0.65*price;
        } else {
            price = 0.50*price;
        }
        break;
        case `president apartment`:
    price = 35;
    if(days<10){
        price = 0.90*price;
                } else if (days>=10 && days<15){
                    price = 0.85*price;
                } else {
                    price = 0.80*price;
                }        
                break;
    }
switch(feedback)    {
    case`positive`:
    price = 1.25*price;       
    break;
    case `negative`:
        price = 0.90*price;        
        break;

}
let izhod = price * days
console.log(izhod.toFixed(2));
}
skiTrip(["14",
"apartment",
"positive"])
