const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
require ('./db/mongoose')
const routerTask = require ('./routers/task')
const routerUser = require('./routers/user')

// app.use((req,res,next)=>{
//   res.status(503).send('The site is in maintenance')
// })

app.use(express.json())
app.use(cors())
app.use(routerUser)
app.use(routerTask)


app.listen(port, ()=>{
    console.log('Server is on port :' + port)
})