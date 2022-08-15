function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let count = Number(input[2]);
    let priceTicket = 0;
    let allTickets = 0
    switch(category){
        case `VIP`:
            priceTicket = 499.99;
            allTickets = priceTicket * count;
            break;
        case `Normal`:
            priceTicket = 249.99;
            allTickets = priceTicket * count;
            break;
    }
    let transport = 0;
    if(count>=1 && count<=4){
        transport = 0.75*budget
    } else if ( count>=5 && count<=9){
        transport = 0.60*budget;
    } else if ( count>=10 && count<=24){
        transport = 0.50*budget;
    } else if (count>=25 && count<=49){
        transport = 0.40*budget;
    } else if ( count>=50){
        transport = 0.25*budget
    }
    let ostatyk = budget-transport;
    let diff = Math.abs(ostatyk-allTickets);
    if(ostatyk>=allTickets){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets([`1000`,`Normal`,`1`])