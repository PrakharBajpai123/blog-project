const express = require('express')
const Frontcontroller = require('./Controllers/Frontcontroller')
const app = express()
const port=5000


//route
app.get('/',Frontcontroller.home)
app.get('/about',Frontcontroller.about)
app.get('/contact',Frontcontroller.contact)


//server created
app.listen(port,()=>{
    console.log(`server is started at port ${port}`)
})