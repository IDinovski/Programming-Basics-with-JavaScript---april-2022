function fruitShop(input) {
    let fruid = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let priceBanana = 0
    let priceApple = 0
    let priceOrange = 0
    let pricegrapefruid = 0
    let priceKiwi = 0
    let pricePineapple = 0
    let priceGrapes = 0
    let price = 0
    switch (day) {
        case `Monday`:
        case `Tuesday`:
        case `Wednesday`:
        case `Thursday`:
        case `Friday`:
            case `Workday`:
            priceBanana = 2.50;
            priceApple = 1.20;
            priceOrange = 0.85;
            pricegrapefruid = 1.45;
            priceKiwi = 2.70;
            pricePineapple = 5.50;
            priceGrapes = 3.85; break;
        case `Saturday`:
        case `Sunday`:
            priceBanana = 2.70;
            priceApple = 1.25;
            priceOrange = 0.90;
            pricegrapefruid = 1.60;
            priceKiwi = 3.00;
            pricePineapple = 5.60;
            priceGrapes = 4.20; break;
    }
    if (day === `Workday`){
        console.log(`error`);
    } else if (fruid === `banana`) {
        price = quantity * priceBanana;
        console.log(price.toFixed(2));
    } else if (fruid === `apple`) {
        price = quantity * priceApple
        console.log(price.toFixed(2));
    } else if (fruid === `orange`) {
        price = quantity * priceOrange
        console.log(price.toFixed(2));
    } else if (fruid === `grapefruit`) {
        price = quantity * pricegrapefruid
        console.log(price.toFixed(2));
    } else if (fruid === `kiwi`) {
        price = quantity * priceKiwi
        console.log(price.toFixed(2));
    } else if (fruid === `pineapple`) {
        price = quantity * pricePineapple
        console.log(price.toFixed(2));
    } else if (fruid === `grapes`) {
        price = quantity * priceGrapes
        console.log(price.toFixed(2));
    } else {
        console.log(`error`);
    }
}