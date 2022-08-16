function solve(input) {
    let index = 0;
    let n = Number(input[index]);
    index++
    let maks1 = 0;
    let maks2 = 0
    let maks = 0
    let pyrvoZaSbor = Number(input[index]);
    index++;
    let vtoroZaSbor = Number(input[index]);
    index++
    let pyrvisbor = pyrvoZaSbor + vtoroZaSbor;
    let sbor = 0
    let minimum = 0 

    for (let i = 1; i < n; i++) {
        let pyrvo = Number(input[index]);
        index++
        let vtoro = Number(input[index]);
        index++
        sbor = pyrvo + vtoro;
        if (pyrvisbor !== sbor && sbor > pyrvisbor) {
            if(maks1>pyrvisbor){
            minimum = maks1} else{
                minimum=pyrvisbor
            }
            maks1 = sbor
        } else if (pyrvisbor !== sbor && sbor <= pyrvisbor) {
            maks2 = pyrvisbor
            minimum=sbor
        }
        // console.log(sbor);
    }
    if (maks1 >= maks2) {
        maks = maks1
    } else {
        maks = maks2
    }
    // let minimum = 0 
    // if(minimum1>minimum2){
    //     minimum = minimum1
    // } else{
    //     minimum=minimum2
    // }
    let diff = maks-minimum



    if (pyrvisbor === sbor||n===1) {
        console.log(`Yes, value=${pyrvisbor}`);
    } else {
        console.log(`No, maxdiff=${diff}`);
    }
}
solve([2,1,2,2,2])
// solve([7,
//     34,
//     -33,
//     52,
//     12,
//     -32,
//     32,
//     23,
//     41,
//     7,
//     25,
//     34,
//     23,
//     124,
//     21])

// Дадени са 2*n-на брой числа. Първото и второто формират двойка, третото и четвъртото също и т.н.
//  Всяка двойка има стойност – сумата от съставящите я числа. Напишете програма, която проверява дали
//  всички двойки имат еднаква стойност или печата максималната разлика между две последователни двойки.
//  Ако всички двойки имат еднаква стойност, отпечатайте "Yes, value={Value}" + стойността. В противен случай отпечатайте
// "No, maxdiff={Difference}" + максималната разлика