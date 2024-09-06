let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector(".reset")
let messContaner = document.querySelector(".mess_contaner")
let newgame_btn = document.querySelector(".newgame")
let msg = document.querySelector("#message")

let turnX = true;

const winNumber = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const newGame = () =>{
    turnX = true;
    enableboxes();
    messContaner.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box working");
        if(turnX === true) {
            box.innerText = "X";
            box.style.color = "red";
        turnX = false;
        }else{
            box.innerText = "O";
            box.style.color = "blue";
            turnX = true;
        }
        box.disabled = true;
        
        chackWinner()
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showDraw =() =>{
    msg.innerText = "IT IS A DRAW!"
    messContaner.classList.remove("hide");
    disableboxes();
};

const showWinner = (winner) =>{
    msg.innerText = `WINNER IS ${winner}`;
    messContaner.classList.remove("hide");
    disableboxes();
}

const  chackWinner = () => {
    for(let pattern of winNumber){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner is",pos1Val);
                showWinner(pos1Val);
            }
        }
        if ([...boxes].every(box => box.innerHTML !== "")) {
            showDraw();
        }
    }
};

newgame_btn.addEventListener("click",newGame);