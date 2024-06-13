const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

// Rutas de ejemplo inicial
app.get('/', (req, res) => res.send('Pokemon app'))

// Iniciar el servidor
app.listen(PORT, () => console.log(`SERVER ON => http://localhost:${PORT}`))