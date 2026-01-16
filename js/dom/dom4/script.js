let btn = document.querySelector('main .bottom button');
let inner = document.querySelector('.inner');
let h2 = document.querySelector('.bottom h2');
let wide = 0;
btn.addEventListener('click',function(){
    btn.style.pointerEvents='none';
    let num =50+Math.floor(Math.random()*50);
    let intervalId= setInterval(()=>{
          wide++;
          inner.style.width=wide+"%";
          h2.innerHTML=wide+'%';
          if(wide===100){
             clearInterval(intervalId);
             btn.innerHTML='Downloaded';
             btn.style.backgroundColor='rgb(0, 0, 0)'
             btn.style.opacity='0.5';
             console.log(`download in ${num/10} secs`);
          }
    },num);
});