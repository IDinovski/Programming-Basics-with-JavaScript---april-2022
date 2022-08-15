function fishland(input){

 let cenaSkumriqKilogram = Number(input[0])   ;
 let cenaCacaKilogram = Number(input[1]);
 let kilogramaPalamud = Number(input[2]);
 let kilogramaSafrid = Number(input[3]);
 let kilogramaMidi = Number(input[4]);

 let cenaPlamud = cenaSkumriqKilogram * 1.6;
 let cenaSafrid = cenaCacaKilogram * 1.8;
 let cenaMidi = 7.50;

 let izhod = cenaPlamud * kilogramaPalamud + cenaSafrid * kilogramaSafrid + kilogramaMidi * cenaMidi;

 console.log(izhod.toFixed(2))


}
fishland(["6.90","4.20","1.5","2.5","1"])