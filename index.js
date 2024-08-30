import express from "express"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    return res.json({message:"Hello there"})
})

app.listen(3000,()=>console.log("Running Port 3000 "))
