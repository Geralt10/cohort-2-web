function throttle(fn,delay){
    let last =0;
    return function(){
        let now= Date.now();
        if(now-last>=delay){
            fn();
            last = now;
        }
    }
}

window.addEventListener('mousemove',throttle(function(e){
       console.log("chala")
},2000))