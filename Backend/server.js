import express from 'express';
import path from 'path';
import cors from 'cors'
import { fileURLToPath } from 'url';
import connection from './config/db.js'
import adminRoutes from './routes/adminRoutes.js'
import enquiryRoutes from './routes/enquiryRoutes.js'
const app = express()

const port = 7898
connection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/admin', adminRoutes)
app.use('/user', enquiryRoutes)


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
})

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`)
})
