const express = require('express')
const app = express()
const port = 3000

// router
app.get('/', (req, res) => res.send('Hello World!'))

// server listen on localhost:3000
app.listen(port, () => console.log(`Example app litening on port ${port}!`))
