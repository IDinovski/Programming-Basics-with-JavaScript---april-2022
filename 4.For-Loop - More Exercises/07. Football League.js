function solve(input) {
    let index = 0;
    let kapacitetNaStadiona = Number(input[index]);
    index++;
    let broiVsichkiFenove = Number(input[index]);
    index++
    let countA = 0
    let countB = 0
    let countV = 0
    let countG = 0
    for (let i = 0; i < broiVsichkiFenove; i++) {
        let fen = input[index];
        index++
        switch (fen) {
            case `A`: countA++; break;
            case `B`: countB++; break;
            case `V`: countV++; break;
            case `G`: countG++; break;
        }
    }
    let procentA = countA / broiVsichkiFenove * 100
    console.log(`${procentA.toFixed(2)}%`);
    let procentB = countB / broiVsichkiFenove * 100
    console.log(`${procentB.toFixed(2)}%`);
    let procentV = countV / broiVsichkiFenove * 100
    console.log(`${procentV.toFixed(2)}%`);
    let procentG = countG / broiVsichkiFenove * 100
    console.log(`${procentG.toFixed(2)}%`);
    let procentVsichki = broiVsichkiFenove / kapacitetNaStadiona * 100;
    console.log(`${procentVsichki.toFixed(2)}%`);
}

// Екипът на СофтУни си организира футболен турнир. Първоначално прочитаме от конзолата капацитета на стадиона и броят на
// всички фенове. След това за всеки фен се чете секторът, в който се намира. Феновете на първия отбор са
//  в сектор А и Б, а на втория – В и Г. Да се напише програма, която изчислява процентите на феновете във всеки сектор,
//  спрямо общия брой фенове на стадиона, както и общият процент на феновете за двата отбора, спрямо капацитета на стадиона.
//   Общият брой на феновете НЕ надвишава капацитета на стадиона.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// 1.	Капацитетът на стадиона – цяло число в интервала [1 … 10000];
// 2.	Броят на всички фенове – цяло число в интервала [1 … 10000].
// За всеки един фен, на отделен ред се прочита:
// 1.	Секторът, на който се намира – текст – "A", "B", "V" и "G".
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00%, форматирани до втората цифра след десетичната запетая:
// 1.	Процентът на феновете в сектор А
// 2.	Процентът на феновете в сектор Б
// 3.	Процентът на феновете в сектор В
// 4.	Процентът на феновете в сектор Г
// 5.	Процентът на всички фенове, спрямо капацитета на стадиона.
