import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dns from 'dns'
import userRoutes from './routes/userRoutes.js'

const app = express()
const port = 5000;

dns.setServers(["8.8.8.8", "1.1.1.1"])

app.use(cors())
app.use(express.json())

// connect database
connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// routes
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})