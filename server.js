import express, { urlencoded } from 'express'

import cors from 'cors'

import userRouter from './routes/userRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(urlencoded({extended: true}))

app.use('/api/user', userRouter)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server berjalan di http://localhost:${PORT}/api/user`)
})