import express from 'express'
import './db/connn.js'

import router from './routers/teacher.js'
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`connection is setup at ${port}`)
})
