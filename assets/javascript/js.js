function difficultyStart(){
    let difficulty = document.getElementById("difficulty").value;
    if(difficulty == "easy"){
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 100; i++) {
            let square = `<div class="grid10 item"><h1 class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }else if(difficulty == "medium"){
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 81; i++) {
            let square = `<div class="grid9 item"><h1 class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }else{
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 49; i++) {
            let square = `<div class="grid7 item"><h1 class="numbox">${i}</h1></div>`;
            document.querySelector(".maingrid").innerHTML += square;
        }
    }
        const arrayItem = document.querySelectorAll(".item");
    
        for(let i = 0; i < arrayItem.length; i++) {
            arrayItem[i].addEventListener("click", function() {
                this.style.backgroundColor = "#6495ED";
            });
        }

    
}
