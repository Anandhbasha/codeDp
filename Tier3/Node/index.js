// console.log("Hello this NodeJs");
// We need to use to many middlewares
// commonjs-> require
// module->prefferable

import express from "express"
import { router } from "./Router/router.js"

// server side rendering->
const app = express()

const PORT = 2345

app.use("/crud",router)
app.use(express.json())
// method.route,controller
// get,put,post,delete
// controller need two method is req,res


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);    
})