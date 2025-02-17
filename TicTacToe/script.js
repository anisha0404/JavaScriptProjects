let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turn0=true;
let newgame=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".mcontainer");
let msg=document.querySelector("#msg");
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//**********************************************************placing o and x values*************************************************************//
boxes.forEach(box =>{
    box.addEventListener("click",()=>{
        if (turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

// ******************************************************disabled function once winner is declared********************************************//
const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//****************************************************** *enabled function once reset game takes place***************************************//
const enabled=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
            
        }
};
// *******************************************************show new game button function if there is a winner declared***************************************//
const showwinner=(winner)=>{
    msg.innerText=`Congartulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabled();
};
// *****************************************************checkwinner function*****************************************************************//
const checkwinner=()=>{
    for(let pat of win){
      //console.log(boxes[pat[0]].innerText,boxes[pat[1]].innerText,boxes[pat[2]].innerText);
      //console.log(pat[0],pat[1],pat[2]);
      //console.log(boxes[pat[0]]);
      //console.log(pat);
    let posval1=boxes[pat[0]].innerText;
    let posval2=boxes[pat[1]].innerText;
    let posval3=boxes[pat[2]].innerText;
    if(posval1!=""&&posval2!=""&&posval3!="")
    {
        if(posval1===posval2&&posval2===posval3)
        {
            console.log("winner is ",posval1);
            showwinner(posval1);
            return true;
        }
        
    }
    
    }
};

//*********************************************************reset function*************************************************************************************//
const reset=()=>{
   turn0=true;
   enabled();
   msgcontainer.classList.add("hide");
};
//*************************************************************function call for reset and new game button********************************** */
resetbtn.addEventListener("click",reset);
newgame.addEventListener("click",reset);