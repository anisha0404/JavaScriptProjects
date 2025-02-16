const url="https://potterapi.onrender.com/en/spells";
// let promise=fetch(url);
// console.log(promise);
const para=document.querySelector("#fact");
const btn=document.querySelector("#btn");

// const getfacts=async()=>{
//     console.log("Getting data....");
//     let response=await fetch(url);
//     console.log(response);
//     let data=await response.json();
//     para.innerText=data[0].text;
// }; 
function getfacts() {
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        para.innerText=data[2].text;
    });
}
 btn.addEventListener("click",getfacts);