const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    if(req.headers['user-agent']==="Mozilla/5.0 (Windows NT 861; Win64; x32; rv:621007.0) Gecko/202420232202 Firefox/1616.0"){
        return res.json({
            statusCode:"404",
            message:"Pages Not Found"
        })
    }else{
        return res.json({
            message:"Useragent not found"
        })
    }
})



app.listen(port,()=>{
    console.log("ok");
})