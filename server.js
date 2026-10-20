const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())

dotEnv.config()
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('DB Connection Successfully')
})
app.use('/users', userRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})
