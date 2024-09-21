let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

/****************      PRINTING X AND O VALUE      ************/
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnX){ //player X turn and then will set the playerX turn to false
            box.innerText="X";
            turnX=false;
        }else{ //playerO turn and set the playerX turn as true
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true; //disabling the box after playing clicking to it

        checkWinner();
    })
}); 

const resetGame = () =>{
    turnX = true;
    boxEnable();
    msgContainer.classList.add("hide");
}


/****************     DISABLING BOXES, IF WE GOT THE WINNER      ************/
const boxDisabled = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

/****************     ENABLE THE BOX     **************/
const boxEnable = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

/****************      PRINTING WINNER      ************/
const showWinner = (winner) => {
    msg.innerText = `Congratulions, winner is ${winner}`;
    msgContainer.classList.remove("hide"); //we're removing the hide class so that we can display the winner message
    boxDisabled(); //calling the disable boxes funtion after we got the winner
}


/****************      CHECKING WINNER      ************/
const checkWinner =  () => {

    for(pattern of winPattern){
        
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText; 
            let pos3Val = boxes[pattern[2]].innerText;

            //traversing through the winning pattern
            //accessing all the position of the boxes and storing the values in a variable

            if(pos1Val!="" && pos2Val!="" && pos3Val!="") //any one of the position should not be empty
            {
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner");
                    showWinner(pos1Val);
                }
            }
    }
 
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);