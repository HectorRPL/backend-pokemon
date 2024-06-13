import express, {Request, Response} from 'express'

require('dotenv').config()
const {dbConnection} = require('./database/config')

const app = express()
const PORT = process.env.PORT || 3000

// Conectar a MongoDB usando Mongoose
dbConnection().then((r: any) => console.log('r', r))

// Rutas de ejemplo inicial
app.get('/', (req: Request, res: Response) => res.send('Pokemon app'))

// Iniciar el servidor
app.listen(PORT, () => console.log(`\x1b[33m SERVER ON => http://localhost:${PORT}`))

