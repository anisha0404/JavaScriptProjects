

let bulbon=document.querySelector("#on");
let bulboff=document.querySelector("#off");
let imagebulb=document.querySelector("#bulb");
// console.log(bulbon);
// console.log(bulboff);
bulbon.addEventListener("click",()=>{
    imagebulb.src="bulb-on.png";
});
bulboff.addEventListener("click", () => {
    imagebulb.src = "bulb-off.png";
  });
