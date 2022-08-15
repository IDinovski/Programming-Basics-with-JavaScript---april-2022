function krainasuma(input){

    let depozit = Number(input[0]);
    let srok = Number(input[1]);
    let procent = Number(input[2]);
    let suma = depozit + srok * ( depozit * procent / 100  / 12)
    console.log(suma)

}
krainasuma(["2350" , "6" , "7"])