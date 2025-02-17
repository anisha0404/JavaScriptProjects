const BASE_URL ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
const drop=document.querySelectorAll(".drop-down select");
const btn=document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let i=0;

for (let select of drop){
    for (code in list ) {
        let newoption=document.createElement("option");
        newoption.innerText=code;
        newoption.value=code;
        if (select.name==="from" &&code==="USD"){
            newoption.selected="selected";
        }
        else if (select.name==="to" &&code==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })

}
const updateflag =(element)=>{
    let code=element.value;
    let country=list[code];
    let newsrc=`https://flagsapi.com/${country}/flat/64.png`;
    let image=element.parentElement.querySelector("img");
    image.src=newsrc;
} 
btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amntval=amount.value;

    if (amntval===""||amntval<1){
        amntval=1;
        amount.value="1";
    }
    // console.log(fromCurr.value,toCurr.value);
    let toCurrValue = typeof toCurr.value === 'string' ? toCurr.value : '';
    let url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurrValue.toLowerCase()}.json`;
    // const url=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCAse()}.json`;
    let response=await fetch(url);
    let data=await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    let finalAmount=amntval*rate;
    msg.innerText=`${amntval}${fromCurr.value}=${finalAmount}${toCurr.value}`;


});
