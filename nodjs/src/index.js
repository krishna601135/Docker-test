const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config();


const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({
   'Name':'Mohan',
   'City':'Bhimavaram',
   'phn':099999999
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

