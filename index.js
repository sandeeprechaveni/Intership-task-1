import express from "express";
const port=3000;
const app=express();
app.get("/", ( req, res)=>{
 res.send("successfull");
});
app.listen(port,()=>{
    console.log(`server is listening to the port ${port}`);
})