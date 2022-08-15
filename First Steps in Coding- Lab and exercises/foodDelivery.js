function foodDelivery (input)
{

    let pileshkoMenu = 10.35;
    let menuRiba = 12.40;
    let vegetarianskoMenu = 8.15;
    let dostavka = 2.50;

    let broiPileshkiMenuta = Number(input[0]);
    let broiMenuRiba = Number(input[1]);
    let broiVegatarianskiMenuta = Number(input[2]);

    let cenaPorycka = 
    broiPileshkiMenuta * pileshkoMenu +
    broiMenuRiba * menuRiba + 
    broiVegatarianskiMenuta * vegetarianskoMenu;
    let desert = cenaPorycka * 0.20;
    let obshtaCena = cenaPorycka + desert + dostavka

    console.log(obshtaCena)
}
foodDelivery(["9 ",
"2 ",
"6 "]
)