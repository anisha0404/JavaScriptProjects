let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpara=document.querySelector("#uscore");
const compara=document.querySelector("#cscore");
/************************draw game**************** */
const drawgame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor = "#081b31";
}
/*********************show winner function************* */
const showwinner=(userwin,userchoice,cchoice)=>{
    if(userwin)
    {
        console.log("You win ");
        user++;
        userpara.innerText=user;
        msg.innerText=`You win! ${userchoice} beats ${cchoice}`;

        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose");
        
        comp++;
        msg.innerText=`You win! ${cchoice} beats your ${userchoice}`;
        compara.innerText=comp;
        msg.style.backgroundColor = "red";
    }
};

/*********************computer choice***************** */
const compchoice=()=>{
    let options=["rock","paper","scissors"];
    let value=Math.floor(Math.random()*3);
    return options[value];
};

/************************** game play ******************* */
const playgame=(userchoice)=>{
    console.log("User choice:",userchoice);
    const cchoice=compchoice();
    console.log("Computer choice:",cchoice);
    if (userchoice===cchoice){
        drawgame();

    }
    else{
        let userwin=true;
        if(userchoice==='rock'){
            userwin=cchoice==="paper"?false:true;
        }
        else if(userchoice=== 'paper'){
            userwin=cchoice==="scissors"?false:true;
        }
        else{
            userwin=cchoice==='rock'?false:true; 
        }
        showwinner(userwin,userchoice,cchoice);
    }
};
/***********************user choice************ */
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        
        const userchoice=choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});
