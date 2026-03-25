const express =require('express');


const app = express();

app.get('/',(req,res)=>{
    const dummy =[
        {
            username:'himanshu',
            city:'dehradun',
            age:22
        }
    ]
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');
      res.json({ data: dummy });
})

app.listen(8000,()=>{
    console.log("server is running at 8000");
    
})