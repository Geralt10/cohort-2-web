let btn = document.querySelector("main button");
let main = document.querySelector('main');
main.style.position="relative"
btn.addEventListener('click',function(){
  let intervalId= setInterval(function(){
     let circle = document.createElement('div');
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    let x = Math.floor(Math.random()*90);
    let y = Math.floor(Math.random()*90);
    circle.style.width="50px";
    circle.style.height="50px";
    circle.style.border="none";
    circle.style.borderRadius="50%";
    circle.style.backgroundColor=`rgb(${color1},${color2},${color3})`;
    circle.style.position="absolute";
    circle.style.left=x+"%";
    circle.style.top=y+"%";
    
    main.appendChild(circle);
    
   },100);
   setTimeout(() => {
  clearInterval(intervalId);
  console.log("stopped");
}, 10000);
})


