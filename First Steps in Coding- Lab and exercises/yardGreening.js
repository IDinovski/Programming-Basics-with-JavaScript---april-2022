function yardGreening(input){
    let cenaKvadrat = 7.61;
    let cenaCqlDvor = (Number(input[0]) * cenaKvadrat);
    let namalenie = cenaCqlDvor * 0.18;
    let krainaCena = cenaCqlDvor - namalenie
    console.log(`The final price is: ${krainaCena} lv.`);
    console.log(`The discount is: ${namalenie} lv.`);

}
yardGreening(["550"]);