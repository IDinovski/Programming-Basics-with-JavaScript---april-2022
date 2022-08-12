function tradeCommissions(input) {
    let city = input[0];
    let oborot = input[1];
    let procent = 0;
    if (oborot >= 0 && oborot <= 500) {
        switch (city) {
            case `Sofia`:
                procent = 0.05; break;
            case `Varna`:
                procent = 0.045; break;
            case `Plovdiv`:
                procent = 0.055; break;
        }
    }else if (oborot > 500 && oborot <= 1000) {
        switch (city) {
            case `Sofia`:
                procent = 0.07; break;
            case `Varna`:
                procent = 0.075; break;
            case `Plovdiv`:
                procent = 0.08; break;
        }
    }else if (oborot > 1000 && oborot <= 10000) {
        switch (city) {
            case `Sofia`:
                procent = 0.08; break;
            case `Varna`:
                procent = 0.10; break;
            case `Plovdiv`:
                procent = 0.12; break;
        }
    } else if (oborot > 10000) {
        switch (city) {
            case `Sofia`:
                procent = 0.12; break;
            case `Varna`:
                procent = 0.13; break;
            case `Plovdiv`:
                procent = 0.145; break;
        }
    }


    let komisionna = oborot * procent;
    if (oborot < 0) {
        console.log(`error`);
    } else if (city !== `Sofia` && city !== `Varna` && city !== `Plovdiv`) {
        console.log(`error`);
    } else {
        console.log(komisionna.toFixed(2));
    }
}
