function debounce(fn,delay){
    let timer=0;
    
    return function(){
        
        clearTimeout(timer);
       
        timer=setTimeout(fn,delay);
         
    }
}
document.querySelector("input").addEventListener('input',debounce(function(){
    console.log("chala");
    
},1000))