// console.log("Hello welcome to Advanced JS");
// setTimeout(()=>{
//     console.log("Hello welcome to Advanced JS after 5s");
// },5000);
// setTimeout(()=>{
//     console.log("Hello welcome to Advanced JS again after 10s");
// },10000);
// console.log("Hello welcome to Advanced JS");
// console.log("Hello welcome to Advanced JS");

//CALLBACK
// function sum(a,b){
//     console.log(a+b);
// }
// function calc(a,b,callbackfunc){
//     callbackfunc(a,b);
// }
// calc(2,3,sum);


// function calc(a,b,callback){
//     callback(a,b);
// }
//  calc(7, 5, (a,b)=>{
//     console.log(a+b);
// })

//nested if
// for(let i=0;i<=5;i++){
//     console.log(i);
//     console.log("hello",i,"times");
//     setTimeout(()=>{
//         console.log("hey");
//     },1000);
// }

//PROMISES
// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("success");
//         },5000);
//     });
// }
 
// getdata(1,()=>{
//     console.log("getting data 2");
//     getdata(2,()=>{
//         console.log("getting data 3");
//         getdata(3,()=>{
//             console.log("getting data 4");
//             getdata(4);
//         });
//     });
// });
// const getpromise=()=>{
//    return  new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         reject("some error occurred");
//        // resolve("success");
//     });
// }
// let promise=getpromise();
// // promise.then(()=>{
// //     console.log("Promise fulfilled");
// // });
// promise.catch(()=>{
//     console.log("Rejected");
// })

//************PROMISES****************/
// function asyncfunc1(){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
//         },4000);
//         });
//     };
// function asyncfunc2(){
//     return new Promise ((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("data2");
//                 resolve("Success");
//             },4000);
//             });
//         };

//METHOD1
// console.log("Fetching data");
// let p1=asyncfunc1();
// p1.then((res)=>{
//     console.log(res);
//     });
// console.log("Fetching data");
// let p2=asyncfunc2();
// p2.then((res)=>{
//         console.log(res);
//     });

//METHOD2

// console.log("Fetching data 1");
// let p1=asyncfunc1();
// p1.then((res)=>{
//     console.log(res)
//     console.log("fetching data2");
//     let p2=asyncfunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

//**************PROMISE CHAIN*********************/
// getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2)+.then(()=>{
//         console.log(res);
//     });
// });

//method2
// console.log("Fetching data1");
// getdata(1).then((res)=>{
//     console.log("Fetching data2");
//     return getdata(2);
// }).then((res)=>{
//     console.log("Fetching data3");
//     return getdata(3);
// }).then((res)=>{
    
//     console.log(res);
// });


// ***********async and  await***************
// async function hello(){
//     console.log("Hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);
//         });
// }
// async function getweather(){
//     await api();
//     await api();
//     await api();
// };

/*********************another example */
function getdata(dataid){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data",dataid);
        resolve("success");
        },5000);
    });
}
async function getalldata(){
    console.log("Getting data1");
    await getdata(1);
    console.log("Getting data2");
    await getdata(2);
    console.log("Getting data3");
    await getdata(3);
}