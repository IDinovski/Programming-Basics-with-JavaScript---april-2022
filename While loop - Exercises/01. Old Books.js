function solve(input){
    let index = 0;
    let bookName = input[index];
    index++
    let nextBook = input[index];
    index++
    let counter = 0;
    let buleva = true
    while(nextBook!==`No More Books`){
        if(nextBook===bookName){
            buleva = false
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
counter++
nextBook = input[index];
index++
    }
    if(buleva===true){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
}
}
solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


