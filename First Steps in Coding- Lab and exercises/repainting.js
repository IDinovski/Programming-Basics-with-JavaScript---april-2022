function repainting(input){

    let cenaPredpazaenNajlon = 1.50 ;
    let cenaBoqLityr = 14.50 ;
    let cenaRazdelitelZaBoqLityr = 5.00 ;

    let neobhodimoKolichestvoNajlon = Number(input[0]);
    let neobhodimoKolichestvoBoq = Number(input[1]);
    let kolichestvoRazdelidel = Number(input[2]);
    let chasoveRabota = Number(input[3]);

    let sumaNailov = cenaPredpazaenNajlon * (neobhodimoKolichestvoNajlon + 2);
    let sumaBoq = cenaBoqLityr * (neobhodimoKolichestvoBoq + 0.1 * neobhodimoKolichestvoBoq);
    let sumaRazdelitel = cenaRazdelitelZaBoqLityr * kolichestvoRazdelidel;
    let torbichki = 0.40;
    let sumaMateriali = sumaBoq + sumaNailov + sumaRazdelitel + torbichki;

    let sumaMaistori = (sumaMateriali * 0.3) * chasoveRabota;
    let krainaSuma = sumaMaistori + sumaMateriali
    console.log(krainaSuma);
}

repainting(["5 ",
"10 ",
"10 ",
"1 "]
)