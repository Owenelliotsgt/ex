const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 3000;
const path=require('path')

app.get("/",(req,res)=>{
    if(req.headers['user-agent']==="Mozilla/5.0 (Windows NT 861; Win64; x32; rv:621007.0) Gecko/202420232202 Firefox/1616.0"){
        return res.sendFile(path.join(__dirname,"index.html"));
    }else{
        return res.redirect("https://facebook.com")
    }
})

app.get("/a",(req,res)=>{
    if(req.headers['user-agent']==="Mozilla/5.0 (Windows NT 861; Win64; x32; rv:621007.0) Gecko/202420232202 Firefox/1616.0"){
        return res.redirect("https://twitter.com")
    }else{
        return res.redirect("https://youtube.com")
    }
})


app.listen(port,()=>{
    console.log("ok");
})