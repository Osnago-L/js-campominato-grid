function difficultyStart(){
    let difficulty = document.getElementById("difficulty").value;
    if(difficulty == "easy"){
        document.querySelector(".maingrid").innerHTML = "";
        let square = ""
        for (let i = 1; i <= 100; i++) {
             square = document.createElement("div");
            let num = document.createElement("h1");
            document.querySelector(".maingrid").append(square);
            square.append(num)
            square.classList.add("grid10");
            square.classList.add('item-'+i);
            num.classList.add("numbox")
            num.innerHTML = i;
        }
    }else if(difficulty == "medium"){
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 81; i++) {
            let square = document.createElement("div");
            let num = document.createElement("h1");
            document.querySelector(".maingrid").append(square);
            square.append(num)
            square.classList.add("grid9");
            square.classList.add('item-'+i);
            num.classList.add("numbox")
            num.innerHTML = i;
        }
    }else{
        document.querySelector(".maingrid").innerHTML = "";
        for (let i = 1; i <= 49; i++) {
            let square = document.createElement("div");
            let num = document.createElement("h1");
            document.querySelector(".maingrid").append(square);
            square.append(num)
            square.classList.add("grid7");
            square.classList.add('item-'+i);
            num.classList.add("numbox")
            num.innerHTML = i;
        }
    }
}

