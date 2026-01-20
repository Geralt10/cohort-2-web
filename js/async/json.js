let obj ={
    name:'himanhu',
    age:10
}

let str = JSON.stringify(obj);
console.log(typeof(str));

let obj2 = JSON.parse(str);

console.log(typeof(obj2));


obj2.name="akash";
console.log(obj2);

console.log(obj);

