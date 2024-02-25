const express = require("express")
const { port } = require('./config/config')
const app = express()
const routerApi = require('./routes')
const { connectDB } = require('./database')

app.use(express.json())
routerApi(app)
connectDB()

app.listen(port, () => console.log('Server listening on port', port))
