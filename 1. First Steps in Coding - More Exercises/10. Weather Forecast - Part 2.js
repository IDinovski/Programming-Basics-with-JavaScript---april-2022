function weatherForecast (input){
    let gradusi = Number(input[0]);
    if (gradusi>=26 && gradusi<=35){
        console.log("Hot");
    }  else if (20.1<=gradusi && gradusi<=25.9){
        console.log("Warm");
    }  else if (15.00<=gradusi && gradusi<=20){
        console.log("Mild");
    }  else if (12<=gradusi && gradusi<=14.9 ){
        console.log("Cool");
    } else if (5<=gradusi &&gradusi<=11.9){
        console.log("Cold");
}if (gradusi === 0){
    console.log("unknown");
}
}
weatherForecast (["0"])
