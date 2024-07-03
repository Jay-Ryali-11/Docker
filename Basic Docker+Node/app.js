const express = require('express')
const app = express()

app.get('/',(req,res)=>res.send('Hey Vardhan!'))
app.listen(3000,()=>console.log('Server is ready'))
