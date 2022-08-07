function lunchBreak(input){
    let ime = String(input[0]);
    let vremeEpizod = Number(input[1]);
    let vremePochivka = Number(input[2]);
    let vremeObqd = vremePochivka*(1/8);
    let vremeOtdih = vremePochivka*(1/4);

    let svobodnoVreme =(vremePochivka-vremeObqd-vremeOtdih);
    let ostavashto =Math.abs(vremeEpizod-svobodnoVreme);

    if (vremeEpizod<=svobodnoVreme){
       console.log(`You have enough time to watch ${ime} and left with ${Math.ceil(ostavashto)} minutes free time.`); 
    } else if (vremeEpizod>svobodnoVreme){
        console.log(`You don't have enough time to watch ${ime}, you need ${Math.ceil(ostavashto)} more minutes.`);
    }
}
lunchBreak (["Teen Wolf",
"48",
"60"])


