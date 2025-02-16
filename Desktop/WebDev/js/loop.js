//summ=0;
//et k=1;
//hile(k<=10)
//{}
//    summ+=k;
 //   console.log('Sum:',summ);
//    console.log('k:',k);
//}
/****************************FOr of loop*********************************/
    //let str="ANISHA MEHTA";
   // for(let i of str)
   // {
   //     console.log("i:",i);
    //}
    /**************************game **************************** */
    /*let gamenum=25;
    let usernum=console.log("Enter the number");
    while(gamenum!=usernum){
        console.log("Enter the number:");
    }*/
/************************for of loop**************** */
/*let str="JavaScript";
let size=0;
for(let i of str)
{
    console.log("i is:",i);
    size++;
}
console.log("Size is",size);
*/
/***********************for in loop*********** */
/*let student={name:"Rahul",age:20,pass:true,cgpa:8.9};
for (let key in student)
{
    console.log("key:",key,":",student[key]);
}*/
/*************************even number**************/
/*for(let num=0;num<=100;num++)
{
    if(num%2==0)
        console.log("Number:",num,"is an even number");
    else
    console.log("number:",num,"is odd");
}
*/
/********************methods for string*******/
/*
let str="InternatioNal";
let method=[
    {key:"str1",value:str.toUpperCase()},
 { key:"str2",value:str.toLowerCase()},
 {key:"size",value:str.length},
 {key:"trimm",value:str.trim()},
 {key:"slicee",value:str.slice(8,13)},
 {key:"concat1",value:str.concat(str.toUpperCase())},
{key:"concat2",value:str.concat(str.toLowerCase())},
 {key:"replacing",value:str.replace("N","n")},
 {key:"index",value:str.charAt("N")}];

for(let key in method)
{
    console.log(method[key]);
}
*/
/***************question:prompt the user name and return the user name with @ at beginning and at last length of the user name */
/*
let username=prompt("Enter username");
let username1="@".concat(username);
let len=username1.length;
let concatt=username1+len;
console.log("Hey",username,"your username is:",concatt);
*/
/********************************arrays */
/*let array=["hello","namaste","hey","holla"];
console.log(array);
array[4]="Anisha";
console.log(array);
*/
/********************question************ */
/*let array=["Bloomerg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(array);
let arr=array.shift();
console.log(arr);
console.log(array);
array[1]="Ola";
console.log(array);
array[5]="Amazon";
console.log(array);
*//*********************functions************** */
/*function myfunc(msg)
{
    let count=0;
    for(let n of msg.toLowerCase())
    {
        if (n=="a"||n=="e"||n=="i"||n=="o"||n=="u")
        {
             count++;
        }
       
    }
    console.log(count);
}
myfunc("Anisha");
*/
/*const myfunc=(msg)=>{
    let count=0;
    for(let n of msg.toLowerCase())
    {
        if (n=="a"||n=="e"||n=="i"||n=="o"||n=="u")
        {
             count++;
        }
       
    }
    console.log(count);

}
*/
/*******************array question*****************/
let arr=[2,3,4,5,6];
arr.forEach(function sqaur(num){
    console.log(num*num);
});