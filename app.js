let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#n-btn");
let messagecontainer =document.querySelector(".messagecontainer");
let tie = document.querySelector("#tie")
let turno =true;
let turnx = false;
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turno == true){
        box.innerText= "O";
        turnx = true;
        turno = false;
        count++;
        }
        else if(turnx == true){
            box.innerText= "X"; 
            turno = true;
            turnx = false;
           count++;
        }
        console.log(count);
        box.disabled = true;
         if(count == 9){
            msg.innerText = `Match Tie`;
            messagecontainer.classList.remove("hide"); 
            boxes.forEach((box) => {
            box.disabled = true;
            
         });
        }
         checked();
        
    });
});
resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.textContent = '';
     box.disabled = false;
  });
  msg.innerText = "";
    messagecontainer.classList.add("hide");
    turno = true;
    turnx = false;
    count = 0;
});
 const showwinner = (winner) => {
    msg.innerText = `Winner is "${winner}"`;
    messagecontainer.classList.remove("hide"); 
        boxes.forEach((box) => {
       box.disabled = true;
       count = 0;
  });
    };
   
    newbtn.addEventListener("click",() =>{
       boxes.forEach((box) => {
        box.textContent = '';
        box.disabled = false;
        count = 0;
    });
    msg.innerText = "";
    messagecontainer.classList.add("hide");
    turno = true;
    turnx = false;
});
 const checked =  () => {
      for(let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
      
      if(pos1 !="" &&pos2 !=""&& pos3 !="" ){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner")
            showwinner(pos1);
        }
      }
    }
 };
