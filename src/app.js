const express = require('express')
const cors = require('cors')

const app = express()
const port = 3333


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

const controllers = require('./controllers')

app.use('/search', controllers.search)


app.get('*', (req, res) => res.status(400).send('Bad!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
