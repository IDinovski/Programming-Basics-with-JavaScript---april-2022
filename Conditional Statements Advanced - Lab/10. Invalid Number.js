function invalidNumber(input){
    let entry = Number(input[0]);
    if ( entry < 100 && entry !== 0){
        console.log(`invalid`);
    } else if ( entry > 200){
        console.log(`invalid`);

    }
}