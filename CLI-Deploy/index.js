require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req,res)=>{
  let msg = 'welcome to cli server :b'
  res.status(200).send(msg)
})

app.listen(PORT, ()=>{
  console.log(`cli server up on PORT: ${PORT}`)
})
