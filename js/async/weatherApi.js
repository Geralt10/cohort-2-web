let apiKey="e36d3dda756d3afdf6b63fd821fc1e1a"

async function getWeather(city){
    try{
        let raw=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        if(!raw.ok){
        throw new Error("city does not exists.")
    }
    let realdata= await raw.json();
    console.log(realdata.main.temp+'°');
    }
    catch(err){
        console.log(err.message);
        
    }
    
}


getWeather('delhi')