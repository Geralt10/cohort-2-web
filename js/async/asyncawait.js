function getNum(){
    return new Promise((resolve,reject)=>{
        let num= Math.floor(Math.random()*100); 
        if(num%2==0){
            console.log("it is even");
            resolve(num);
        }
        else{
            console.log("its not even");
            reject(false);
        }
    })
}

async function task() {
    try{
        let data = await getNum();
        console.log(data);
    }
    catch(err){
        console.log(err);
        
    }
    finally{
        console.log("resloved");
        
    }
}

task();