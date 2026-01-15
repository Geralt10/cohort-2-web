/** @format */

// function add(...val){
//     let a =0;
//     val.forEach(function(value){
//            a=a+value;
//     })
//     return a;
// }

// let b=add(1,2,3,4,5,6);
// console.log(b);

// 2nd

// let arr1= ["mango","apple","banana","orange"];
// arr1.push("lichi");
// console.log(arr1);
// arr1.shift();
// console.log(arr1);

//3rd

// function runtwice(run){
//     run();
//     run();
// }

// runtwice(function run(){
//     console.log("run1 run 2");

// })

//4th

//  let a=12
//  function pure(a){
//      console.log(a+2);

//  }
// pure(a);

// let global = 0;
// function impure(a){
//     global++;
//     return a+global;
// }

// let b = impure(a);
// b=impure(a);
// console.log(b);

//5th

// function obj1({name,age}){
//     console.log(name,age);

// }

// obj1({name:"himanshu",age:23});

//6th

// let obj ={
//     name: "himanshu",
//     age:23
// }

// for(let key in obj){
//     console.log(key);

// }
// for(let val in obj){
//     console.log(obj[val]);

// }

// let arr =[1,2,3,4,5,6]

// for(let val of arr){
//     console.log(val);

// }

//7th

// let obj = {
//     name:"himanshu",
//     fnc: function(){
//          let func2=()=>{
//             console.log(this);    //if we check the value of this inside the normal function it will give obj and if we check inside arrow function it will give parent values

//          }
//          func2();
//     }
// };

// obj.fnc();


//8th


// let names = ["himanshu","aaka","yuki","amit"];
// let b = names.some((value)=>{                                             
//     return value >3;
// })
 //   console.log(b);
                                                               //returns true or false
// let a = names.every((val)=>{
//     return val==3;
// })
    // console.log(a);
    



//9th

// let user={
//     name:"himanshu",
//     age:23,
//     email:"haidsna@ac.h"
// }
                                                                          
// // Object.freeze(user);                       // freeze na hi kuch change krne deta hai na hi add or seal change krne deta hai but add krne nhi deta
// // Object.seal(user);

// user.name="yuki";
// user.address="shaiudhas"
// console.log(user);

