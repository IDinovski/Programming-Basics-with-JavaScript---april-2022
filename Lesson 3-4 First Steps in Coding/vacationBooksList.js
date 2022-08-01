function vacationBookList(input){
    let broiStranici = Number(input[0]);
    let straniciNaChas = Number(input[1]);
    let broiDni = Number(input[2]);
    let ednaKniga = broiStranici / straniciNaChas;
    let otgovor = ednaKniga / broiDni;
    console.log(otgovor)
    
}
vacationBookList(["432 ",
"15 ",
"4 "]
)