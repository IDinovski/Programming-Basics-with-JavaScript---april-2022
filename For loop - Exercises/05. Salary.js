function salary(input) {
    let index = 0;
    let countsTabs = Number(input[index]);
    index++;
    let zaplata = Number(input[index]);
    index++;
    let globa = 0;
    for (i = 0; i < countsTabs; i++) {
        let type = input[index];
        index++;
        switch (type) {
            case `Facebook`:
                globa += 150;
                break;
            case `Instagram`:
                globa += 100;
                break;
            case `Reddit`:
                globa += 50;
                break;
        }
        if (zaplata <= globa) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    let diff = Math.abs(zaplata - globa);
    if (zaplata > globa) {
        console.log(diff);
    }
}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
