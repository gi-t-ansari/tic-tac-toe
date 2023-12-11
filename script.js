const boxes = document.querySelectorAll(".box");
const displayWinner = document.querySelector(".display-winner");
const matchSummary = document.querySelector(".match-summary");
const game = document.querySelector(".game")
const resetBtn = document.querySelector(".reset-btn");
const newGameBtn = document.querySelector(".new-game-btn");

let turnO = true;
let count = 0;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const showWinner = (winner) => {
    matchSummary.innerText = `Congratulations ${winner}, You Won`;
    displayWinner.classList.remove("hide")
    game.classList.add("hide");
    resetBtn.classList.add("hide");
}

const showMsg = (msg) => {
    game.classList.add("hide");
    resetBtn.classList.add("hide");
    displayWinner.classList.remove("hide");
    matchSummary.innerText = msg;
        
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) {
            box.innerText = "O";
            box.disabled = true;
            turnO = false;
            count++;
        } else {
            box.innerText = "X";
            box.disabled= true;
            turnO = true;
            count++;
        }

        if(count > 9) {
            showMsg("Match Drawn");
        }

        checkWinner()
    })
})

const checkWinner = () => {

    for(let pattern of winningPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val !='' && pos2Val != '' && pos3Val != '') {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    count = 1;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    })

    displayWinner.classList.add("hide");
    game.classList.remove("hide");
    resetBtn.classList.remove("hide");
    matchSummary.innerText = ""

};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

