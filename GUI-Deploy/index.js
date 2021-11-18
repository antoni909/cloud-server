'use strict'

require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (req, res)=>{
  const msg = " hello from GUI server :)"
  res.status(200).send(msg)
})

app.listen(PORT, ()=>{ console.log(`GUI server is up on PORT: ${PORT} `) })
