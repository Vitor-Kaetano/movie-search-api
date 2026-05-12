import express from 'express'
import router from './routes/routes.js'
import 'dotenv/config'

const app = express()
app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => res.json({ status: 'ok', service: 'CineSearch API' }))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))
