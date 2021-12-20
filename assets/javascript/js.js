function difficultyStart(){
    let difficulty = document.getElementById("difficulty").value;
    let arrayItem = [];
    if(difficulty == "easy"){
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 100; i++) {
            let square = `<div class="grid10"><h1 class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
            arrayItem.push(square);
        }
    }else if(difficulty == "medium"){
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 81; i++) {
            let square = `<div class="grid9"><h1 class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
            arrayItem.push(square);
        }
    }else{
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 49; i++) {
            let square = `<div class="grid7"><h1 class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
            arrayItem.push(square);
        }
    }
    console.log(arrayItem)

    for (let i = 0; i < array.length; i++) {
    }
}
