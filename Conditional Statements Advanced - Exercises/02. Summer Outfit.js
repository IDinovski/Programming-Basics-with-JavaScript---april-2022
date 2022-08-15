 function summerOutfit(input){
     let gradusi = Number(input[0]);
     let vremeOtDenonoshtie = input[1];
     let outfit = String;
     let shoes = String;


     if (10<= gradusi && gradusi<=18){
        if (vremeOtDenonoshtie === `Morning`){
            outfit = `Sweatshirt`;
            shoes = `Sneakers`;
        } else if ( vremeOtDenonoshtie === `Afternoon`){
            outfit = `Shirt`;
            shoes = `Moccasins`;
        } else if ( vremeOtDenonoshtie === `Evening` ){
            outfit = `Shirt`;
            shoes = `Moccasins`
        }
     } else if (18<gradusi&& gradusi<=24){
        if (vremeOtDenonoshtie === `Morning`){
            outfit = `Shirt`;
            shoes = `Moccasins`;
        } else if ( vremeOtDenonoshtie === `Afternoon`){
            outfit = `T-Shirt`;
            shoes = `Sandals`;
        } else if ( vremeOtDenonoshtie === `Evening` ){
            outfit = `Shirt`;
            shoes = `Moccasins`
        }
     } else if ( gradusi>=25){
        if (vremeOtDenonoshtie === `Morning`){
            outfit = `T-Shirt`;
            shoes = `Sandals`;
        } else if ( vremeOtDenonoshtie === `Afternoon`){
            outfit = `Swim Suit`;
            shoes = `Barefoot`;
        } else if ( vremeOtDenonoshtie === `Evening` ){
            outfit = `Shirt`;
            shoes = `Moccasins`
        }
     }
     console.log(`It's ${gradusi} degrees, get your ${outfit} and ${shoes}.`);
 }