function fishTank(input){
    let dyljina = Number(input[0]);
    let shirina = Number(input[1]);
    let visochina = Number(input[2]);
    let procentZaetoProstrastvo = Number(input[3]) / 100;

    let obemNaAkvariuma = dyljina * shirina * visochina;
    let obemLitri = obemNaAkvariuma * 0.001;
    let NujniLitri = obemLitri * (1 - procentZaetoProstrastvo);
    console.log(NujniLitri)

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)