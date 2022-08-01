function pipesInPool(input){
    let obemNaBaseina = Number(input[0]);
    let debit1VATrybaNaChas = Number(input[1]);
    let debit2RATrybaNaChas = Number(input[2]);
    let chasoveRabotnik = Number(input[3]);
let debit1 = debit1VATrybaNaChas*chasoveRabotnik;
let debit2 = debit2RATrybaNaChas*chasoveRabotnik
    let zapylnenost = debit1VATrybaNaChas*chasoveRabotnik + debit2RATrybaNaChas*chasoveRabotnik;
let procentZapylnenost = (zapylnenost/obemNaBaseina)*100
let procent1va = ((debit1/zapylnenost)*100);
let procent2ra = ((debit2/zapylnenost)*100);
let pylnimost1va = debit1VATrybaNaChas*chasoveRabotnik;
let pylnimost2ra = debit2RATrybaNaChas*chasoveRabotnik;
let prepylvane = 0
if (zapylnenost<=obemNaBaseina){
    console.log(`The pool is ${procentZapylnenost.toFixed(2)}% full. Pipe 1: ${procent1va.toFixed(2)}%. Pipe 2: ${procent2ra.toFixed(2)}%.`);
} else if( zapylnenost>obemNaBaseina){
prepylvane = zapylnenost-obemNaBaseina;
console.log(`For ${chasoveRabotnik} hours the pool overflows with ${prepylvane} liters.`);
}



}
pipesInPool ([100
    ,100
    ,100
,2.5    
    ])