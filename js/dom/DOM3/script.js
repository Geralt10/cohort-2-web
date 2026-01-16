let btn = document.querySelector("main button");
let main = document.querySelector('main');
main.style.position="relative";
let arr=['hi this is himanshu','im MCA Student','im 22 years old','i love web dev','im from kotdwar','i will get a job this year']
btn.addEventListener('click',function(){
  let intervalId= setInterval(function(){
     let h1 = document.createElement('h1');
     let index=Math.floor(Math.random()*6);
     h1.innerHTML=arr[index];
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let r = Math.floor(Math.random()*180);
    let s = Math.floor(Math.random()*3);
    h1.style.color=`rgb(${color1},${color2},${color3})`;
    h1.style.position="absolute";
    h1.style.left=x+"%";
    h1.style.top=y+"%";
    h1.style.rotate=r+"deg";
    h1.style.scale=s;
    main.appendChild(h1);
    
   },200);
   setTimeout(() => {
  clearInterval(intervalId);
  console.log("stopped");
}, 50000);
})


