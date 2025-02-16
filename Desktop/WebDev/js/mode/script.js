let mbtn=document.querySelector("#btn");
let currmode="light";
let bg=document.querySelector("body");
let h=document.querySelector("h1");
mbtn.addEventListener("click",()=>{
    if(currmode==="light")
        {
            currmode="dark";
            bg.style.backgroundColor="black";
            h.style.color="white";
        }
    else
    {
        currmode="light";
        bg.style.backgroundColor="white";
        h.style.color="black";
    }
    console.log(currmode);
});