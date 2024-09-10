console.log("Jay Shree Ram ");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn =document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");



let turno=true;  //player o , player x 
const winpatter= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame= ()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno)
            //player O
            {
            box.innerText="O";
            turno=false;
        }else
        //player X
        {
            box.innerText="X"
            turno=true;

        }
        box.disabled=true;
        checkwinner();
    });
});

const disabledboxes = ()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableboxes = ()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkwinner = ()=>{
    for( let pattern of winpatter){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

