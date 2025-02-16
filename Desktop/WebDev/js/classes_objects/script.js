// const employee={
//     caltax(){
//         console.log('tax applicable is 10% out of the salary!');
//     },
// };
// const shubham ={
//     salary:50000,
// };
// const karthik={
//     salary:100000,
// };
// karthik.__proto__=employee;
// shubham.__proto__=employee;



// classes and objects +constructors


// 
// class ToyotaCar {
//     constructor(brand){
//         console.log("creating object");
//         this.brand=brand;
        
//     }
//     start(){
//         console.log("Start!");
//     }
//     stop(){
//         console.log("Stop!");
//     }
    
// }
// let fortuner=new ToyotaCar();
// let car=new ToyotaCar("CAR");



// inheritance


// class parent{
//     hello(){
//         console.log("this is parent  ")
//     }
// }
// class child extends parent{

// }
// let obj =new child();


class person{
    constructor(){
        console.log("This is parent constructor");
    }
    eat(){
        console.log("he eats")
    }
    sleep(){
        console.log('he sleeps');

    }
    work(){
        console.log('do the work');
    }
}
class engineer extends person{
    job(){
        console.log("Engineer works in a company");
    }
    constructor(branch){
        console.log("Enter child constructor");
        super();
        this.branch=branch;
        console.log("Exit child constructor");
    }
}
class doctor extends person{
    specialist(){
        console.log("Specialist in Physio therapy");
    }
}
 let object1 =new doctor();
let object2 =new engineer("CSE");
// let object3 =new person();