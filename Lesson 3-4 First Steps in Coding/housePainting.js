function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    
    let stranichnaStena = x * y;
    let prozorecPlosht = 1.5*1.5;
    let dveteStraniObshto = 2*stranichnaStena-2*prozorecPlosht;
    let zadnaStena = x*x;
    let vhod = 1.2*2;
    let obshtoZadnaPredna = (2 * zadnaStena) - vhod;
    let obshto = obshtoZadnaPredna + dveteStraniObshto;
    let zelena = obshto / 3.4;
    
    let pokrivStranichno = 2 * ( x * y );
    let pokrivOtpred = 2 * ( x * h/2 );
    let pokrivObshto = pokrivOtpred + pokrivStranichno;
    let chervena = pokrivObshto / 4.3;

    console.log(zelena.toFixed(2));
    console.log(chervena.toFixed(2));


    }
housePainting(["6","10","5.2"])